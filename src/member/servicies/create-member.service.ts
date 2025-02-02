import { Injectable } from '@nestjs/common';
import { MemberRepository } from '../repositories/member.repository';
import { CreateMemberDto } from '../dto/create-member.dto';
import { plainToInstance } from 'class-transformer';
import { MemberEntity } from '../entities/mysql/member.entity';

@Injectable()
export class CreateMemberService {
    constructor(private readonly memberRepository: MemberRepository) {}

    async createMember(createMemberDto: CreateMemberDto): Promise<{ memberId: number }> {
        const memberEntity: MemberEntity = plainToInstance(MemberEntity, createMemberDto);
        memberEntity.createdAt = new Date();

        const memberId: number = await this.memberRepository.createMember(memberEntity);

        return {
            memberId
        };
    }
}
