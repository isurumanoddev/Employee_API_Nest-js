import { Module } from '@nestjs/common';

import { AppService } from './app.service';
// import { EmployeesModule } from "./employees/employees.module";
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [EmployeesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
