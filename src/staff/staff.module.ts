import { Module } from '@nestjs/common';
import { StaffService } from './services/staff/staff.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from 'src/Mongo/Schemas/StaffSchema';
import { StaffController } from './controllers/staff/staff.controller';

@Module({
	imports: [MongooseModule.forFeature([{name: Staff.name, schema: StaffSchema}])],
  providers: [
	  {
		  provide: "STAFF_SERVICE",
		  useClass: StaffService
	  }
  ],
  controllers: [StaffController],
})
export class StaffModule {}
