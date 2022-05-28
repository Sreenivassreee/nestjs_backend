import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './tasks.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
  imports: [TypeOrmModule.forFeature([Task])],
})
export class TasksModule {}
