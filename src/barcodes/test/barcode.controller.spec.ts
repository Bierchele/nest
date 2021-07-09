import { BarcodeController } from '../barcode.controller';
import { Barcode } from '../barcode.schema';
import { barcodeStub } from './stubs/barcode.stub';
import { BarcodeService } from '../barcode.service';
import { MockBarcodeService } from './__mocks__/barcode.service';
import { Test, TestingModule } from '@nestjs/testing';
//jest.mock('../barcode.service');

describe('BarcodeController', () => {
  let barcodeController: BarcodeController;
  let barcodeService: BarcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarcodeController],
      providers: [BarcodeService],
    })
      .overrideProvider(BarcodeService)
      .useValue(MockBarcodeService)
      .compile();

    barcodeService = module.get<BarcodeService>(BarcodeService);
    barcodeController = module.get<BarcodeController>(BarcodeController);
    jest.clearAllMocks();
  });

  describe('getEntries', () => {
    describe('When getEntries gets called', () => {
      let barcodes: Barcode[];
      beforeEach(async () => {
        barcodes = await barcodeController.getEntries();
      });
      it('then barcode service should get called', () => {
        expect(barcodeService.getEntries).toBeCalled;
      });
      it('then barcode service should return a list of barcodes', () => {
        expect(barcodes).toEqual(barcodeStub());
      });
    });
  });

  describe('postEntry', () => {
    describe('When postEntry gets called', () => {
      let barcodes;
      const barcode: Barcode = {
        ean: '12345',
        firstName: 'pups',
        lastName: 'pups2',
      };
      beforeEach(async () => {
        barcodes = await barcodeController.postEntry(barcode);
      });
      it('then barcode service should get called', () => {
        expect(barcodeService.postEntry).toBeCalled;
      });
      it('then barcode service should return the list of barcodes with the new barcode', () => {
        expect(barcodes).toEqual({
          codes: 201,
          message: 'succsess',
        });
      });
    });
  });

  describe('deleteEntry', () => {
    describe('When postEntry gets called', () => {
      let barcode;
      beforeEach(async () => {
        barcode = await barcodeController.deleteEntry('1');
      });
      it('then barcode service should get called', () => {
        expect(barcodeService.deleteEntry).toBeCalled;
      });
      it('then barcode service should return the list of barcodes with the new barcode', () => {
        expect(barcode).toEqual({
          statusCode: 201,
          message: 'delete successfully',
          count: { deleteCount: '1' },
        });
      });
    });
  });
});
