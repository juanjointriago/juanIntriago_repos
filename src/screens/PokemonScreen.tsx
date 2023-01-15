/* eslint-disable no-extra-semi */
/* eslint-disable space-infix-ops */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable jsx-quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParams } from '../navigator/TabMain';
import { stylePokemonScreen } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemonFull } from '../hooks/usePokemonFull';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  const { id, name, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();

  const { isLoading, pokemon: pokemonFull } = usePokemonFull(id);

  return (
    <View style={{ flex: 1 }}>
      {/* headerContainer */}
      <View style={
        {
          ...stylePokemonScreen.headerContainer,
          backgroundColor: color,
        }}>
        {/* BackButton */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{
            ...stylePokemonScreen.backButton,
            top: top + 5,
          }}>
          <Icon
            name='arrow-back-outline'
            color={'white'}
            size={35} />
        </TouchableOpacity>
        {/* Name */}
        <Text
          style={{
            ...stylePokemonScreen.pokemonName,
            top: top + 40,
          }}>
          {`${name}\n`} # {id}
        </Text>
        <Image
        source={require('../assets/pokebola-blanca.png')}
        style={stylePokemonScreen.pokeball} />
        <FadeInImage uri={picture} style={stylePokemonScreen.pokemonImage} />
      </View>
      {
        isLoading
          ? (<View style={stylePokemonScreen.loadingIndicator}>
            <ActivityIndicator
              color={color}
              size={50} />
          </View>)
          : <PokemonDetails pokemon={pokemonFull} />
      }
    </View>
  );
};
