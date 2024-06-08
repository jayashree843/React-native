import { View, Text, Pressable, StyleSheet, SafeAreaView } from "react-native"
export default function Search({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Hi, User!
            </Text>
            <View>
                <Pressable style={styles.search_button} onPress={() =>
                    navigation.navigate('Work', { name: 'let' })
                } >
                    <Text style={styles.text}>Search</Text>
                </Pressable>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(253,226,77)',
    },
    heading: {
        marginBottom: 10,
    },
    search_button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(59,9,9)',
        marginBottom: 10,
        width: 100,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});