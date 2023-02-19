import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;
}
