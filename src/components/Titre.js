import { StyleSheet, Text } from "react-native";

export default function Titre({ texte }) {
  return <Text style={styles.titre}>{texte}</Text>;
}

const styles = StyleSheet.create({
  titre: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
});