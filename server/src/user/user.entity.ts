import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user') 
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    first_name: string;

    @Column({ type: 'varchar', length: 50 })
    last_name: string;

    @Column({ type: 'varchar', length: 100 })
    email_address: string;

    @Column({ type: 'varchar', length: 20 })
    phone_number: string;

    @Column({ type: 'varchar', length: 50 })
    company_name: string;
    //To be changes to date
    @Column({ type: 'varchar', length: 20, })
    effective_date: string;

    @Column({ type: 'varchar', length: 20, default: 'PENDING' })
    status: string;

    @Column({ type: 'boolean', default: 'false' })
    primary_al: boolean;

	@Column({ type: 'boolean', default: 'false' })
    primary_gl: boolean;

    @Column({ type: 'boolean', default: 'false' })
    primary_el: boolean;

    @Column({ type: 'boolean', default: 'false' })
    is_deleted: boolean;   
}