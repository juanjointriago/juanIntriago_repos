/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import { useEffect, useState } from 'react';
import { FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styleSearchInpup, styles } from '../theme/appTheme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { NotResults } from '../components/NotResults';


export const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [filteredPokemon, setFilteredPokemon] = useState<SimplePokemon[]>([]);

    const [term, setTerm] = useState('');

    useEffect(() => {
        if (term.length === 0) {
            return setFilteredPokemon([]);
        }

        if (isNaN(Number(term))) {
            setFilteredPokemon(
                simplePokemonList.filter(
                    pokemon => pokemon.name.toLocaleLowerCase()
                        .includes(term.toLocaleLowerCase()))
            );
        } else {
            const pokemonById = simplePokemonList.find(pokemon => pokemon.id === term);
            setFilteredPokemon(pokemonById ? [pokemonById] : []);
        }

    }, [term]);

    if (isFetching) {
        return <Loading />;
    }
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
        }}>
            <SearchInput
                onDebounce={(value) => setTerm(value)}
                style={{
                    ...styleSearchInpup.styleSearchInput,
                    top: (Platform.OS === 'ios') ? top : top + 30,
                }} />

            {
                filteredPokemon.length < 1
                    ? <NotResults />
                    : <FlatList
                        data={filteredPokemon}
                        keyExtractor={pokemon => pokemon.id}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        ListHeaderComponent={(
                            <Text style={
                                {
                                    ...styles.title,
                                    ...styles.globalMargin,
                                    paddingBottom: 10,
                                    marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                                }}>{`Resultados para : ${term}`}</Text>)}
                        renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    />
            }
        </View>
    );
};
