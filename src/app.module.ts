import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "./typeorm/entities/Employee";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test1',
      entities: [Employee],
      synchronize: true,

    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
