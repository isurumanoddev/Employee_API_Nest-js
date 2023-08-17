import { Injectable } from '@nestjs/common';
import { Employee } from './Employee.model';
import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';

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
    };

    this.employees.push(employee);
    return employee;
  }

  employeeSearch(employeeSearchDto: EmployeeSearchDto) {
    const { name } = employeeSearchDto;
    const employees = this.getAllEmployees();

    if (name) {
      employees.filter((employee) => employee.firstName.includes(name));
    }

    console.log(employees);
    return employees;
  }

  getEmployeeById(id: string) {
    const employees = this.getAllEmployees();
    return employees.filter((employee) => employee.id === id);
  }

  updateEmployee(employeeUpdateDto: EmployeeUpdateDto) {
    const { id, city } = employeeUpdateDto;

    const employee = this.getEmployeeById(id);
    employee.nearestCity = city;
  }
}
