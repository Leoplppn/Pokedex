import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles/PokemonCard.styles";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
    Plante: "green",
    Feu: "orange",
    Eau: "blue",
    Électrik: "yellow",
};

export default function PokemonCard({ number, name, type }) {
    const [captured, setCaptured] = useState(false);
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
            <View>
                <Text style={styles.number}>#{number}</Text>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.type}>{type}</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => setCaptured(!captured)}
                >
                    <Text>{captured ? "Capturé" : "Capturer"}</Text>
                </Pressable>
            </View>
        </View>
    );
}