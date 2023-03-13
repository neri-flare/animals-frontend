import { gql } from "@apollo/client";

export const GET_OWNER = gql`
  query Owner($name: String!) {
    owner(name: $name) {
      id
      name
      age
      gender
    }
  }
`;

export const GET_OWNERS_NAMES = gql`
  query Owners {
    owners {
      name
    }
  }
`;

export const CREATE_OWNER = gql`
  mutation CreateOwner($createOwnerData: OwnerInput!) {
    createOwner(createOwnerData: $createOwnerData) {
      id
      name
      age
      gender
    }
  }
`;
