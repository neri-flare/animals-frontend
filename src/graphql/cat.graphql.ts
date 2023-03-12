import { gql } from "@apollo/client";

export const GET_CAT = gql`
  query Cat($name: String!) {
    cat(name: $name) {
      name
      color
      owner {
        name
        gender
        age
      }
    }
  }
`;

export const GET_CATS_NAMES = gql`
  query Cats {
    cats {
      name
    }
  }
`;
