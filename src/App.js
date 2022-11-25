import "./App.css";
import ContentContainer from "./components/ContentContainer";
import { CuponProvider } from "./context/CuponContext";
import Categorias from "./ui/Categorias";
import Locales from "./ui/Locales";
import Provincias from "./ui/Provincias";

import PouchDB from "pouchdb-browser";
import { Provider } from "use-pouchdb";
import PouchDBFind from "pouchdb-find";
PouchDB.plugin(PouchDBFind);

const db = new PouchDB("local");

function App() {
  return (
    <Provider pouchdb={db}>
      <CuponProvider>
        <Categorias />
        <ContentContainer>
          <Provincias />
          <Locales />
        </ContentContainer>
      </CuponProvider>
    </Provider>
  );
}

export default App;