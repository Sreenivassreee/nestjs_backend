import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Status } from '../task.model';

export class FilterDto {
  @IsOptional()
  @IsEnum(Status)
  status?: string;
  @IsOptional()
  @IsString()
  search?: string;
}
