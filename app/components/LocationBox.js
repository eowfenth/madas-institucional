import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GOOGLE_MAPS_BASE_URL = "https://www.google.com/maps/place/";
const labels = {
    address: "Onde e quando: ",
    location: "LOCALIZAÇÃO"
}

function formatDate(date) {
    const monthNames = [
        'Janeiro',
        'Feveiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];

    const weekDayNames = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ];

    const dateObject = new Date(date);
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();

    if (day < 10)
        day = '0' + day;
    if (hours < 10)
        hours = '0' + hours;
    if (minutes < 10)
        minutes = '0' + minutes;

    return `${weekDayNames[dateObject.getDay()]}, ${day} de ${monthNames[month]} de ${dateObject.getFullYear()}, às ${hours}:${minutes}`
}

export default LocationBox = (props) => (
    <View style={styles.container}>
        <Text style={{ ...styles.genericLabel, fontSize: 16, marginTop: 5 }}>{labels.address}</Text>
        <Text style={{ ...styles.genericLabel, fontSize: 14, marginLeft: 15, marginTop: 5, fontStyle: "italic" }}>{formatDate(props.startAt)}</Text>
        <Text style={{ ...styles.genericLabel, fontSize: 14, marginLeft: 15}}>{props.location}</Text>
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
        height: 150,
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

