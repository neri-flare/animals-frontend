import { gql } from "@apollo/client";

export const GET_ELEPHANT = gql`
  query Elephant($name: String!) {
    elephant(name: $name) {
      name
      trunkLength
      gender
      owner {
        name
        gender
        age
      }
    }
  }
`;

export const GET_ELEPHANTS_NAMES = gql`
  query Elephants {
    elephants {
      name
    }
  }
`;
