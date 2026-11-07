import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 16,
        gap: 12,
    },
    row: {
        gap: 12,
    },
    header: {
        gap: 12,
    },
    filterButton: {
        alignSelf: "flex-start",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
});

export default styles;