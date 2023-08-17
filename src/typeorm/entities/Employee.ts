import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'employee'})
export class Employee {
  @PrimaryGeneratedColumn({type:"bigint"})
  id:number

  @Column({nullable:true})
  firstName:string

  @Column({nullable:true})
  lastName:string

  @Column({nullable:true})
  phone:number

  @Column({nullable:true})
  email:string

  @Column()
  createdAt:Date

}