import {CHANGEAUTHOR, CHANGEQUOTE, CHANGECOLOR} from "./ActionTypes";
import colorcode from './AppActions';

export type AuthorState = {author: string;}

export type AuthorAction = {type: string, author: string }

const defaultAuthorState:AuthorState = {author: "Programmer"}

export const authorReducer = (state:AuthorState = defaultAuthorState, action: AuthorAction): AuthorState => {
    switch(action.type) {
        case CHANGEAUTHOR:
            return {author: action.author};
        default:
            return state;
    }
}

export type QuoteState = {quote: string;}

export type QuoteAction = {type:string, quote:string}

const defaultQuoteState:QuoteState = {quote: "Click the button to get a random quote"}

export const quoteReducer = (state:QuoteState = defaultQuoteState, action: QuoteAction): QuoteState => {
    switch(action.type) {
        case CHANGEQUOTE:
            return {quote: action.quote};
        default:
            return state;
    }
}

export type ColorState = {color: string;}

export type ColorAction = {type: string, color: string}

const defaultColorState:ColorState = {color: '#282c34'};

export const colorReducer = (state:ColorState = defaultColorState, action: ColorAction) : ColorState => {
    switch(action.type) {
        case CHANGECOLOR:
            return {color: action.color.colorcode};
        default:
            return state;
    }
}
