import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; // new
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['env.development.local', 'env.development']
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
