import { Text } from "react-native";
import styles from "../styles/Titre.styles";

export default function Titre({ texte }) {
    return <Text style={styles.title}>{texte}</Text>;
}