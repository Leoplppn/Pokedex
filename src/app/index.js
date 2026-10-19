import { ScrollView, StyleSheet, Text, View } from "react-native";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <Titre texte="Mon Pokédex" />
      <Text style={styles.count}>{POKEMONS.length} Pokémon</Text>
      <ScrollView>
        {POKEMONS.map((p) => (
          <PokemonCard
            key={p.number}
            number={p.number}
            name={p.name}
            type={p.type}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  count: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
});