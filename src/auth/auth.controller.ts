import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    @Post('/create')
    createUser(@Body() userDto:UserDto):Promise<void>{
        console.log(userDto);
        return this.authService.createUser(userDto)
    }
}
