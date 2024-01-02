import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players/players.entities'; 
import { PlayersModule } from './players/players.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { FacebookStrategy } from './meta.strategy';
import { MessagesModule } from './messages/messages.module';
import { ContentCreationModule } from './content.creation/content.creation.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { FixturesService } from './fixtures/fixtures.service';
import { FixturesResolver } from './fixtures/fixtures.resolver';

@Module({
  controllers: [
    AppController,
  ],
  providers: [
    AppService, 
    FacebookStrategy, 
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }, FixturesService, FixturesResolver
  ],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      entities: [Player],
      synchronize: true,
      autoLoadEntities: true
    }),
    SummaryModule, 
    ReportModule, 
    ProductsModule,
    PlayersModule,
    TournamentsModule,
    MessagesModule,
    ContentCreationModule
  ]
})

export class AppModule {}
