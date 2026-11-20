// Correction TP 4 : la carte d'un Pokémon
// Fichier : src/components/PokemonCard.js
// La carte n'a plus de state : elle reçoit captured et onCapture en props

import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type, captured, onCapture }) {
  return (
    // Le style change si le Pokémon est capturé
    <View style={[styles.carte, captured && styles.carteCapturee]}>
      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />
      <Text style={styles.numero}>#{number}</Text>
      <Text style={styles.nom}>{name}</Text>
      <Text style={styles.type}>{type}</Text>

      {/* Au clic, on appelle la fonction reçue : c'est l'écran qui modifie le state */}
      <Pressable style={styles.bouton} onPress={onCapture}>
        <Text style={styles.boutonTexte}>
          {captured ? "Relâcher" : "Capturer"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  carte: {
    flex: 1, // les 2 cartes d'une ligne se partagent la largeur
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "transparent",
  },
  carteCapturee: {
    borderColor: "#F59F00",
    backgroundColor: "#FFF9DB",
  },
  image: {
    width: 100,
    height: 100,
  },
  numero: {
    color: "#999",
    fontSize: 13,
  },
  nom: {
    fontSize: 17,
    fontWeight: "bold",
  },
  type: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8,
  },
  bouton: {
    backgroundColor: "#E03131",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 14,
  },
  boutonTexte: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
  },
});