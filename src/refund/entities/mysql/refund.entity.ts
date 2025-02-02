import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentEntity } from '../../../payment/entities/mysql/payment.entity';

@Entity('refund')
export class RefundEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'refund_id'
    })
    refundId: number;

    // @Column('int', {
    //   name: 'payment_id',
    // })
    // paymentId: number;

    @Column('int', {
        name: 'refund_price'
    })
    refundPrice: number;

    @Column('varchar', {
        name: 'refund_status'
    })
    refundStatus: string;

    @Column('varchar', {
        name: 'refund_reason'
    })
    refundReason: string;

    @Column('datetime', {
        name: 'created_at'
    })
    createdAt: Date;

    @Column('datetime', {
        name: 'updated_at'
    })
    updatedAt: Date;

    @OneToOne(() => PaymentEntity, (payment: PaymentEntity) => payment.refund)
    @JoinColumn({
        name: 'payment_id'
    })
    payment: PaymentEntity;
}
