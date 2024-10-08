import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { HelperService } from './utils/hash.util';
import { AuthModule } from './auth/auth.module';
import { IorController } from './controllers/ior.controller';
import { IorService } from './services/ior.service';
import { NcrController } from './controllers/ncr.controller';
import { NcrService } from './services/ncr.service';
import { GoogleApiService } from './services/googleapi.service';
import { PersonnelService } from './services/personnel.service';
import { PersonnelController } from './controllers/personnel.controller';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule],
  controllers: [
    AppController,
    AccountController,
    IorController,
    NcrController,
    PersonnelController,
  ],
  providers: [
    AppService,
    AccountService,
    HelperService,
    IorService,
    NcrService,
    GoogleApiService,
    PersonnelService,
  ],
})
export class AppModule {}
