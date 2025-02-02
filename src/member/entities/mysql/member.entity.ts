import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderEntity } from '../../../order/entities/mysql/order.entity';

@Entity('member')
export class MemberEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'member_id',
  })
  memberId: number;

  @Column('varchar', {
    name: 'member_name',
  })
  memberName: string;

  @Column('varchar', {
    name: 'email',
  })
  email: string;

  @Column('datetime', {
    name: 'created_at',
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
  })
  updatedAt: Date;

  @OneToMany(() => OrderEntity, (order: OrderEntity) => order.member)
  orders: OrderEntity[];
}
