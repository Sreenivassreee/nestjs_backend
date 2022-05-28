import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService,AuthRepository],
  imports:[TypeOrmModule.forFeature([User])]
})
export class AuthModule {}
