import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { FindMemberService } from './servicies/find-member.service';
import { CreateMemberService } from './servicies/create-member.service';
import { MemberEntity } from './entities/mysql/member.entity';
import { CreateMemberDto } from './dto/create-member.dto';
import { FindMemberDto } from './dto/find-member.dto';
import { UpdateMemberService } from './servicies/update-member.service';
import { UpdateMemberDto } from './dto/update-member.dto';
import { TPaging } from '../type/paging';
import { DeleteMemberService } from './servicies/delete-member.service';

@Controller('members')
export class MemberController {
    constructor(
        private readonly findMemberService: FindMemberService,
        private readonly createMemberService: CreateMemberService,
        private readonly updateMemberService: UpdateMemberService,
        private readonly deleteMemberService: DeleteMemberService
    ) {}

    @Get(':memberId')
    async findMemberById(@Param('memberId', ParseIntPipe) memberId: number): Promise<MemberEntity> {
        return await this.findMemberService.findMemberById(memberId);
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async findMemberWithPagingByConditions(@Query() findMemberDto: FindMemberDto): Promise<TPaging<MemberEntity>> {
        return await this.findMemberService.findMemberWithPagingByConditions(findMemberDto);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createMember(@Body() createMemberDto: CreateMemberDto): Promise<{ memberId: number }> {
        return await this.createMemberService.createMember(createMemberDto);
    }

    @Patch(':memberId')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateMemberById(
        @Param('memberId', ParseIntPipe) memberId: number,
        @Body() updateMemberDto: UpdateMemberDto
    ): Promise<{ memberId: number }> {
        return await this.updateMemberService.updateMemberById(memberId, updateMemberDto);
    }

    @Delete(':memberId')
    async deleteMemberById(@Param('memberId', ParseIntPipe) memberId: number): Promise<{ memberId: number }> {
        return await this.deleteMemberService.deleteMemberById(memberId);
    }
}
