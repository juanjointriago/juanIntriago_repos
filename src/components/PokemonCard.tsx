/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Image, Text, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styleCardPokemon, styles, widowWidth } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';
import { useEffect, useRef, useState } from 'react';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

interface Props {
    pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [bgColor, setBgColor] = useState('gray');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'grye' })
            .then(colors => {
                if (!isMounted.current) return;
                (colors.platform === 'ios')
                    ? setBgColor(colors.background || 'grey')
                    : setBgColor(colors.dominant || 'gray');
            });
        return () => isMounted.current = false;
    }, []);

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })}
            >
            <View style={{
                ...styleCardPokemon.cardConatiner,
                width: widowWidth * 0.40,
                backgroundColor: bgColor,
            }}>
                <View>
                    <Text style={styleCardPokemon.name}>
                        {pokemon.name}
                        {`\n${pokemon.id}`}
                    </Text>
                </View>
                <View style={styleCardPokemon.pokebolaContainer}>
                    <Image source={require('../assets/pokebola.png')} style={styles.pokebola} />
                </View>

                <FadeInImage uri={pokemon.picture} style={styleCardPokemon.pokemonImg} />

            </View>
        </TouchableOpacity>
    )
}
