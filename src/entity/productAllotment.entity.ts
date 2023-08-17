import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: "productallotment" })
export class productAllotment extends BaseEntity {

  @PrimaryGeneratedColumn()
  productAllotmentId: number

  @Column({ name: "Date", nullable: true })
  date: string

  @Column({ name: "vendorId" })
  vendorId: number

  @Column({ name: "companyId" })
  companyId: number

  @Column({ name: "Size", nullable: true })
  size: string

  @Column({ name: "ProductQuantity", nullable: true })
  productQuantity: number

  @Column({ name: "VendorRate", nullable: true })
  vendorRate: number

  @Column({ name: "DeliveryDate", nullable: true })
  deliveryDate: string

  @Column({ name: "Amount", nullable: true })
  totalAmount: number

  @Column({ name: "AdvancePayment", nullable: true })
  advancePayment: number

  @Column({ name: "balanceAmmount", nullable: true })
  balanceAmount: number

  @Column({ name: "Description", nullable: true })
  description: string

  @Column({ name: "productImage", nullable: true })
  productImage: string

  @Column({ name: "productId" })
  productId: number

}