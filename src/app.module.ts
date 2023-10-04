import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/Player';
import { PlayersModule } from './players/players.module';

@Module({
  controllers: [
    AppController,
  ],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor
  }],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'centrepocket',
      entities: [Player],
      synchronize: true,
      autoLoadEntities: true
    }),
    SummaryModule, 
    ReportModule, 
    ProductsModule,
    PlayersModule
  ]
})

export class AppModule {}
