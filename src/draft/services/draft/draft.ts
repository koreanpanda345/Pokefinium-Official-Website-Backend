export interface IDraftProvider
{
	getDraft(season: string, serachId: string);
	getAllDraftsBySeason(season: string);
	getDrafts();
}