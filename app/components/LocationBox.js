import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GOOGLE_MAPS_BASE_URL = "https://www.google.com/maps/place/";
const labels = {
    address: "Endereço:",
    location: "LOCALIZAÇÃO"
}

export default LocationBox = (props) => (
    <View style={styles.container}>
        <Text style={{ ...styles.genericLabel, fontSize: 16 }}>{labels.address}</Text>
        <Text style={{ ...styles.genericLabel, fontSize: 14, marginLeft: 15, marginTop: 10 }}>{props.location}</Text>
        <Text style={{ ...styles.genericLabel, fontSize: 14, marginLeft: 15 }}>{props.complement}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => 
                Linking.openURL(
                    props.mapsUrl ? 
                        props.mapsUrl : `${GOOGLE_MAPS_BASE_URL}${props.latitude},${props.longitude}`
                )}
        >
            <Text style={styles.buttonLabel} uppercase>{labels.location}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 140,
        justifyContent: "center",
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        borderTopWidth: 1,
        borderTopColor: '#0000001f'
    },
    genericLabel: {
        color: "#757575"
    },
    button: {
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginRight: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        width: 120
    },
    buttonLabel: {
        color: "#673AB7",
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5
    }
});

