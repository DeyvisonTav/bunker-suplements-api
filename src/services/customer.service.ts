import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async getCustomers() {
    return await this.prisma.customer.findMany();
  }

  async createCustomer(customer: Prisma.CustomerCreateInput) {
    return await this.prisma.customer.create({ data: customer });
  }

  async updateCustomer(id: number, customer: Prisma.CustomerUpdateInput) {
    return await this.prisma.customer.update({
      where: { id },
      data: customer,
    });
  }

  async deleteCustomer(id: number) {
    return await this.prisma.customer.delete({ where: { id } });
  }
}
