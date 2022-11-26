import "./App.css";
import ContentContainer from "./components/ContentContainer";
import { CuponProvider } from "./context/CuponContext";
import { UserProvider } from "./context/UserContext";
import Locales from "./ui/Locales";
import Aside from "./ui/Aside";

import PouchDB from "pouchdb-browser";
import { Provider } from "use-pouchdb";
import PouchDBFind from "pouchdb-find";
import Menu from "./ui/Menu";
PouchDB.plugin(PouchDBFind);

const db = new PouchDB("local");

function App() {
  return (
    <Provider pouchdb={db}>
      <UserProvider>
        <CuponProvider>
          <Menu />
          <ContentContainer>
            <Aside />
            <Locales />
          </ContentContainer>
        </CuponProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
