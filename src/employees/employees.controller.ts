import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from "./dto/EmployeeUpdate.dto";
import { CreateEmployeeDto } from "./dto/CreateEmployee.dto";

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  getAllEmployees() {
    return this.employeesService.getAllEmployees()


  }

  @Post()
  createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto
  ) {
    this.employeesService.createEmployee(createEmployeeDto)
  }

  // @Get('/:id')
  // getEmployeeById(@Param() id: string) {
  //   return this.employeesService.getEmployeeById(id);
  // }
  //
  // @Put('/:id/city')
  // updateEmployee(@Param('id') id: string,@Body() employeeUpdateDto:EmployeeUpdateDto) {
  //   employeeUpdateDto.id = id
  //   return this.employeesService.updateEmployee(employeeUpdateDto)
  // }
}
