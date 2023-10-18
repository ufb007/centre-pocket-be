import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ContentCreationService {
    constructor(private openai: OpenAI) {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    async getContent() {
        const chatCompletion = await this.openai.chat.completions.create({
            messages: [{ role: "user", content: "Say this is a test" }],
            model: "gpt-3.5-turbo",
        });

        return chatCompletion
    }
}
