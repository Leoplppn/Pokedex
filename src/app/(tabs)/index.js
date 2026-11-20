// Correction TP 5 : le Pokédex, déplacé dans le dossier (tabs)
// Fichier : src/app/(tabs)/index.js
// Nouveau par rapport au TP 4 : les imports avec ../../ et le Pressable qui ouvre la fiche
// Les données viennent de src/data/pokemons.js (100 Pokémon : { number, name, type })

import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
// Le fichier est maintenant dans (tabs)/ : il faut remonter de 2 dossiers
import PokemonCard from "../../components/PokemonCard";
import POKEMONS from "../../data/pokemons";

export default function Index() {
  // ===== Partie 2 : les captures sont remontées dans l'écran =====
  // Un tableau de numéros : [25, 4, 7] = Pikachu, Salamèche et Carapuce capturés
  const [captured, setCaptured] = useState([]);
  // true = on n'affiche que les Pokémon capturés
  const [capturesSeulement, setCapturesSeulement] = useState(false);

  // Capturer ou relâcher un Pokémon (même principe que aimer(id) pour les posts)
  function capturer(number) {
    if (captured.includes(number)) {
      // déjà capturé : on le retire du tableau
      setCaptured(captured.filter((n) => n !== number));
    } else {
      // pas encore capturé : nouveau tableau = l'ancien + le nouveau numéro
      setCaptured([...captured, number]);
    }
  }

  // La liste à afficher : tous les Pokémon, ou seulement les capturés
  const visibles = capturesSeulement
    ? POKEMONS.filter((p) => captured.includes(p.number))
    : POKEMONS;

  return (
    // ===== Partie 1 : la FlatList en grille =====
    <FlatList
      data={visibles}
      keyExtractor={(item) => String(item.number)} // la key doit être un texte
      numColumns={2} // 2 cartes par ligne
      columnWrapperStyle={styles.ligne} // le style de chaque ligne
      contentContainerStyle={styles.liste}
      extraData={captured} // redessine la liste quand les captures changent
      ListHeaderComponent={
        <View style={styles.entete}>
                    <Text style={styles.compteur}>{captured.length} capturés</Text>
          <Pressable
            style={styles.bouton}
            onPress={() => setCapturesSeulement(!capturesSeulement)}
          >
            <Text style={styles.boutonTexte}>
              {capturesSeulement ? "Voir tout" : "Mes captures"}
            </Text>
          </Pressable>
        </View>
      }
      ListEmptyComponent={
        <Text style={styles.vide}>Aucun Pokémon capturé pour l'instant.</Text>
      }
      renderItem={({ item }) => (
        // TP 5 : toucher la carte ouvre la fiche, par exemple /pokemon/25
        // flex: 1 pour que la carte garde la moitié de la largeur
        <Pressable
          style={{ flex: 1 }}
          onPress={() => router.push(`/pokemon/${item.number}`)}
        >
          <PokemonCard
            number={item.number}
            name={item.name}
            type={item.type}
            captured={captured.includes(item.number)} // true ou false
            onCapture={() => capturer(item.number)} // la carte prévient l'écran
          />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  liste: {
    padding: 12,
    backgroundColor: "#F2F2F7",
  },
  ligne: {
    gap: 12,
  },
  entete: {
    marginBottom: 12,
    gap: 8,
  },
  titre: {
    fontSize: 28,
    fontWeight: "bold",
  },
  compteur: {
    fontSize: 16,
    color: "#666",
  },
  bouton: {
    alignSelf: "flex-start",
    backgroundColor: "#3B5BDB",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  boutonTexte: {
    color: "white",
    fontWeight: "bold",
  },
  vide: {
    textAlign: "center",
    color: "#666",
    marginTop: 40,
  },
});