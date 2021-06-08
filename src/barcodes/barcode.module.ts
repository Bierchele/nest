import { BarcodeService } from './barcode.service';
import { BarcodeController } from './barcode.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BarcodeSchema } from './barcode.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Barcode', schema: BarcodeSchema }]),
  ],
  controllers: [BarcodeController],
  providers: [BarcodeService],
})
export class BarcodesModule {}
