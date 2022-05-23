import { IsEnum } from 'class-validator';
import { Status } from '../task.model';

export class UpdateTaskStatusdto {
  @IsEnum(Status)
  status: Status;
}
