import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Status, Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  findAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }
  @Get('/:id')
  findTaskById(@Param('id') id: string): Task {
    return this.taskService.findTaskById(id);
  }
  @Delete('/:id')
  deleteById(@Param('id') id: string): Task {
    return this.taskService.deleteById(id);
  }
  @Patch('/:id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: Status) {
    return this.taskService.updateStatus(id, status);
  }
}
