import styled, {StyledFunction} from "styled-components";

export const ApppWrapper = styled.div`
    text-align: center;
`;

export const HeaderWrapper = styled.header`
    background-color: ${(props) => props.color.color};
    min-height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
`;

export const MainWrapper = styled.div`
    background-color: #edffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${props => props.color.color};
    padding: 10px;
    border-radius: 4px;
`;

export const QuoteWrapper = styled.div`
    font-size: calc(17px + 2vmin);
    align-items: center;
    display: flex;
    justify-content: center;
    height: 30vh;
    width: 120vh;
`;

export const AuthorWrapper = styled.div`
      display: flex;
      align-self: flex-end;
      text-align: center;
      font-size: calc(5px + 2vmin);
      font-weight: bolder;
`;

export const StyledButton = styled.button`
    height: 10vh;
    width: 15vh;
    align-self: flex-end;
    font-size: calc(3px + 2vmin);
    border-radius: 8px;
    border-color: #edffff;
    background-color: ${props => props.color.color};
    color: #edffff;
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;


    /* Safari */
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

