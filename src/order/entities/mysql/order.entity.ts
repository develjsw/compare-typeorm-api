import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MemberEntity } from '../../../member/entities/mysql/member.entity';
import { OrderDetailEntity } from '../../../order-detail/entities/mysql/order-detail.entity';
import { PaymentEntity } from '../../../payment/entities/mysql/payment.entity';

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'order_id'
    })
    orderId: number;

    // @Column('int', {
    //   name: 'member_id',
    // })
    // memberId: number;

    @Column('int', {
        name: 'total_order_price'
    })
    totalOrderPrice: number;

    @Column('varchar', {
        name: 'order_status'
    })
    orderStatus: string;

    @Column('datetime', {
        name: 'created_at'
    })
    createdAt: Date;

    @Column('datetime', {
        name: 'updated_at'
    })
    updatedAt: Date;

    @ManyToOne(() => MemberEntity, (member: MemberEntity) => member.orders)
    @JoinColumn({ name: 'member_id' })
    member: MemberEntity;

    @OneToMany(() => OrderDetailEntity, (orderDetail: OrderDetailEntity) => orderDetail.order)
    orderDetails: OrderDetailEntity[];

    @OneToMany(() => PaymentEntity, (payment: PaymentEntity) => payment.order)
    payments: PaymentEntity[];
}
