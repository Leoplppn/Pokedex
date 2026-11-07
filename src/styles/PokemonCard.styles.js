import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        gap: 6,
        padding: 12,
        borderRadius: 14
    },
    cardCaptured: {
        borderWidth: 3,
        borderColor: "#333333"
    },
    image: { width: 100, height: 100 },
    number: { color: "#888888" },
    name: { fontSize: 18, fontWeight: "bold" },
    type: {
        backgroundColor: "#ECE8DE",
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    button: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        marginTop: 6
    },
});

export default styles;