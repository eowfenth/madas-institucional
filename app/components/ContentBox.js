import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const labels = {
    title: '',
    subtitle: '',
    speakers: ['Palestrantes: ', 'Palestrante: '],
    content: 'Conteúdo a ser discutido:',
};

const styles = StyleSheet.create({
    genericLabel: {
        fontSize: 16,
        color: '#212121',
    },
    genericContainer: {
        marginTop: 5,
    },
    margin: {
        marginTop: 10,
    },
    contentMargin: {
        marginTop: 5,
    },
    titleContentLabel: {
        fontSize: 24,
        color: '#212121',
    },
    subtitleContentLabel: {
        fontSize: 14,
        fontStyle: 'italic',
    },
});

const ContentBox = (props) => {
    const {
        content, title, speakers, subtitle
    } = props;
    return (
        <View>
            <Text style={styles.titleContentLabel}>{title}</Text>
            <Text style={styles.subtitleContentLabel}>{subtitle}</Text>
            <Text style={{ ...styles.genericLabel, ...styles.margin }}>
                {speakers && speakers.length > 1
                    ? labels.speakers[0]
                    : labels.speakers[1]}
            </Text>
            {speakers.map(speaker => (
                <View key={speaker.key} style={styles.genericContainer}>
                    <Text>{`• ${speaker.name}`}</Text>
                </View>
            ))}
            <Text style={{ ...styles.genericLabel, ...styles.margin }}>
                {labels.content}
            </Text>
            <Text style={styles.contentMargin}>{content}</Text>
        </View>
    );
};

export default ContentBox;
