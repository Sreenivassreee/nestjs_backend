import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './tasks/tasks.repository';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'task-manager',
      password: 'postgres',
      username: 'postgres',
      port: 5432,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {}
