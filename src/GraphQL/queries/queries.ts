import { gql } from '@apollo/client';

export const COMPANY_QUERY = gql`
  query ExampleQuery {
    company {
      ceo
      coo
      name
      summary
    }
    ships {
      image
      name
      type
      id
    }
  }
`;
