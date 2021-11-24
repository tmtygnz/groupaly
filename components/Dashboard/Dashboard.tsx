import axios from "axios";
import React, { useEffect, useState } from "react";
import dashboard from "../../pages/dashboard";
import { JoinBlock } from "./JoinBlock";

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
    <div className="heightWithoutHeader flex">
      <JoinBlock/>
    </div>
  );
};
