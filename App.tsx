/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from '@react-navigation/native';
//import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

const App = () => (
  <NavigationContainer>
    {/* <Navigator/> */}
    <Tabs/>
  </NavigationContainer>
);
export default App;
