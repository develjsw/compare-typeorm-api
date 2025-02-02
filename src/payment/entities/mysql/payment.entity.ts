import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../../../order/entities/mysql/order.entity';
import { RefundEntity } from '../../../refund/entities/mysql/refund.entity';

@Entity('payment')
export class PaymentEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'payment_id'
    })
    paymentId: number;

    // @Column('int', {
    //   name: 'order_id',
    // })
    // orderId: number;

    @Column('int', {
        name: 'payment_price'
    })
    paymentPrice: number;

    @Column('varchar', {
        name: 'payment_method'
    })
    paymentMethod: string;

    @Column('varchar', {
        name: 'payment_status'
    })
    paymentStatus: string;

    @Column('datetime', {
        name: 'created_at'
    })
    createdAt: Date;

    @Column('datetime', {
        name: 'updated_at'
    })
    updatedAt: Date;

    @ManyToOne(() => OrderEntity, (order: OrderEntity) => order.payments)
    @JoinColumn({
        name: 'order_id'
    })
    order: OrderEntity;

    @OneToOne(() => RefundEntity, (refund: RefundEntity) => refund.payment)
    refund: RefundEntity;
}
