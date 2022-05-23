import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterDto } from './dto/filter-tasks.dto';
import { UpdateTaskStatusdto } from './dto/update-task.dto';
import { Status, Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Get()
  findTasks(@Query() filterDto: FilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskService.getSearchTasks(filterDto);
    } else {
      return this.taskService.getAllTasks();
    }
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
  updateStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusdto: UpdateTaskStatusdto,
  ) {
    return this.taskService.updateStatus(id, updateTaskStatusdto.status);
  }
}
