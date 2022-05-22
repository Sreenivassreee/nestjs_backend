import { Injectable } from '@nestjs/common';
import { Status, Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task = {
      id: uuid(),
      title,
      description,
      status: Status.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
  findTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }
  deleteByid(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateStatus(id: string, status: Status): Task {
    const task = this.findTaskById(id);
    task.status = status;
    return task;
  }
}
