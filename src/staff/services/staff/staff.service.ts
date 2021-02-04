import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Staff, StaffDocument } from 'src/Mongo/Schemas/StaffSchema';
import { Model } from 'mongoose';
import { IStaffProvider } from './staff';

@Injectable()
export class StaffService implements IStaffProvider
{
	constructor(@InjectModel(Staff.name) private staffModel: Model<StaffDocument>){}

	async getStaff() {
		const staff = await this.staffModel.find();
		return staff;
	}
}
