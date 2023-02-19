import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [EmployeesModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "employeesDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    })
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class AppModule { }
