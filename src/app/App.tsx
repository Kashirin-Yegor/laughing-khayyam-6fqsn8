import { QueryProvider } from "./providers/QueryProvider";
import { HomePage } from "../pages";
import "./styles/index.scss";

const App = () => (
  <QueryProvider>
    <HomePage />
  </QueryProvider>
);

export default App;
