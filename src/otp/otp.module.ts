import { Module } from '@nestjs/common';
import { OtpService } from './otp.service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    RedisModule.forRoot({
      type: 'single',
      url: 'redis://localhost:6379',
    }),
  ],
  providers: [OtpService],
  exports: [OtpService], 
})
export class OtpModule {}
