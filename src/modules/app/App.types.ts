import {
  CatsQuery,
  DogsQuery,
  ElephantsQuery,
  OwnersQuery,
} from "../../generated/graphql";

export interface Entities {
  [key: string]: {
    getNames: Function;
    names:
      | CatsQuery["cats"]
      | DogsQuery["dogs"]
      | ElephantsQuery["elephants"]
      | OwnersQuery["owners"];
    getByName: Function;
    result: any;
  };
}
