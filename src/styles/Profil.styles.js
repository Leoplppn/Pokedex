import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        gap: 8,
    },
    image: { width: 200, height: 200 },
    prenom: { fontSize: 28, fontWeight: "bold" },
    label: { color: "#636161", fontSize: 16 },
    pokemon: { fontSize: 22 },
});

export default styles;