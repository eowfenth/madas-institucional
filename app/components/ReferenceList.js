import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const labels = {
  listName: 'Materiais de Discussão:',
};

const styles = StyleSheet.create({
  listLabel: {},
  genericLabel: {
    color: '#212121',
    marginTop: 10,
  },
  referenceTitleLabel: {
    marginTop: 5,
  },
  referenceItemContainer: {
    marginTop: 10,
  },
});

const ReferenceList = props => {
  const { references } = props;
  return (
    <View>
      <Text style={{ ...styles.genericLabel, fontSize: 16 }}>
        {labels.listName}
      </Text>
      {references.map(reference => (
        <View key={reference.key} style={styles.referenceItemContainer}>
          <Text>{`- ${reference.author}`}</Text>
          <Text style={styles.referenceTitleLabel}>{reference.title}</Text>
          <Text>{reference.from}</Text>
        </View>
      ))}
    </View>
  );
};

export default ReferenceList;
