import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) 
    private userRepository: Repository<UserEntity>
    ){}

    async showAllUsers(){
        return await this.userRepository.find();
    }

    async createUser(data: Partial<UserDTO>){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async findUser(id:number){
        return await this.userRepository.findOne({where: {id}});
    }

    async update(id: number, data){
        await this.userRepository.update({id}, data);
        return await this.userRepository.findOne({id});
    }

    async destroy(id:number, data){
        await this.userRepository.delete({id});
        return {deleted: true}
    }
}
