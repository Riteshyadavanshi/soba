
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({ name: "product" })
export class product {
    @PrimaryGeneratedColumn()
    productId: number

    @Column({ name: "date" })
    date: string

    @Column({ name: "details" })
    details: string

    @Column({ name: "rate" })
    rate: number

    @Column({ name: "code" })
    code: number

    @Column({ name: "size", nullable: true })
    size: number

    @Column({ name: "runNo" })
    runNo: number

    @Column({ name: "billNo" })
    billNo: number

    @Column({ name: "average", nullable: true })
    average: number

    @Column({ name: "embroidary", nullable: true })
    embroidary: string

    @Column({ name: "fittingStich", nullable: true })
    fittingStich: string

    @Column({ name: 'buttonStich', nullable: true })
    buttonStich: string

    @Column({ name: "print", nullable: true })
    print: string

    @Column({ name: "pintex", nullable: true })
    printex: string

    @Column({ name: "kMaking", nullable: true })
    kMaking: string

    @Column({ name: "tag", nullable: true })
    tag: string

    @Column({ name: "label", nullable: true })
    label: string

    @Column({ name: "making", nullable: true })
    making: string

    @Column({ name: "canvas", nullable: true })
    canvas: string

    @Column({ name: "totalAmount", nullable: true })
    totalAmount: number

    @Column({ name: "image", nullable: true })
    image: string

    @Column({ name: "companyId", nullable: true })
    companyId: number
 
}