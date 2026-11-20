// Correction TP 5 · partie 2
// Fichier : src/app/(tabs)/profil.js
// Le deuxième onglet : un écran tout simple

import { Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function Profil() {
  return (
    <View style={styles.page}>
      <Text style={styles.prenom}>Sacha</Text>
      <Text style={styles.texte}>Mon Pokémon préféré :</Text>
      <Image source={{ uri: `${ARTWORK}25.png` }} style={styles.image} />
      <Text style={styles.nom}>Pikachu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  prenom: {
    fontSize: 32,
    fontWeight: "bold",
  },
  texte: {
    fontSize: 16,
    color: "#666",
  },
  image: {
    width: 200,
    height: 200,
  },
  nom: {
    fontSize: 22,
    fontWeight: "bold",
  },
});