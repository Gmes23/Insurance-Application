import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    showAllUsers(){
        return this.userService.showAllUsers();
    }

    @Post()
    createUser(@Body() data: UserDTO){
        return this.userService.createUser(data);
    }

    @Get(':id')
    findUser(@Param('id') id: number){
        return this.userService.findUser(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() data){
        return this.userService.update(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number, @Body() data) {
        return this.userService.destroy(id, data);
    }
}