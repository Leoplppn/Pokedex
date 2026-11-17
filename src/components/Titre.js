import { Text } from "react-native";

export default function Titre({ texte }) {
    return(
        <Text style={styles.title}>{ texte }</Text>
    )
}

