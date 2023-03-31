import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const navigate = useNavigate();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      navigate("/quotes");
    }
  }, [status, navigate]);

  const addNewQuoteHandler = quoteData => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addNewQuoteHandler}
    />
  );
};

export default NewQuote;
