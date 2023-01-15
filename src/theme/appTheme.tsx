/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from "react-native";

export const widowWidth = Dimensions.get('window').width;
export const widowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    pokebolaBG: {
        position: "absolute",
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.2,
    },
    pokebola: {
        position: "absolute",
        width: 100,
        height: 100,
        bottom: -25,
        right: -25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export const styleCardPokemon = StyleSheet.create({
    cardConatiner: {
        marginHorizontal: 10,
        backgroundColor: 'red',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        top: 5,
        right: -5,
        color: 'white',
        fontSize: 20,
    },
    pokemonImg: {
        width: 120,
        height: 120,
        position: "absolute",
        right: -8,
        bottom: -5,
    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: "absolute",
        bottom: 0,
        right: 0,
        overflow: "hidden",
        opacity: 0.5,
    },
});

export const stylePokemonScreen = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        borderRadius: 10,
        alignItems: "center",
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.5,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
});
export const stylePokemonDetails = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 20,
    },
    regularText: {
        fontSize: 19,
    },
    basicSprite: {
        width: 100,
        height: 100,
    },
    loadingStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
    },
});

export const styleSearchInpup = StyleSheet.create({
    container: {
        //backgroundColor: 'red',
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2,
    },
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleSearchInput: {
        position: 'absolute',
        zIndex: 999,
        width: widowWidth,
    },
});
