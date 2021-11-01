import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <div className="banner h-20 flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 rounded m-3 realtive">
        <div className="m-3">
          <span className="Quote font-bold">{bannerQuote}</span>
          <span className="Author font-light italic"> -{bannerQuoteAuthor}</span>
        </div>
      </div>
    </div>
  );
};
