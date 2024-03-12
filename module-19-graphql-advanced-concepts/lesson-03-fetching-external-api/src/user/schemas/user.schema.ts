import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { Product } from 'src/product/schemas/product.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({ type: [Types.ObjectId], ref: 'products' })
  products: Product[];
}

export const UserSchema = SchemaFactory.createForClass(User);
