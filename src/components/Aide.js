import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Aide() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <View>
      <Pressable onPress={() => setIsDisplayed(!isDisplayed)}>
        <Text>{isDisplayed ? "Masquer aide" : "Afficher aide"}</Text>
      </Pressable>
      {isDisplayed && ( <Text>Appuyer sur Capturer pour ajouter un POkémon à votre équipe</Text> )}
    </View>
  );
}