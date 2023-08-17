import { Injectable } from '@nestjs/common';
import { Employee, EmployeeStatus } from './Employee.model';
import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  getAllEmployees() {
    return this.employees;
  }

  createEmployee(
    firstName: string,
    lastName: string,
    designation: string,
    nearestCity: string,
    tier: number,
  ) {
    const employee = {
      id: uuid(),
      firstName,
      lastName,
      designation,
      nearestCity,
      tier,
      status: EmployeeStatus.ACTIVE,
    };

    this.employees.push(employee);
    return employee;
  }

  // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
  //
  //   const { status, name } = employeeSearchDto;
  //   let employees = this.getAllEmployees();
  //
  //   if (status) {
  //     employees.filter((employee) => employee.status === status)
  //   }
  //   if (name) {
  //     employees.filter((employee) => employee.firstName.includes(name) )
  //   }
  //
  //   console.log(employees);
  //
  //
  //
  // }
}
