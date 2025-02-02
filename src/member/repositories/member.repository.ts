import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { MemberEntity } from '../entities/mysql/member.entity';

@Injectable()
export class MemberRepository {
    private readonly memberRepository: Repository<MemberEntity>;

    constructor(protected readonly dataSource: DataSource) {
        this.memberRepository = dataSource.getRepository(MemberEntity);
    }

    async findMemberById(memberId: number): Promise<MemberEntity | null> {
        return await this.memberRepository.findOneBy({
            memberId
        });
    }

    async findMemberWithPagingByConditions(
        memberDto: Partial<MemberEntity> & { page: number; take: number }
    ): Promise<MemberEntity[]> {
        const { page, take, memberName, email } = memberDto;

        const skip = (page - 1) * take; // 페이지 번호 * take

        return await this.memberRepository.find({
            take,
            skip,
            where: {
                ...(memberName && { memberName }),
                ...(email && { email })
            }
        });
    }

    async findMemberCountByConditions(memberDto: Partial<MemberEntity>): Promise<number> {
        const { memberName, email } = memberDto;

        return await this.memberRepository.count({
            where: {
                ...(memberName && { memberName }),
                ...(email && { email })
            }
        });
    }

    async createMember(memberDto: Partial<MemberEntity>): Promise<number> {
        const insertResult: InsertResult = await this.memberRepository.insert(memberDto);

        const { raw } = insertResult;

        if (!raw?.insertId) {
            throw new InternalServerErrorException('회원 생성이 정상적으로 동작되지 않았습니다.');
        }

        return raw.insertId;
    }

    async updateMemberById(memberId: number, memberDto: Partial<MemberEntity>): Promise<void> {
        const updateResult: UpdateResult = await this.memberRepository.update(memberId, memberDto);

        const { affected } = updateResult;

        if (!affected) {
            throw new InternalServerErrorException('회원 수정이 정상적으로 동작되지 않았습니다.');
        }
    }

    async deleteMemberById(memberId: number): Promise<void> {
        const deleteResult: DeleteResult = await this.memberRepository.delete(memberId);

        const { affected } = deleteResult;

        if (!affected) {
            throw new InternalServerErrorException('회원 삭제가 정상적으로 동작되지 않았습니다.');
        }
    }
}
