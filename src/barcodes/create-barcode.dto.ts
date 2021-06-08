import { Length } from 'class-validator';

export class CreateBarcodeDto {
  @Length(5, 5, {
    //  message: 'The ean code do not fits the global regulation',
  })
  ean: string;
  @Length(3, 20, {
    // message: 'The ean code do not fits the european regulation',
  })
  firstName: string;
  @Length(3, 20, {
    //   message: 'The ean code do not fits the european regulation',
  })
  lastName: string;
}
