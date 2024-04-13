import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {  }

  create(createBookDto: CreateBookDto) {
    return this.prisma.book.create({ data: createBookDto });
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findInStock() { 
    return this.prisma.book.findMany({ where: { stock: { gt: 0 } } });
  }

  findOutOfStock() { 
    return this.prisma.book.findMany({ where: { stock: { equals: 0 } } });
  }

  findOne(id: string) {
    return this.prisma.book.findUnique({ where: { id } }) || null;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({ where: { id }, data: updateBookDto });
  }

  remove(id: string) {
    return this.prisma.book.delete({ where: { id } });
  }
}
