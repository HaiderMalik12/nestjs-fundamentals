import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProductOwnerResolver } from './product-owner.resolver';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { User, UserSchema } from 'src/user/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: User.name, schema: UserSchema },
    ]),
    UserModule,
  ],
  providers: [
    ProductResolver,
    ProductService,
    ProductOwnerResolver,
    UserService,
  ],
})
export class ProductModule {}
