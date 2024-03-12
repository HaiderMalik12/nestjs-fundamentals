import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    type: Number,
  })
  qty: number;

  @Prop({
    type: String,
    enum: ['NEW', 'RELEASED', 'FAILED'],
    default: 'NEW',
  })
  status: string;

  @Prop({
    type: Types.ObjectId,
    ref: User.name,
  })
  owner: User;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
