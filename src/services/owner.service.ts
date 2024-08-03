import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

export class OwnerService {
  constructor(private prisma: PrismaService) {}

  async createOwner(owner: Prisma.OwnerCreateInput) {
    return await this.prisma.owner.create({ data: owner });
  }
}
