import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../../../order/entities/mysql/order.entity';
import { GoodsEntity } from '../../../goods/entities/mysql/goods.entity';

@Entity('order_detail')
export class OrderDetailEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'order_detail_id'
    })
    orderDetailId: number;

    // @Column('int', {
    //   name: 'order_id',
    // })
    // orderId: number;

    // @Column('int', {
    //   name: 'goods_id',
    // })
    // goodsId: number;

    @Column('tinyint', {
        name: 'quantity'
    })
    quantity: number;

    @Column('int', {
        name: 'order_price'
    })
    orderPrice: number;

    @ManyToOne(() => OrderEntity, (order: OrderEntity) => order.orderDetails)
    @JoinColumn({
        name: 'order_id'
    })
    order: OrderEntity;

    @ManyToOne(() => GoodsEntity, (goods: GoodsEntity) => goods.orderDetails)
    @JoinColumn({
        name: 'goods_id'
    })
    goods: GoodsEntity;
}
