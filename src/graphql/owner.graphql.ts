import { gql } from "@apollo/client";

export const GET_OWNER = gql`
  query Owner($name: String!) {
    owner(name: $name) {
      name
      age
      gender
    }
  }
`;

export const GET_OWNERS_NAMES = gql`
  query Ownerss {
    owners {
      name
    }
  }
`;
