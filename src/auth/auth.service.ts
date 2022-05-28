import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';
import { UserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User)
    private authRepository:AuthRepository
    ){}
    async createUser(userDto:UserDto):Promise<void>{
        const user= this.authRepository.create({username:userDto.username,password:userDto.password})
        await this.authRepository.save(user)
    }
}
