import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDetailEntity } from '../../../order-detail/entities/mysql/order-detail.entity';

@Entity('goods')
export class GoodsEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'goods_id',
  })
  goodsId: number;

  @Column('varchar', {
    name: 'goods_name',
  })
  goodsName: string;

  @Column('int', {
    name: 'goods_price',
  })
  goodsPrice: number;

  @Column('datetime', {
    name: 'created_at',
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(
    () => OrderDetailEntity,
    (orderDetail: OrderDetailEntity) => orderDetail.goods,
  )
  orderDetails: OrderDetailEntity[];
}
