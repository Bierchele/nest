import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BarcodeDocument = Barcode & Document;

@Schema()
export class Barcode {
  @Prop({ required: true })
  ean: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;
}

export const BarcodeSchema = SchemaFactory.createForClass(Barcode);
