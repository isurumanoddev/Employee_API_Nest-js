import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from "./dto/EmployeeUpdate.dto";

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  getAllEmployees(@Query() param: EmployeeSearchDto) {
    console.log('params', param);

    if (Object.keys(param).length) {
      return this.employeesService.employeeSearch(param);
    } else {
      return this.employeesService.getAllEmployees();
    }
  }

  @Post()
  createEmployee(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('designation') designation: string,
    @Body('nearestCity') nearestCity: string,
    @Body('tier') tier: number,
  ) {
    return this.employeesService.createEmployee(
      firstName,
      lastName,
      designation,
      nearestCity,
      tier,
    );
  }

  @Get('/:id')
  getEmployeeById(@Param() id: string) {
    return this.employeesService.getEmployeeById(id);
  }

  @Put('/:id/city')
  updateEmployee(@Param('id') id: string,@Body() employeeUpdateDto:EmployeeUpdateDto) {
    employeeUpdateDto.id = id
    return this.employeesService.updateEmployee(employeeUpdateDto)
  }
}
