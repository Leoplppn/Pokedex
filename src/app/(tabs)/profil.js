import { Image, Text, View } from "react-native";
import styles from "../../styles/Profil.styles";

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

export default function Profil() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: `${ARTWORK}55.png` }} style={styles.image} />
            <Text style={styles.prenom}>Léo</Text>
            <Text style={styles.label}>Mon pookemon préféré est: </Text>
            <Text style={styles.pokemon}>Akwakwak</Text>
        </View>
    );
}