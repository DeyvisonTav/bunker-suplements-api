import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

export class OrderService {
  constructor(private prisma: PrismaService) {}

  async getOrders() {
    return await this.prisma.order.findMany();
  }

  async createOrder(order: Prisma.OrderCreateInput) {
    return await this.prisma.order.create({ data: order });
  }

  async updateOrder(id: number, order: Prisma.OrderUpdateInput) {
    return await this.prisma.order.update({
      where: { id },
      data: order,
    });
  }

  async deleteOrder(id: number) {
    return await this.prisma.order.delete({ where: { id } });
  }

  async getOrder(id: number) {
    return await this.prisma.order.findUnique({ where: { id } });
  }
}
