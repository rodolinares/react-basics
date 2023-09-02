import { createContext, useContext, useReducer } from "react";

const IsAgentEnabledContext = createContext();

const isAgentEnabledReducer = (state, action) => {
  switch (action.type) {
    case "enable":
      return { isEnabled: true };

    case "disable":
      return { isEnabled: false };

    case "toggle":
      return { isEnabled: !state.isEnabled };

    case "set":
      return { isEnabled: action.isEnabled };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const IsAgentEnabledProvider = ({ children }) => {
  const [state, dispatch] = useReducer(isAgentEnabledReducer, {
    isEnabled: false,
  });

  const value = { state, dispatch };

  return (
    <IsAgentEnabledContext.Provider value={value}>
      {children}
    </IsAgentEnabledContext.Provider>
  );
};

const useIsAgentEnabled = () => {
  const context = useContext(IsAgentEnabledContext);

  if (context === undefined) {
    throw new Error(
      "useIsAgentEnabled must be used within a IsAgentEnabledProvider"
    );
  }

  const { state, dispatch } = context;

  const enable = () => dispatch({ type: "enable" });
  const disable = () => dispatch({ type: "disable" });
  const toggle = () => dispatch({ type: "toggle" });
  const set = (isEnabled) => dispatch({ type: "set", isEnabled });

  return { state, enable, disable, toggle, set };
};

export { IsAgentEnabledProvider, useIsAgentEnabled };
