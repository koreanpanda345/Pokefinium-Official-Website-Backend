import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDraftProvider } from './draft';
import { Draft, DraftDocument } from 'src/Mongo/Schemas/DraftSchema';
import { Model } from 'mongoose';

@Injectable()
export class DraftService implements IDraftProvider{
	constructor(@InjectModel(Draft.name) private draftModel: Model<DraftDocument>){}

	async getDraft(season: string, searchId: string)
	{
		const draft = await this.draftModel.findOne({searchId});
		if(!draft) return null;
		return draft;

	}

	async getAllDraftsBySeason(season: string)
	{
		const drafts = await this.draftModel.find({season});
		return drafts;
	}

	async getDrafts()
	{
		const drafts = await this.draftModel.find();
		return drafts;
	}

	

}
