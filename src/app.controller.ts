import { Controller, Get} from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    indexController() {
        return 'show this here please'
    }
}