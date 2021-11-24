import axios from "axios";

export const getQuote = async (): Promise<IQuote> => {
    let resp = await axios.get<IQuote>("http://localhost:3001/quote?maxLength=50");
    return resp.data;
}

export interface IQuote {
    content: string,
    author: string,
}