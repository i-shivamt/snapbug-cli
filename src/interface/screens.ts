export interface Screens {
  id: number;
  name: string;
  subModule: {
    id: number;
    name: string;
    module: {
      id: number;
      name: string;
    };
  };
}
