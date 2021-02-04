import { Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import { Document} from "mongoose";

export type DraftDocument = Draft & Document;

@Schema()
export class Draft 
{
	@Prop()
	name: string;

	@Prop()
	draftDoc: string;
	
	@Prop()
	season: string;

	@Prop()
	liaisons: [{name: string, color: string}];

	@Prop()
	isCurrent: boolean;

	@Prop()
	searchId: string;
}

export const DraftSchema = SchemaFactory.createForClass(Draft);