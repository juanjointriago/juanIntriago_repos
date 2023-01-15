/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
// import { View } from 'react-native';
// import { styleSearchInpup } from '../theme/appTheme';
import Lottie from 'lottie-react-native';
import { stylePokemonDetails } from '../theme/appTheme';

export const Loading = () => {
    return (
            <Lottie style={stylePokemonDetails.loadingStyle} source={require('../assets/lotties/loading-pokeball.json')} autoPlay loop />
    );
};
