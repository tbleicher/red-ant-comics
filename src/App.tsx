import { Provider } from "react-redux";
import { FavouritesPanel } from "./components/FavouritesPanel";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { NoApiKeyMessage } from "./components/NoApiKeyMessage";
import { store } from "./globalState/store";
import { API_SECRETS } from "./services/apiSecrets";

function App() {
  if (!API_SECRETS.apikey) {
    return <NoApiKeyMessage />;
  }

  return (
    <Provider store={store}>
      <Header />

      <main className="site-content">
        <List />
      </main>

      <FavouritesPanel />
    </Provider>
  );
}

export default App;
