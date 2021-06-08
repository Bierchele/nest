import { CreateBarcodeDto } from './create-barcode.dto';
import { BarcodeService } from './barcode.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Barcode } from './barcode.schema';

@Controller()
export class BarcodeController {
  constructor(private readonly BarcodeService: BarcodeService) {}
  @Get('entries')
  async getEntries(): Promise<Barcode[]> {
    const barcodes: Barcode[] = await this.BarcodeService.exertBarcodes();
    return barcodes;
  }

  @Post('entry')
  async postEntry(@Body() CreateBarcodeDto: CreateBarcodeDto) {
    const result = await this.BarcodeService.insertBarcode(CreateBarcodeDto);
    return result;
  }
}
