import { Barcode } from './../../barcode.schema';

export const barcodeStub = (): Barcode[] => {
  return [{ ean: '22988', firstName: 'Wizzy', lastName: 'Westwood' }];
};
