export interface Entities {
  [key: string]: {
    getNames: Function;
    names: any[];
    getByName: Function;
    result: any;
  };
}
