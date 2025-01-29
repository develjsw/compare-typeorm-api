import { Injectable } from '@nestjs/common';
import { MemberRepository } from '../repositories/member.repository';
import { CreateMemberDto } from '../dto/create-member.dto';

@Injectable()
export class CreateMemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async createMember(
    createMemberDto: CreateMemberDto,
  ): Promise<{ memberId: number }> {
    const memberId: number = await this.memberRepository.createMember(
      createMemberDto,
    );

    return {
      memberId,
    };
  }
}
