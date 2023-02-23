import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesModule } from './employees/employees.module';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [EmployeesModule,
    process.env.PORT === undefined ? TypeOrmModule.forRoot({
      type: "sqlite",
      database: "employeesDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }) : TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }
    )
  ],
})
export class AppModule {
}
