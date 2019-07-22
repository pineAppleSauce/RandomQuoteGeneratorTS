import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {GlobalState} from "./App";


export class Quote extends Component<QuoteProps> {
    render() {
        const {quote} = this.props;
        return (<p><b>"</b>{quote}<b>"</b></p>)
    }
}

type QuoteProps = IQuoteStateProps & IQuoteOwnProps;

export interface IQuoteStateProps {quote: string}

interface IQuoteOwnProps {}

const mapStateToProps = (state: GlobalState): IQuoteStateProps=> {
    return {quote: state.quote.quote};
};

const Container = connect<IQuoteStateProps, {}, IQuoteOwnProps, GlobalState>(mapStateToProps)(Quote);

export default Container;