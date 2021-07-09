import { CreateBarcodeDto } from './create-barcode.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Barcode } from './barcode.schema';

@Injectable()
export class BarcodeService {
  constructor(@InjectModel('Barcode') private barcodeModel: Model<Barcode>) {}

  async postEntry(CreateBarcodeDto: CreateBarcodeDto) {
    const newBarcode = new this.barcodeModel(CreateBarcodeDto);
    await newBarcode.save();
    return { statusCode: 201, message: 'Barcode added succsessfully' };
  }

  async getEntries() {
    const barcodes = await this.barcodeModel.find().exec();
    return barcodes;
  }

  async deleteEntry(id: string) {
    const barcodes = await this.barcodeModel.deleteOne({ _id: Object(id) });
    return { statusCode: 201, message: 'delete successfully', count: barcodes };
  }
}
