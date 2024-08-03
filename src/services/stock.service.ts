import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

export class StockService {
  constructor(private prisma: PrismaService) {}

  async getStocks() {
    return await this.prisma.stock.findMany();
  }

  async createStock(stock: Prisma.StockCreateInput) {
    return await this.prisma.stock.create({ data: stock });
  }

  async updateStock(id: number, stock: Prisma.StockUpdateInput) {
    return await this.prisma.stock.update({
      where: { id },
      data: stock,
    });
  }

  async deleteStock(id: number) {
    return await this.prisma.stock.delete({
      where: { id },
    });
  }
}
