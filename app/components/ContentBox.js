import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const labels = {
    title: "",
    subtitle: "",
    speakers: ["Palestrantes: ", "Palestrante: "],
    content: "Conteúdo a ser discutido:"
};

export default ContentBox = (props) => (
    <View>
        <Text style={styles.titleContentLabel}>{props.title}</Text>
        <Text style={styles.subtitleContentLabel}>{props.subtitle}</Text>
        <Text style={{ ...styles.genericLabel, ...styles.margin }}>{(props.speakers && props.speakers.length > 1) ? labels.speakers[0] : labels.speakers[1]}</Text>
        {props.speakers.map((x, index) => (
            <View key={index} style={styles.genericContainer}>
                <Text>• {x}</Text>
            </View>
        ))}
        <Text style={{ ...styles.genericLabel, ...styles.margin }}>{labels.content}</Text>
        <Text style={styles.contentMargin}>{props.content}</Text>
    </View>
);

const styles = StyleSheet.create({
    genericLabel: {
        fontSize: 16,
        color: "#212121"
    },
    genericContainer: {
        marginTop: 5
    },
    margin: {
        marginTop: 10
    },
    contentMargin: {
        marginTop: 5
    },
    titleContentLabel: {
        fontSize: 24,
        color: "#212121"
    },
    subtitleContentLabel: {
        fontSize: 14,
        fontStyle: "italic"
    }
})