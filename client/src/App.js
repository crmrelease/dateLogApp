import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Router from "./router/Router";
import client from "./apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router />
      </div>
    </ApolloProvider>
  );
}

export default App;
