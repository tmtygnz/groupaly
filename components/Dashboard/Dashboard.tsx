import axios from "axios";
import React, { useEffect, useState } from "react";
import { SesssionGraph } from "./SesssionGraph";

export const Dashboard = () => {
  const [bannerQuote, setQuote] = useState("");
  const [bannerQuoteAuthor, setAuthor] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      let qoute = await axios.get("http://localhost:3001/quote");
      setQuote(qoute.data.content);
      setAuthor(qoute.data.author);
    };
    fetchAPI();
  }, []);
  return (
    <div className="h-full">
      <div className="banner h-20 flex items-center justify-center bg-red text-baige realtive">
        <div className="m-3">
          <span className="Quote font-bold">{bannerQuote}</span>
          <span className="Author font-light italic">
            -{bannerQuoteAuthor}
          </span>
        </div>
      </div>
      <div className="graphs">
        <SesssionGraph />
      </div>
    </div>
  );
};
