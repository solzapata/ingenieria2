import "./App.css";
import ContentContainer from "./components/ContentContainer";
import { UserProvider } from "./context/UserContext";
import Content from "./ui/Content";
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
        <Menu />
        <ContentContainer>
          <Aside />
          <Content />
        </ContentContainer>
      </UserProvider>
    </Provider>
  );
}

export default App;
