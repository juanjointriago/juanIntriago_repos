/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParams } from './TabMain';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const TabsInside = createStackNavigator<RootStackParams>();

export const TabsInsideComponent = () => {
    return (
        <TabsInside.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <TabsInside.Screen name="HomeScreen" component={SearchScreen} />
            <TabsInside.Screen name="PokemonScreen" component={PokemonScreen} />
        </TabsInside.Navigator>
    );
};
