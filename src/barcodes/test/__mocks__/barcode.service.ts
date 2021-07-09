import { Barcode } from './../../barcode.schema';
import { barcodeStub } from './../stubs/barcode.stub';

export const MockBarcodeService = {
  getEntries: jest.fn(() => {
    return barcodeStub();
  }),
  postEntry: jest.fn((barcode: Barcode) => {
    const barcodeList = barcodeStub();
    barcodeList.push(barcode);
    return { codes: 201, message: 'succsess' };
  }),

  deleteEntry: jest.fn((id: string) => {
    const barcodes = { deleteCount: id };
    return { statusCode: 201, message: 'delete successfully', count: barcodes };
  }),
};
