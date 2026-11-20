// Correction TP 5 · partie 1
// Fichier : src/app/pokemon/[number].js
// Les crochets : une seule page pour tous les Pokémon (/pokemon/1, /pokemon/25…)

import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

export default function FichePokemon() {
  const { number } = useLocalSearchParams();

  const [pokemon, setPokemon] = useState(null);
  const [nomFr, setNomFr] = useState(null);

  async function charger() {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const data = await reponse.json();

    const reponseFr = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${number}`
    );
    const dataFr = await reponseFr.json();
    const nom = dataFr.names.find((n) => n.language.name === "fr").name;

    setPokemon(data);
    setNomFr(nom);
  }

  useEffect(() => {
    charger();
  }, [number]);

  if (pokemon === null || nomFr === null) {
    return (
      <View style={styles.page}>
        <Stack.Screen options={{ title: "Chargement" }} />
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: nomFr }} />

      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />
      <Text style={styles.numero}>#{number}</Text>
      <Text style={styles.nom}>{nomFr}</Text>
      <Text style={styles.type}>{pokemon.types[0].type.name}</Text>
      <Text style={styles.info}>Taille : {pokemon.height / 10} m</Text>
      <Text style={styles.info}>Poids : {pokemon.weight / 10} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  image: {
    width: 240,
    height: 240,
  },
  numero: {
    fontSize: 16,
    color: "#999",
  },
  nom: {
    fontSize: 32,
    fontWeight: "bold",
  },
  type: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: "#FFE066",
    fontWeight: "bold",
    overflow: "hidden",
  },
  // AJOUT : style de la taille et du poids
  info: {
    marginTop: 8,
    fontSize: 18,
  },
});