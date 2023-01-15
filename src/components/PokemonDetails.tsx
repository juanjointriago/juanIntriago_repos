/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { ScrollView } from 'react-native-gesture-handler';
import { stylePokemonDetails } from '../theme/appTheme';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull;
}
export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView style={{ ...StyleSheet.absoluteFillObject }} showsVerticalScrollIndicator={false}>
            <View style={{ ...stylePokemonDetails.container, marginTop: 370 }}>
                <Text style={stylePokemonDetails.title}>Tipos/Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{ ...stylePokemonDetails.regularText, marginRight: 10 }}
                                key={type.name}>
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                <Text style={stylePokemonDetails.title}>Peso/Weigth</Text>
                <Text style={stylePokemonDetails.regularText}>{`${pokemon.weight}kg`}</Text>

            </View>

            <View style={{ ...stylePokemonDetails.container, marginTop: 20 }}>
                <Text style={stylePokemonDetails.title}>Miniaturas/Sprites</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingLeft: 5 }}
                >
                    <FadeInImage uri={pokemon.sprites.front_default} style={stylePokemonDetails.basicSprite} />
                    <FadeInImage uri={pokemon.sprites.back_default} style={stylePokemonDetails.basicSprite} />
                    <FadeInImage uri={pokemon.sprites.front_shiny} style={stylePokemonDetails.basicSprite} />
                    <FadeInImage uri={pokemon.sprites.back_shiny} style={stylePokemonDetails.basicSprite} />

                </ScrollView>
            </View>
            <View style={stylePokemonDetails.container}>
                <Text style={stylePokemonDetails.title}>Habilidades base/Basic skills</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{ ...stylePokemonDetails.regularText, marginRight: 10 }}
                                key={ability.name}>
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>

            </View>
            <View style={stylePokemonDetails.container}>
                <Text style={stylePokemonDetails.title}>Movimientos/Moves</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{ ...stylePokemonDetails.regularText, marginRight: 10 }}
                                key={move.name}>
                                {move.name}
                            </Text>
                        ))
                    }
                </View>

            </View>
            <View style={stylePokemonDetails.container}>
                <Text style={stylePokemonDetails.title}>Estadísticas/Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, index) => (
                            <View key={stat.stat.name + index} style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{ ...stylePokemonDetails.regularText, marginRight: 10, width: 150 }}
                                    key={stat.stat.name}>
                                    {stat.stat.name}
                                </Text>
                                <Text
                                    style={{ ...stylePokemonDetails.regularText, fontWeight: 'bold' }}>
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>
                <View style={{
                    marginBottom: 80,
                    alignItems: 'center',
                }}>

                    <FadeInImage uri={pokemon.sprites.front_default} style={stylePokemonDetails.basicSprite} />
                </View>

            </View>
        </ScrollView>
    );
};
