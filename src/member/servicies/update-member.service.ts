import { Injectable, NotFoundException } from '@nestjs/common';
import { MemberRepository } from '../repositories/member.repository';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { MemberEntity } from '../entities/mysql/member.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UpdateMemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async updateMemberById(
    memberId: number,
    updateMemberDto: UpdateMemberDto,
  ): Promise<{ memberId: number }> {
    const member: MemberEntity | null =
      await this.memberRepository.findMemberById(memberId);

    if (!member) {
      throw new NotFoundException('회원 정보가 존재하지 않습니다.');
    }

    const memberEntity = plainToInstance(MemberEntity, updateMemberDto);
    memberEntity.updatedAt = new Date();

    await this.memberRepository.updateMemberById(memberId, memberEntity);

    return {
      memberId,
    };
  }
}
