import { BarcodesModule } from './barcodes/barcode.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

//NestJs basiert auf Modularität, das bedeutet, dass nicht alles auf einmal
//compiliert wird, sondern einzelne Module, die spezielle zugeteilte aufgaben haben

@Module({
  imports: [
    BarcodesModule,
    MongooseModule.forRoot('mongodb://localhost:27030'),
  ],
  //controller kümmern sich um requests und responses
  controllers: [AppController],
  //externe klassen um funktionalität bereitzustellen
  providers: [AppService],
})
export class AppModule {}
