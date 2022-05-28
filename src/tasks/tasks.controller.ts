import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    console.log(createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }

  @Get('/:id')
  findOneById(@Param('id') id: string): Promise<Task> {
    console.log(id);
    return this.taskService.findOneId(id);
  }

  // @Get()
  // findTasks(@Query() filterDto: FilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.taskService.getSearchTasks(filterDto);
  //   } else {
  //     return this.taskService.getAllTasks();
  //   }
  // }
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.taskService.createTask(createTaskDto);
  // }
  // @Get('/:id')
  // findTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.taskService.findOneId(id);
  // }
  // @Delete('/:id')
  // deleteById(@Param('id') id: string): Task {
  //   return this.taskService.deleteById(id);
  // }
  // @Patch('/:id/status')
  // updateStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusdto: UpdateTaskStatusdto,
  // ) {
  //   return this.taskService.updateStatus(id, updateTaskStatusdto.status);
  // }
}
