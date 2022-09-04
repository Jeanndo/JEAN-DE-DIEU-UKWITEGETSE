import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ConvertCurrency } from "./../../Redux/Actions/ActionCreators/CurrencyAction.js";
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

class CurrencySwitcher extends Component {
  constructor(props) {
    super();
    this.state = {
      currency: "",
    };
  }

  handleCurrency = (event) => {
    this.props.ConvertCurrency(event.target.value);
    this.setState({ currency: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <Query query={getAllCurrencies}>
          {({ loading, data, error }) => {
            if (loading) return <span>Loading...</span>;
            if (error) console.log(error);

            return (
              <Switcher
                value={this.state.currency}
                onChange={(event) => this.handleCurrency(event)}
              >
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

const mapStateToProps = ({ CurrencyReducer }) => {
  const { currency } = CurrencyReducer;

  return { currency };
};

export default connect(mapStateToProps, { ConvertCurrency })(CurrencySwitcher);
