import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';


export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
  SUPER = 'super',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0

  @Column({ length: 500 })
  firstName: string = ''

  @Column({ length: 500 })
  middleName: string= ''

  @Column({ length: 500 })
  lastName: string =''

  @Column('date')
  dateOfBirth: Date = new Date();

  @Column({ length: 500 })
  placeOfResidence: string= ''

  @Column({ length: 500, unique: true })
  email: string =''

  @Column({ length: 500 })
  password: string = ''

  @Column("simple-array")
  contact: string[]=[]

  @CreateDateColumn()
  createdAt: Date = new Date();

  @UpdateDateColumn()
  updatedAt: Date = new Date();

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.USER,
  })
  userType: UserType | undefined;

  @Column({
    type: 'int',
    nullable: true
  })
  user_age: number = 0

  
}
