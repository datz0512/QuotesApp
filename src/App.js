import React, { Suspense } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Comments from "./components/comments/Comments";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className='centered'>
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<Navigate to='/quotes' />} />
            <Route path='/quotes' element={<AllQuotes />} />
            <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
              <Route
                path=''
                element={
                  <div className='centered'>
                    <Link className='btn--flat' to='comments'>
                      Load Comments
                    </Link>
                  </div>
                }
              ></Route>

              <Route path='comments' element={<Comments />} />
            </Route>
            <Route path='/new-quote' element={<NewQuote />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
