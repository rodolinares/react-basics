import { IsAgentEnabledProvider } from "../contexts/is-agent-enabled-context";
import "./App.css";
import Home from "./Home/Home";

function App() {
  return (
    <IsAgentEnabledProvider>
      <Home />
    </IsAgentEnabledProvider>
  );
}

export default App;
