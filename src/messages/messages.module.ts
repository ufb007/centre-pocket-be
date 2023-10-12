import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/entities/Message';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Message])
    ],
    controllers: [MessagesController],
    providers: [MessagesService],
    exports: [TypeOrmModule]
})
export class MessagesModule {}
