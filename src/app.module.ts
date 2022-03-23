import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendsModule } from './legends/legends.module';

@Module({
  imports: [
    MongooseModule.forRoot(
        process.env.MONGO_DB_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
      },
    ),
    LegendsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}