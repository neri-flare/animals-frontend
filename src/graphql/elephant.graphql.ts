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

export const CREATE_ELEPHANT = gql`
  mutation CreateElephant($createElephantInput: ElephantInput!) {
    createElephant(createElephantInput: $createElephantInput) {
      name
      trunkLength
      gender
      ownerId
      owner {
        name
        gender
        age
      }
    }
  }
`;
