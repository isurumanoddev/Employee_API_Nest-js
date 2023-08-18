import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./Profile";
import { Posts } from "./Posts";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

@OneToMany(() => Posts, (post) => post.user)
  posts:Posts[]
}
