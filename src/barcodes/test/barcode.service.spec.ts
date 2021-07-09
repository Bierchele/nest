import { mockMongoose } from './__mocks__/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { BarcodeService } from './../barcode.service';
import { Barcode } from '../barcode.schema';

describe('BarcodeService', () => {
  let barcodeService: BarcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarcodeService],
    })
      .overrideProvider(BarcodeService)
      .useValue(mockMongoose)
      .compile();
    barcodeService = module.get<BarcodeService>(BarcodeService);
  });

  describe('postEntry', () => {
    describe('When postEntry gets called', () => {
      const barcode: Barcode = {
        ean: '12345',
        firstName: 'pups',
        lastName: 'pups2',
      };
      it('then barcode service should save the barcode an give a positve responce', async () => {
        expect(await barcodeService.postEntry(barcode)).toEqual({
          statusCode: 201,
          message: 'Barcode added succsessfully',
        });
      });
    });
  });

  describe('getEntries', () => {
    describe('When getEntries gets called', () => {
      it('then barcode service returns a list of barcodes', async () => {
        expect(await barcodeService.getEntries()).toEqual([
          { ean: '22988', firstName: 'Wizzy', lastName: 'Westwood' },
        ]);
      });
    });
  });

  describe('deleteEntry', () => {
    describe('When deleteEntry gets called', () => {
      it('then barcode service should return an object with the delete count', () => {
        expect(barcodeService.deleteEntry('1')).toEqual({
          statusCode: 201,
          message: 'delete successfully',
          count: { deleteCount: '1' },
        });
      });
    });
  });
});
