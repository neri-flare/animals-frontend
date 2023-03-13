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

export const CREATE_CAT = gql`
  mutation CreateCat($createCatInput: CatInput!) {
    createCat(createCatInput: $createCatInput) {
      name
      color
      ownerId
      owner {
        age
        gender
        name
      }
    }
  }
`;
