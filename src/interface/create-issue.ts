export interface CreateIssue {
  title: string;
  description: string;
  expectation: string;
  module: number;
  submodule: number;
  screen: number;
  type: number;
  severity: number;
}
