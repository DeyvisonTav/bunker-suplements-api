import { Module } from '@nestjs/common';
import { DataModule } from './modules/data.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    DataModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AppModule {}
