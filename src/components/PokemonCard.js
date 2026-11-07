import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/PokemonCard.styles";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
    Plante: "#78C850",
    Feu: "#F08030",
    Eau: "#6890F0",
    Électrik: "#F8D030",
    Normal: "#A8A878",
    Poison: "#A040A0",
    Vol: "#A890F0",
    Insecte: "#A8B820",
    Sol: "#E0C068",
    Roche: "#B8A038",
    Fée: "#EE99AC",
    Psy: "#F85888",
    Combat: "#C03028",
    Spectre: "#705898",
    Glace: "#98D8D8",
    Dragon: "#7038F8",
};

export default function PokemonCard({ number, name, type, captured, onCapture }) {
    const color = TYPE_COLORS[type];

    return (
        <View
            style={[
                styles.card,
                { backgroundColor: color },
                captured && styles.cardCaptured,
            ]}
        >
            <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />
            <Text style={styles.number}>#{number}</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.type}>{type}</Text>
            <Pressable style={styles.button} onPress={onCapture}>
                <Text>{captured ? "Capturé ✓" : "Capturer"}</Text>
            </Pressable>
        </View>
    );
}