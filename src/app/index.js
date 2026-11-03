import { useState } from "react";
import { Pressable, ScrollView, Text } from "react-native";
import Aide from "../components/Aide";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import styles from "../styles/index.styles.js";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  const [feuSeulement, setFeuSeulement] = useState(false);

  const visibles = feuSeulement
    ? POKEMONS.filter((p) => p.type === "Feu")
    : POKEMONS;

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Aide />
      <Titre texte="Mon Pokédex" />
      <Text>{visibles.length} Pokémon</Text>
      <Pressable
        style={styles.filterButton}
        onPress={() => setFeuSeulement(!feuSeulement)}
      >
        <Text>{feuSeulement ? "Tout afficher" : "Seulement le type Feu"}</Text>
      </Pressable>
      {visibles.map((p) => (
        <PokemonCard
          key={p.number}
          number={p.number}
          name={p.name}
          type={p.type}
        />
      ))}
    </ScrollView>
  );
}