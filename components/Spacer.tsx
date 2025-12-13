import { View } from "react-native";

type SpacerProperties = {
  height?: number;
  width?: number;
};

/**
 * Space Element for JSX
 * @param  - {height:number ,width:number}
 *
 * @example <Spacer height={40} width={0}/>
 */
export const Spacer = ({ height = 10, width = 0 }: SpacerProperties) => {
  return <View style={{ height, width }} />;
};
