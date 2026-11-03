import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderRadius: 14
    },
    cardCaptured: {
        borderWidth: 3,
        borderColor: "#302f2f"
    },
    image: { width: 80, height: 80 },
    number: { color: "#918a8a" },
    name: { fontSize: 18, fontWeight: "bold" },
    type: {
        alignSelf: "flex-start",
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 10,
        overflow: "hidden"
    },
    button: {
        alignSelf: "flex-start",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        marginTop: 6
    },
});

export default styles;