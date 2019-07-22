import {CHANGEAUTHOR, CHANGECOLOR, CHANGEQUOTE} from "./ActionTypes";

interface Type {type:string}

export interface AuthorData {name: string}

interface IChangeAuthorAction extends Type {author:AuthorData}

export const changeAuthor = (author: AuthorData) : IChangeAuthorAction => {
    return {
        type: CHANGEAUTHOR,
        author: author
    }
}

export interface QuoteData {text: string}

interface IChangeQuoteAction extends Type {quote:QuoteData}

export const changeQuote = (quote: QuoteData): IChangeQuoteAction => {
    return {
        type: CHANGEQUOTE,
        quote: quote
    }
}

export interface ColorData {colorcode: string};

interface IChangeColorAction extends Type {color: ColorData}

export const changeColor = (color: ColorData): IChangeColorAction => {
    return {
        type: CHANGECOLOR,
        color: color
    }
}