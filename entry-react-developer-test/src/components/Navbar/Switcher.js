import React, { Component, Fragment } from "react";
import { Switcher } from "./../styles/Navbar.styled.js";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const getAllCurrencies = gql`
  query Currencies {
    currencies {
      label
      symbol
    }
  }
`;

export class CurrencySwitcher extends Component {
  render() {
    return (
      <Fragment>
        <Query query={getAllCurrencies}>
          {({ loading, data, error }) => {
            if (loading) return <span>Loading...</span>;
            if (error) console.log(error);

            // console.log(data);

            return (
              <Switcher>
                <option value="$">$</option>
                {data?.currencies?.map((currency) => (
                  <option value={currency.symbol} key={currency.symbol}>
                    {currency.symbol} {currency.label}
                  </option>
                ))}
              </Switcher>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}
