export interface LoginResponse {
  id: number;
  token: string;
  username: string;
  role: string,
  authority: [string];
}
