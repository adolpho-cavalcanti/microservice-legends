import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { LegendsService } from './legends.service';
import { Legend } from './interfaces/legends/legend.interface';

const ackErrors: string[] = ['EA001', 'EA002', 'EA003', 'EA004', 'EA005', 'EA006', 'EA007', 'EA008'];

@Controller()
export class LegendsController {
    constructor(
        private readonly appService: LegendsService
    ) {}

    logger = new Logger(LegendsController.name);

    @EventPattern('create-legend')
    async createdLegend(
        @Payload() legend: Legend, @Ctx() context: RmqContext
    ){
      const channel = context.getChannelRef();
      const originalMessage = context.getMessage();

      this.logger.log(`Jogador Lendário: ${JSON.stringify(legend)}`);

      try {
        await this.appService.createLegend(legend);
        await channel.ack(originalMessage);
      }catch (error) {
        this.logger.error(`Error: ${JSON.stringify(error.message)}`)
        ackErrors.map( async ackError => {
          if(error.message.includes(ackError)) {
            await channel.ack(originalMessage);
          }
        })
      }

    }

    @MessagePattern('list-legend')
    async listLegend(
      @Ctx() context: RmqContext
    ): Promise<Legend[]> {
      const channel = context.getChannelRef();
      const originalMessage = context.getMessage();

      try {
          return await this.appService.listLegend();
      } finally {
        await channel.ack(originalMessage);
      }
    }

    @MessagePattern('list-legend-id')
    async listLegendForId(
      @Payload() _id: string, @Ctx() context: RmqContext
    ) {
      const channel = context.getChannelRef();
      const originalMessage = context.getMessage();

      try {
          return await this.appService.listLegendForId(_id);
      } finally {
        await channel.ack(originalMessage);
      }
    } 

}
