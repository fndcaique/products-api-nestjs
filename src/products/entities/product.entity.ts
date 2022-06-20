import { UpdateProductDto } from './../dto/update-product.dto';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 128 })
  name: string;

  @Column({
    type: 'real',
    name: 'buy_price',
  })
  private buyPrice: number;

  @Column({
    type: 'real',
    name: 'sell_price',
  })
  sellPrice: number;

  merge({ name, buyPrice, sellPrice }: UpdateProductDto) {
    this.name = name || this.name;
    this.buyPrice = buyPrice || this.buyPrice;
    this.sellPrice = sellPrice || this.sellPrice;
    return this;
  }
}
