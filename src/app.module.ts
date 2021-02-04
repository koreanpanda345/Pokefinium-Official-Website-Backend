import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffModule } from './staff/staff.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DraftModule } from './draft/draft.module';

@Module({
  imports: [ ConfigModule.forRoot({envFilePath: '.env.development'}), HttpModule, StaffModule, MongooseModule.forRoot(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}), DraftModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

