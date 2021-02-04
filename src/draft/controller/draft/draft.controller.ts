import { Controller, Get, Inject, Req } from '@nestjs/common';
import { DraftService } from 'src/draft/services/draft/draft.service';
import { IDraftProvider } from 'src/draft/services/draft/draft';
import { Request } from 'express';

@Controller('draft')
export class DraftController {
	constructor(@Inject(DraftService) private readonly draftService: IDraftProvider){}
	@Get('find_draft/:season/:searchId')
	async getDraft(@Req() req: Request)
	{
		const draft = await this.draftService.getDraft(req.params.season, req.params.searchId);
		if(!draft) return "Something Happened";
		return draft;
	}

	@Get('all/:season')
	async getAllDraftsBySeason(@Req() req: Request)
	{
		const drafts = await this.draftService.getAllDraftsBySeason(req.params.season);
		return drafts;
	}
}
