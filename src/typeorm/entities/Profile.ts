import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  firstName: string;

  @Column({nullable:true})
  lastName: string;

  @Column({nullable:true})
  age: number;

}
