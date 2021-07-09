import { barcodeStub } from './../stubs/barcode.stub';
import { CreateBarcodeDto } from './../../create-barcode.dto';
export const mockMongoose = {
  postEntry: jest
    .fn()
    .mockImplementation((createBarcodeDto: CreateBarcodeDto) => ({
      statusCode: 201,
      message: 'Barcode added succsessfully',
    })),
  getEntries: jest.fn().mockImplementation(() => barcodeStub()),
  deleteEntry: jest.fn().mockImplementation((id: string) => ({
    statusCode: 201,
    message: 'delete successfully',
    count: { deleteCount: '1' },
  })),
};
