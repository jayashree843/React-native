import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Work({navigation}) {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.heading}>Total Amount Received</Text>
            </View>
            <View style={styles.travel1}>
                <View style={styles.heading_distance}>
                    <Text>Total distance traveled</Text>
                    
                </View>
                <Text style={styles.travel2}>
                <Text>113</Text>
                    <Text>60</Text>
                </Text>
            </View>

            <Text style={styles.stbutton}>
                <Button style={styles.startBtn}
                    title="Start Work"
                    onPress={() =>
                        navigation.navigate('Camera', { name: 'let' })
                    }
                    color="#3B0909"
                />
            </Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(253,226,77)',
    },
    travel1: {
        flex: 1,
        marginTop: 60,
        marginLeft: 10,
    },
    heading: {
        marginTop: 80,
        fontSize: 20,
    },
    heading_distance: {
        fontSize: 15,
        flex: 1,
        marginTop:-20

    },
    travel2: {
        backgroundColor: 'rgb(59,9,9)',
        padding: 10,
        marginLeft: 10,
        color: 'white',
        marginBottom: 10,

    },
    stbutton:{
        marginBottom:170

    },
})