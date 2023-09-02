import Agent from "../Agent/Agent";
import Participant from "../Participant/Participant";
import RoundedSwitch from "../Shared/RoundedSwitch/RoundedSwitch";
import { useIsAgentEnabled } from "../../contexts/is-agent-enabled-context";
import logo from "../../logo.svg";

const Home = () => {
  const { state } = useIsAgentEnabled();
  const { isEnabled } = state;

  // eslint-disable-next-line no-undef
  const isProduction = JSON.parse(IS_PRODUCTION);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          {isProduction && <span>Production</span>}
          {!isProduction && <span>Development</span>}
        </p>

        <div>
          <span>Participant</span>
          <RoundedSwitch />
          <span>Agent</span>
        </div>

        {isEnabled && <Agent />}
        {!isEnabled && <Participant />}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
