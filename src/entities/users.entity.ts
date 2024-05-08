import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:'USERS'
})
export class Users{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        type:'varchar',
        length:50,
        nullable:false
    })
    name:string

    @Column({
        type:'varchar',
        length:50,
        nullable:false,
        unique:true
    })
    email:string

    @Column({
        type:'varchar',
        length:20,
        nullable:false
    })
    password:string

    @Column({
        type:'int'
    })
    phone:number

    @Column({
        type:'varchar',
        length:20
    })
    country:string

    @Column({
        type:'varchar',
        length:50
    })
    city:string

    @Column({
        type:'varchar',
        length:50
    })
    address:string
}