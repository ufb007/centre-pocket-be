import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class ContentCreationService {
    private openai: OpenAI

    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    async getContent() {
        /*return await this.openai.chat.completions.create({
            messages: [{ role: "user", content: "Can you improve this sentence - 'I am not sure what to say anymore'" }],
            model: "gpt-3.5-turbo"
        });*/

        return 'Open AI Turned off';
    }
}
