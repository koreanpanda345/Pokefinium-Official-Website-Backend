import { Controller, Get, Req, Res, Inject, HttpCode } from '@nestjs/common';
import { Request, Response } from 'express';
import { IStaffProvider } from './../../services/staff/staff';

@Controller('staff')
export class StaffController {
	constructor(@Inject('STAFF_SERVICE') private readonly staffService: IStaffProvider){}

	@Get('get')
	@HttpCode(200)
	async getStaff(@Req() req: Request, @Res() res: Response)
	{
		return res.send(await this.staffService.getStaff());
	}
}
