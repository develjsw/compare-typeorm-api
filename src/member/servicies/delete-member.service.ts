import { Injectable } from '@nestjs/common';
import { MemberRepository } from '../repositories/member.repository';

@Injectable()
export class DeleteMemberService {
    constructor(private readonly memberRepository: MemberRepository) {}

    async deleteMemberById(memberId: number): Promise<{ memberId: number }> {
        await this.memberRepository.deleteMemberById(memberId);

        return {
            memberId
        };
    }
}
