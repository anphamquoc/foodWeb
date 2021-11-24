import "./App.css";
import Login from "./view/Buyer/auth/Login"; //
import Register from "./view/Buyer/auth/Register"; //
import Main from "./view/Buyer/mainPage/Main"; //
import Search from "./view/Buyer/searchPage/Search"; //
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import InfoRes from "./view/Buyer/infoRestaurant/InfoRes";
import AuthContextProvider from "./context/AuthContext";
import ProtectedRoute from "./routing/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./view/Buyer/auth/Info";
import CartView from "./view/Buyer/Cart/CartView";
import CheckoutView from "./view/Buyer/Checkout/CheckoutView";
import DashboardView from "view/Seller/Dashboard/DashboardView";
import BillView from "view/Buyer/Bill/BillView";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";
import { LOCAL_STORAGE_TOKEN_NAME } from "context/constant";

const httpLink = new HttpLink({ uri: "http://localhost:8080/graphql" });
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization:
        "Bearer " + localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME) || null,
    },
  }));

  return forward(operation);
});

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "http://localhost:8080/graphql",
// });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          {/* Buyer */}
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search/:search" component={Search} />
          <Route path="/info/:id" component={InfoRes} />
          <ProtectedRoute path="/infoUser" component={Info} />
          <ProtectedRoute path="/cart" component={CartView} />
          <ProtectedRoute path="/checkout" component={CheckoutView} />
          <ProtectedRoute path="/bill" component={BillView} />
          {/* Seller */}
          <ApolloProvider client={client}>
            <ProtectedRoute path="/dashboard" component={DashboardView} />
          </ApolloProvider>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}
export default App;
