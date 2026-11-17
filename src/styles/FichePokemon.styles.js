import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        gap: 8,
    },
    image: { width: 250, height: 250 },
    number: { color: "#888888", fontSize: 18 },
    name: { fontSize: 28, fontWeight: "bold" },
    type: {
        backgroundColor: "#ECE8DE",
        paddingHorizontal: 14,
        paddingVertical: 4,
        borderRadius: 10,
        overflow: "hidden",
        fontSize: 16,
    },
});

export default styles;