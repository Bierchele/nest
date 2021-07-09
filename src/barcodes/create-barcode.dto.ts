import { IsString, Length } from 'class-validator';

export class CreateBarcodeDto {
  @Length(5, 5, {
    message:
      'The ean do not fits the regulation it has to be exactly 5 characters long',
  })
  ean: string;
  @IsString()
  @Length(3, 15, {
    // message: 'The ean code do not fits the european regulation',
  })
  firstName: string;
  @IsString()
  @Length(3, 15, {
    //   message: 'The ean code do not fits the european regulation',
  })
  lastName: string;
}
