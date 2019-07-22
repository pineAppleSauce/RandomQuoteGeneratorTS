import {GlobalState} from "./App";
import {IQuoteStateProps} from "./Quote";

export function getQuote(state: GlobalState): IQuoteStateProps {
    return state.quote;
}