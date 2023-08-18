import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./typeorm/entities/Employee";
import { EmployeeModule } from "./employee/employee.module";
import { UserModule } from './user/user.module';
import { User } from "./typeorm/entities/User";

@Module({
  imports: [EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test1',
      entities: [Employee,User],
      synchronize: true,

    }),
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
