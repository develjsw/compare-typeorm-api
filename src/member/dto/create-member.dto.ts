import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
    @IsNotEmpty()
    @IsString()
    memberName: string;

    @IsOptional()
    @IsString()
    email: string;
}
