import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Module({
//   imports: [TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'gm',
//     password: 'root',
//     database: 'userapplications',
//     entities: [],
//     synchronize: true,
//   }),],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
