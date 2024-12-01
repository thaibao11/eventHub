import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { LocationType } from '../../types/event';
import { TouchableOpacity } from 'react-native';

type Props = {
  data: LocationType[];
  onPress: (value: LocationType) => void;
};

const ListSearchLocation = (props: Props) => {
  const { data, onPress } = props;
  return (
    <ScrollView>
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.item} onPress={() => onPress(item)}>
            <Text>{item.display_name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ListSearchLocation;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
});
