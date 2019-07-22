import {authorReducer, quoteReducer, colorReducer} from "./AppReducers";
import {AuthorState, AuthorAction, QuoteState, QuoteAction,
    ColorState, ColorAction} from "./AppReducers";
import {combineReducers} from "redux";

type RootState = {author: AuthorState, quote:QuoteState, color: ColorState};

type RootAction = AuthorAction & QuoteAction & ColorAction;

export default combineReducers<RootState, RootAction>({
    author: authorReducer,
    quote: quoteReducer,
    color: colorReducer,
})