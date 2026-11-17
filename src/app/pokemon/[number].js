import { Stack, useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import POKEMONS from "../../data/pokemons";
import styles from "../../styles/FichePokemon.styles";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
    const { number } = useLocalSearchParams();
    const pokemon = POKEMONS.find((p) => p.number === Number(number));

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: pokemon.name }} />
            <Image
                source={{ uri: `${ARTWORK}${pokemon.number}.png` }}
                style={styles.image}
            />
            <Text style={styles.number}>#{pokemon.number}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.type}>{pokemon.type}</Text>
        </View>
    );
}