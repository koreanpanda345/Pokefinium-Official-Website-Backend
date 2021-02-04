import { Module } from '@nestjs/common';
import { DraftService } from './services/draft/draft.service';
import { DraftController } from './controller/draft/draft.controller';
import { Draft, DraftSchema } from 'src/Mongo/Schemas/DraftSchema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forFeature([{name: Draft.name, schema: DraftSchema}])],
  providers: [DraftService],
  controllers: [DraftController]
})
export class DraftModule {}
