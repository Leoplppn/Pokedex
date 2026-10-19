import { Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function PokemonCard({ number, name, type }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `${ARTWORK}${number}.png` }}
        style={styles.image}
      />
      <View style={styles.infos}>
        <Text style={styles.number}>#{number}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  infos: {
    marginLeft: 15,
  },
  number: {
    color: "gray",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  type: {
    fontSize: 16,
  },
});