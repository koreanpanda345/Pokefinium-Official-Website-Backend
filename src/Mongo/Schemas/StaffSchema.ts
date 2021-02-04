import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import {Document} from "mongoose";

export type StaffDocument = Staff & Document;

@Schema()
export class Staff 
{
	@Prop()
	name: string;
	
	@Prop()
	avatar?: string;

	@Prop()
	roles: [{name: string, color: string}];
}

export const StaffSchema = SchemaFactory.createForClass(Staff);