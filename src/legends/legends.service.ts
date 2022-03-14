import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Legend } from './interfaces/legends/legend.interface';

@Injectable()
export class LegendsService {

    constructor(
        @InjectModel('Legend') private readonly legendModel: Model<Legend>
    ){}

    private readonly logger = new Logger(LegendsService.name);

    async createLegend(legend: Legend): Promise<Legend>{
      try {
        const legendCreated = new this.legendModel(legend);
        return await legendCreated.save();
      } catch (error) {
        this.logger.error(`Error: ${JSON.stringify(error.message)}`);
        throw new RpcException(error.message);
      }
    }

    async listLegend(): Promise<Legend[]>{
      try {
        return await this.legendModel.find().exec();
      } catch (error) {
        this.logger.error(`Error: ${JSON.stringify(error.message)}`);
        throw new RpcException(error.message);
      }
    }

    async listLegendForId(_id: string): Promise<Legend>{
      try {
        return await this.legendModel.findOne({_id}).exec();
      } catch (error) {
        this.logger.error(`Error: ${JSON.stringify(error.message)}`);
        throw new RpcException(error.message);
      }
    }

}
