import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import Aide from "../components/Aide";
import PokemonCard from "../components/PokemonCard";
import Titre from "../components/Titre";
import POKEMONS from "../data/pokemons";
import styles from "../styles/index.styles";

export default function Index() {
  const [captured, setCaptured] = useState([]);
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  function capturer(number) {
    if (captured.includes(number)) {
      setCaptured(captured.filter((n) => n !== number));
    } else {
      setCaptured([...captured, number]);
    }
  }

  const visibles = capturesSeulement
    ? POKEMONS.filter((p) => captured.includes(p.number))
    : POKEMONS;

  return (
    <View style={styles.container}>
      <FlatList
        data={visibles}
        extraData={captured}
        keyExtractor={(item) => String(item.number)}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.header}>
            <Aide />
            <Titre texte="Mon Pokédex" />
            <Text>
              {POKEMONS.length} Pokémon · {captured.length} capturés
            </Text>
            <Pressable
              style={styles.filterButton}
              onPress={() => setCapturesSeulement(!capturesSeulement)}
            >
              <Text>
                {capturesSeulement ? "Tout afficher" : "Mes captures"}
              </Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <PokemonCard
            number={item.number}
            name={item.name}
            type={item.type}
            captured={captured.includes(item.number)}
            onCapture={() => capturer(item.number)}
          />
        )}
      />
    </View>
  );
}