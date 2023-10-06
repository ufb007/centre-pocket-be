import { Controller, Get, HttpStatus, Param, Req, UseGuards} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class AppController {
    @Get('facebook')
    @UseGuards(AuthGuard("facebook"))
    async facebookLogin(): Promise<any> {
        return HttpStatus.OK;
    }

    @Get('facebook/redirect')
    @UseGuards(AuthGuard('facebook'))
    async facebookLoginRedirect(@Req() req: Request): Promise<any> {
        return {
            statusCode: HttpStatus.OK,
            data: req
        }
    }
}