import { Image, Pressable, Text, View } from "react-native";

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

