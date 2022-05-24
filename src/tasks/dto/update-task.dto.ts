import { IsEnum } from 'class-validator';
import { Status } from '../task-enum';

export class UpdateTaskStatusdto {
  @IsEnum(Status)
  status: Status;
}
