export interface IssueCreationResponse {
    id: number,
    title: string,
    description: string,
    expectation: string,
    screen: {
      id: number
    },
    status: {
      id: number
    },
    type: {
      id: number
    },
    severity: {
      id: number
    }
  }
