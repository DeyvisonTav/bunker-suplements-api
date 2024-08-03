import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts() {
    return await this.prisma.product.findMany();
  }

  async createProduct(product: Prisma.ProductCreateInput) {
    return await this.prisma.product.create({ data: product });
  }

  async updateProduct(id: number, product: Prisma.ProductUpdateInput) {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async deleteProduct(id: number) {
    return await this.prisma.product.delete({ where: { id } });
  }
}
