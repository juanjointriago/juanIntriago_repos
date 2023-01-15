/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
//import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image, FlatList, ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { loadPokemons, simplePokemonList } = usePokemonPaginated();

  return (
    <>
      <Image source={require('../assets/pokebola.png')} style={styles.pokebolaBG} />
      <View style={{ alignItems: 'center' }}>

        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          //header
          ListHeaderComponent={(
            <Text style={
              {
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginTop: top + 20,
                paddingBottom: 20,
              }}>Pokédex</Text>)}

          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          //infinitescroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
          <ActivityIndicator
          style={{ height: 100 }}
          size={20}
          color={'gray'} />
        }
        />
      </View>
    </>
  );
};
