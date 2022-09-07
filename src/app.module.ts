import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '@Devgan786',
      database: 'e-commerce',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
