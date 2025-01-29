import { Injectable } from '@nestjs/common';
import { MemberEntity } from '../entities/mysql/member.entity';
import { MemberRepository } from '../repositories/member.repository';
import { FindMemberDto } from '../dto/find-member.dto';
import { TPaging } from '../type/paging';

@Injectable()
export class FindMemberService {
  constructor(private readonly memberRepository: MemberRepository) {}

  async findMemberById(memberId: number): Promise<MemberEntity> {
    return await this.memberRepository.findMemberById(memberId);
  }

  async findMemberWithPagingByConditions(
    findMemberDto: FindMemberDto,
  ): Promise<TPaging<MemberEntity>> {
    const { page, take } = findMemberDto;

    const memberCount: number =
      await this.memberRepository.findMemberCountByConditions(findMemberDto);

    const memberList: MemberEntity[] =
      await this.memberRepository.findMemberWithPagingByConditions(
        findMemberDto,
      );

    return {
      paging: {
        page,
        take,
        count: memberCount,
      },
      data: memberList,
    };
  }
}
