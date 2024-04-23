export interface GetIssues {
  id: number;
  title: string;
  description: string;
  expectation: string;
  reportedOn: Date;
  status: string;
  severity: string;
  type: string;
}
