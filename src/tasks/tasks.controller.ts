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
  getAllTasks() {
    return this.taskService.getAllTasks();
  }
  @Get('/:id')
  findTaskById(@Param('id') id: string) {
    console.log(id);
    return this.taskService.findTaskById(id);
  }
  @Delete('/:id')
  deleteById(@Param('id') id: string): void {
    this.taskService.deleteByid(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }
  @Patch('/:id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: Status): Task {
    return this.taskService.updateStatus(id, status);
  }
}
