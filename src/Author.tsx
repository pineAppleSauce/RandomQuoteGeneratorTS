import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {GlobalState} from "./App";

export class Author extends Component<AuthorProps> {

    render() {
        const {author} = this.props;
        return (<p>-{author}</p>);
    }
}

type AuthorProps = IAuthorStateProps & IAuthorOwnProps;

interface IAuthorStateProps {author: string}

interface IAuthorOwnProps {}

const mapStateToProps = (state: GlobalState):IAuthorStateProps => {
    return {author: state.author.author}
};

const Container = connect<IAuthorStateProps, {}, IAuthorOwnProps, GlobalState>(mapStateToProps)(Author);

export default Container;