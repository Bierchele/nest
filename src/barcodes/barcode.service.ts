import { CreateBarcodeDto } from './create-barcode.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Barcode } from './barcode.schema';

@Injectable()
export class BarcodeService {
  constructor(@InjectModel('Barcode') private barcodeModel: Model<Barcode>) {}

  async insertBarcode(CreateBarcodeDto: CreateBarcodeDto) {
    const newBarcode = new this.barcodeModel(CreateBarcodeDto);
    await newBarcode.save();
    return { statusCode: 201, message: '' };
  }

  async exertBarcodes() {
    const barcodes = await this.barcodeModel.find().exec();
    return barcodes.map((b) => ({
      ean: b.ean,
      firstName: b.firstName,
      lastName: b.lastName,
    }));
  }
}
