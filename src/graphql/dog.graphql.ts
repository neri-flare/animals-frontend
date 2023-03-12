import { gql } from "@apollo/client";

export const GET_DOG = gql`
  query Dog($name: String!) {
    dog(name: $name) {
      name
      breed
      gender
      owner {
        name
        gender
        age
      }
    }
  }
`;

export const GET_DOGS_NAMES = gql`
  query Dogs {
    dogs {
      name
    }
  }
`;
