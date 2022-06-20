import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly repository: Repository<Product>) { }

  create(createProductDto: CreateProductDto) {
    return this.repository.save(createProductDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.repository.update(id, updateProductDto);
  }

  remove(id: number) {
    this.repository.delete(id);
  }
}
