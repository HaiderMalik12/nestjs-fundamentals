import { Resolver, Query } from '@nestjs/graphql';
import { Product } from './schemas/product.schema';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query('products')
  async getProducts(): Promise<Product[]> {
    return this.productService.fetchProducts();
  }
}
