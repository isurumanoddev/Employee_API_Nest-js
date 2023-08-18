import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./typeorm/entities/Employee";
import { EmployeeModule } from "./employee/employee.module";
import { UserModule } from './user/user.module';
import { User } from "./typeorm/entities/User";
import { Profile } from "./typeorm/entities/Profile";
import { Posts } from "./typeorm/entities/Posts";


@Module({
  imports: [EmployeeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test2',
      entities: [Employee,User,Profile,Posts],
      synchronize: true,

    }),
    UserModule,

  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
