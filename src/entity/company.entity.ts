import { BaseEntity, Column, Entity, JoinColumn,  OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { product } from "./product.entity";

@Entity({ name: "company" })
export class Company extends BaseEntity {

      @PrimaryGeneratedColumn()
      companyId: number

      @Column()
      companyName: string

      @Column({ nullable: true })
      gst: string

      @Column({ nullable: true })
      contact: string

      @Column({ nullable: true })
      email: string

      @Column()
      address: string

      @Column()
      state: string

      @Column()
      city: string

      @Column({ name: "pinCode" })
      pinCode: string;

      @OneToMany(() => Client, client=>client)
     
      clients: Client[];

      @OneToMany(() => product, product=>product)
     
      products: product[];

} 