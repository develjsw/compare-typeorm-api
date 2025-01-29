import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'develjsw1993!@',
      database: 'orm',
      entities: [__dirname + '/**/mysql/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
