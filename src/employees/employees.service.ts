import { Injectable } from '@nestjs/common';

import { v1 as uuid } from 'uuid';
import { EmployeeSearchDto } from './dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from 'src/typeorm/entities/Employee';
import { Repository } from "typeorm";
import { CreateEmployeeParams } from "../utils/types";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee) private employeeRespository: Repository<Employee>,
  ) {}

  getAllEmployees() {
    return this.employeeRespository.find()
  }

  createEmployee(employeeDetails:CreateEmployeeParams) {
    const newEmployee = this.employeeRespository.create({...employeeDetails,createdAt:new Date()})
    return  this.employeeRespository.save(newEmployee)
  }

  // employeeSearch(employeeSearchDto: EmployeeSearchDto) {
  //   const { name } = employeeSearchDto;
  //   const employees = this.getAllEmployees();
  //
  //   if (name) {
  //     employees.filter((employee) => employee.firstName.includes(name));
  //   }
  //
  //   console.log(employees);
  //   return employees;
  // }
  //
  // getEmployeeById(id: string) {
  //   const employees = this.getAllEmployees();
  //   return employees.filter((employee) => employee.id === id);
  // }
  //
  // updateEmployee(employeeUpdateDto: EmployeeUpdateDto) {
  //   const { id, city } = employeeUpdateDto;
  //
  //   let employee = this.getEmployeeById(id);
  //   // @ts-ignore
  //   employee.nearestCity = city;
  //   return employee;
  // }
}
