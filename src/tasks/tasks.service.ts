import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { Status } from './task-enum';
import { Task } from './task.entity';

import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    console.log(createTaskDto);

    const task = this.taskRepository.create({
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: Status.OPEN,
    });
    await this.taskRepository.save(task);
    return task;
  }
  async findOneId(id: string): Promise<Task> {
    console.log(id);
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Not found ${id}`);
    }
    return found;
  }

  // tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: Status.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // getSearchTasks(filter: FilterDto) {
  //   const { status, search } = filter;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status == status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  // findTaskById(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`item not ${id} found`);
  //   }
  //   return found;
  // }
  // deleteById(id: string): Task {
  //   const dTask = this.findTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== dTask.id);
  //   return dTask;
  // }
  // updateStatus(id: string, status: Status) {
  //   const task = this.findTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
