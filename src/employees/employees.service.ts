import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ){}
  create(createEmployeeDto: CreateEmployeeDto):Promise<Employee> {
    return this.employeesRepository.save({...createEmployeeDto});
  }

  findAll(): Promise<Employee[]> {
    return this.employeesRepository.find();
  }

  findOne(id: number): Promise<Employee> {
    return this.employeesRepository.findOneBy({id});
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeesRepository.update(id, {...updateEmployeeDto});
  }

  async remove(id: number): Promise<void> {
    await this.employeesRepository.delete(id);
  }
}
