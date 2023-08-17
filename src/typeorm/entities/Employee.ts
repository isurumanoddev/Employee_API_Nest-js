import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name :'employees'})
export class Employee {
  @PrimaryGeneratedColumn()
  id:number

  @Column()
  name:string

  @Column({nullable:true})
  address:string

  @Column({nullable:true})
  mobile:number

}