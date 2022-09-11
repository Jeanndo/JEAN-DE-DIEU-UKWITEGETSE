import React, { Component, Fragment } from "react";
import {
  DropdownMenuButton,
  DropdownCurrencyContainer,
  DropdownCurrencyItem,
  ArrowImage,
  SwitcherContainer,
} from "./../styles/Switcher.styled.js";
import ArrowDown from "./../../assets/down-arrow.png";
import ArrowUp from "./../../assets/arrow-up.png";
import { connect } from "react-redux";
import { ConvertCurrency } from "./../../Redux/Actions/ActionCreators/CurrencyAction.js";
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

class Switcher extends Component {
  constructor(props) {
    super();
    this.state = {
      showSwitcher: false,
      currency: "",
    };
  }

  handleSwitcher = () => {
    this.setState({
      showSwitcher: !this.state.showSwitcher,
    });
  };

  handleCurrency = (value) => {
    this.props.ConvertCurrency(value);
  };

  render() {
    return (
      <Query query={getAllCurrencies}>
        {({ loading, data, error }) => {
          if (loading) return <span>Loading...</span>;
          if (error) console.log(error);

          return (
            <Fragment>
              <SwitcherContainer>
                <DropdownMenuButton onClick={this.props.toggleSwitcher}>
                  {this.props.currency.message.symbol} &nbsp; &nbsp; &nbsp;
                  {this.props.switcher ? (
                    <ArrowImage src={ArrowUp} alt="arrow-up" />
                  ) : (
                    <ArrowImage src={ArrowDown} alt="arrow-down" />
                  )}
                </DropdownMenuButton>

                {this.props.switcher && (
                  <DropdownCurrencyContainer
                    onClick={this.props.toggleSwitcher}
                  >
                    {data?.currencies?.map((currency, index) => (
                      <DropdownCurrencyItem
                        key={currency.symbol}
                        onClick={() =>
                          this.props.ConvertCurrency(currency.symbol, index)
                        }
                        selected={
                          index === this.props.currency.message.index
                            ? true
                            : false
                        }
                      >
                        {currency.symbol}&nbsp; {currency.label}
                      </DropdownCurrencyItem>
                    ))}
                  </DropdownCurrencyContainer>
                )}
              </SwitcherContainer>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
const mapStateToProps = ({ CurrencyReducer }) => {
  const { currency } = CurrencyReducer;

  return { currency };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ConvertCurrency: (currency, index) =>
      dispatch(ConvertCurrency(currency, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Switcher);
