import { gql } from "@apollo/client";

export const LOAD_APOLLO = gql`
  {
    hello
  }
`;

export const LOAD_ALL_INFORMATION = gql`
  {
    getAllUser {
      ngdk
    }
    getAllRestaurant {
      id
    }
    getAllFood {
      id
    }
    getAllPayment {
      id
      total
      seller
      cartid {
        url
      }
    }
    getAllFood {
      tenmonan
      urlhinhanh
      gia
    }
  }
`;
