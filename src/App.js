import { Route, Routes, Navigate, Link } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/quotes' />} />
          <Route path='/quotes' element={<AllQuotes />} />
          <Route path='/quotes/:quoteId' element={<QuoteDetail />}>
            <Route
              path=''
              element={
                <div className='centered'>
                  <Link className='btn--flat' to={`comments`}>
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
      </Layout>
    </div>
  );
}

export default App;
