import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { UserService } from '../user/user.service';
import { Product } from 'src/graphql';

@Resolver('Product')
export class ProductOwnerResolver {
  constructor(
    private productService: ProductService,
    private ownerService: UserService,
  ) {}

  @ResolveField('owner')
  async getOwner(
    @Parent()
    product: Product,
  ) {
    console.log('DB CALLED');
    return await this.ownerService.findOneById(product.owner);
  }
}
