import {
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AllQuotes, { loader as quotesLoader } from "./pages/AllQuotes";
import QuoteDetails, {
  loader as singleQuoteLoader,
} from "./pages/QuoteDetails";
import NewQuote, { action as quoteAction } from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
import Comments, {
  loader as commentLoader,
  action as commentAction,
} from "./components/comments/Comments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout></Layout>}
      errorElement={<p className="centered focused">An Error Occured</p>}
    >
      <Route path="/" element={<Navigate replace to="/quotes"></Navigate>} />

      <Route
        path="/quotes"
        element={<AllQuotes></AllQuotes>}
        loader={quotesLoader}
      />

      <Route
        path="/quotes/:quoteId/*"
        element={<QuoteDetails></QuoteDetails>}
        loader={singleQuoteLoader}
      >
          <Route
            path=""
            element={
              <div className="centered">
                <Link className="btn--flat" to="comment">
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route
            path="comment"
            element={<Comments></Comments>}
            loader={commentLoader}
            action={commentAction}
          />
      </Route>

      <Route
        path="/new-quote"
        element={<NewQuote></NewQuote>}
        action={quoteAction}
      />

      <Route path="*" element={<NotFound></NotFound>} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
