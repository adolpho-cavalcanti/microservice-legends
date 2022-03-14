import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendsModule } from './legends/legends.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:JmyQfzcqwHVyCG5s@cluster0.rpbqu.mongodb.net/legendscards?retryWrites=true&w=majority', { 
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