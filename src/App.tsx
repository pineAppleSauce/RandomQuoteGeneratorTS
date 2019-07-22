import React, { Component } from 'react';
import './App.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Author from "./Author";
import Quote from "./Quote";
import { changeAuthor, changeQuote, changeColor, AuthorData, QuoteData, ColorData } from "./AppActions";
import RootReducer from "./RootReducer";
import { ApppWrapper, MainWrapper, HeaderWrapper, AuthorWrapper, QuoteWrapper, StyledButton, Spinner } from './StyledComponents';
import logger from "redux-logger";
//import {getQuote} from "./selectors"

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
  '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const store = createStore(
  RootReducer,
  applyMiddleware(logger)
)

type Time = number;

function timeout(ms: Time): any {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn: any, ...args: any): Promise<any> {
  await timeout(3000);
  return fn(...args);
}

type AppProps = AppStateProps & AppDispatchProps;

type AppStateProps = {
  author: string,
  quote: string,
  color: string
}

interface AppDispatchProps {
  changeToText(quote: QuoteData, author: AuthorData): void;
  changeToColor(color: ColorData): void;
};

export type GlobalState = {
  [field: string]: any
}

class App extends Component<AppProps, GlobalState> {
  constructor(props: any) {
    super(props)

    this.state = {
      data: null,
      loading: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const min: number = 0;
    const max: number = this.state.data.quotes.length;
    const colorMax: number = colors.length;
    const rand: number = min + Math.random() * (max - min);
    const randColor: number = min + Math.random() * (colorMax - min);
    this.props.changeToText(this.state.data.quotes[Math.floor(rand)].quote,
      this.state.data.quotes[Math.floor(rand)].author);
    this.props.changeToColor({ colorcode: colors[Math.floor(randColor)] });
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    sleep(async () => {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data: data, loading: false })
    });
  }

  render() {
    const { handleClick } = this;
    const { color } = this.props;
    const { loading } = this.state;
    return (
      <ApppWrapper>
        <HeaderWrapper color={color}>
          {loading ? (<Spinner></Spinner>) : (
            <MainWrapper color={color}>
              <QuoteWrapper color={color}>
                <Quote />
              </QuoteWrapper>
              <AuthorWrapper>
                <Author />
              </AuthorWrapper>
              <StyledButton color={color} onClick={handleClick}>Click me!</StyledButton>
            </MainWrapper>)}
        </HeaderWrapper>
      </ApppWrapper>
    );
  }
}

const mapStateToProps = (state: GlobalState): AppStateProps => {
  return { author: state.author, quote: state.quote, color: state.color };
}

const mapDispatchToProps = (dispatch: any): AppDispatchProps => {
  return {
    changeToText: (quote: QuoteData, author: AuthorData) => {
      dispatch(changeQuote(quote));
      dispatch(changeAuthor(author));
    },
    changeToColor: (color: ColorData) => {
      dispatch(changeColor(color));
    }
  }
}

const Container = connect<AppStateProps, AppDispatchProps, {}, GlobalState>(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
};

export default AppWrapper;
