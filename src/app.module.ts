import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsModule } from './goods/goods.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { PaymentModule } from './payment/payment.module';
import { RefundModule } from './refund/refund.module';

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
            logging: 'all'
        }),
        MemberModule,
        GoodsModule,
        OrderModule,
        OrderDetailModule,
        PaymentModule,
        RefundModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
