import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('member')
export class MemberEntity {
  @PrimaryColumn('int', {
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
}
