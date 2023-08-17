import { Module } from '@nestjs/common';

import { AppService } from './app.service';
// import { EmployeesModule } from "./employees/employees.module";
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./typeorm/entities/Employee";

@Module({
  imports: [
    EmployeesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'emp',
      entities: [Employee],
      synchronize: true,

    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
