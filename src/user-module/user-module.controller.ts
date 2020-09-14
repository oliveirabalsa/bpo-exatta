import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Delete,
    Param,
    Query,
} from '@nestjs/common';
import { UserDto } from './DTO/user.dto';
import UserModuleService from './user-module.service';
@Controller('user')

export class UserModuleController {
    @Get()
    get(@Query() page: number) {
        return UserModuleService.getUser(page);
    }

    @Post()
    create(@Body() User: UserDto) {
        return UserModuleService.postUser(User);
    }

    @Put(':id')
    update(@Param() params, @Body() User: UserDto) {
        return UserModuleService.putUser(User, params.id);
    }

    @Delete(':id')
    delete(@Param() params) {
        return UserModuleService.deleteUser(params.id);
    }
}
