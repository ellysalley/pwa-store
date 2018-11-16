import { gql } from "apollo-boost";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    onSale: products(where: { sale: true }) {
      id
      name
      description
      price
      photo {
        url
      }
    }
    allProducts: products(where: { sale: false }) {
      id
      name
      description
      price
      photo {
        url
      }
    }
  }
`;
