import { Input, Label, RoundedSlider } from "./style";
import { useIsAgentEnabled } from "../../../contexts/is-agent-enabled-context";

const RoundedSwitch = () => {
  const { state, toggle } = useIsAgentEnabled();
  const { isEnabled } = state;

  const handleCheckboxChange = (event) => {
    toggle();
  };

  return (
    <Label>
      <Input
        type="checkbox"
        checked={isEnabled}
        onChange={handleCheckboxChange}
      />
      <RoundedSlider />
    </Label>
  );
};

export default RoundedSwitch;
