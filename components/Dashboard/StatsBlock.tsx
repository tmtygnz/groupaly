import React, { useEffect, useState } from "react";
import { useUser } from "../../context/NewUserContext";
import { getQuote } from "../../sdk/quote";
import { getUserFromServer } from "../../sdk/user";

export const StatsBlock = () => {
  const { user, updateUser } = useUser();
  const [numSessionCompleted, setNumSessionCompleted] = useState(0);
  const [numTaskCompleted, setNumTaskCompleted] = useState(0);
  const [qouteContent, setQuoteContent] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  useEffect(() => {
    const getStats = async () => {
      if (user?.user.uid != undefined) {
        let resp = await getUserFromServer(user?.user.uid!);
        setNumSessionCompleted(resp.numSessionsCompleted);
        setNumTaskCompleted(resp.numTaskCompleted);
      }
    };
    getStats();
  }, [user]);

  useEffect(() => {
    const getAndSetQuote = async () => {
      let resp = await getQuote();
      setQuoteAuthor(resp.author);
      setQuoteContent(resp.content);
    };
    getAndSetQuote();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-baige_red">
      <div className="bg-white p-5 w-80 hover:shadow-xl rounded transition duration-200 ease-in-out">
        <div className="Header font-bold text-2xl">Your Stats</div>
        <div className="Stats mt-3 flex">
          <div className="NumSessions">
            <div className="header font-extrabold text-lg">
              Sessions Completed
            </div>
            <div className="stats">{numSessionCompleted}</div>
          </div>
          <div className="NumTask">
            <div className="header font-extrabold text-lg">Task Completed</div>
            <div className="stats">{numTaskCompleted}</div>
          </div>
        </div>
      </div>
      <div className="Quote mt-3 w-80">
        <div className="Content font-light">" {qouteContent} "</div>
        <div className="Author font-bold"> - {quoteAuthor}</div>
      </div>
    </div>
  );
};
