// Correction TP 5 · partie 2
// Fichier : src/app/_layout.js
// La pile (Stack) qui contient les onglets et la fiche

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Les onglets ont déjà leur barre du haut : on cache celle de la pile */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}