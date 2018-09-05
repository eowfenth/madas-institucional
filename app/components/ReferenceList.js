import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const labels = {
    listName: "Materiais de Discussão:"
};

export default ReferenceList = (props) => (
    <View>
        <Text style={{ ...styles.genericLabel, fontSize: 16 }}>{labels.listName}</Text>
        {props.references.map(x => (
            <View key={x.key} style={styles.referenceItemContainer}>
                <Text style={{}}>• {x.author}</Text>
                <Text style={styles.referenceTitleLabel}>{x.title}</Text>
                <Text>{x.from}</Text>
            </View>
        ))}
    </View>
);

const styles = StyleSheet.create({
    listLabel: {
    },
    genericLabel: {
        color: "#212121",
        marginTop: 10
    },
    referenceTitleLabel: {
        marginTop: 5
    },
    referenceItemContainer: {
        marginTop: 10
    }
});