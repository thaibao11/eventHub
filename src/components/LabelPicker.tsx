import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { TypeFilterCategories } from '../constants/labelPicker';

type Props = {
  data: TypeFilterCategories[];
  style?: StyleProp<ViewStyle>;
};

const LabelPicker = (props: Props) => {
  const { data, style } = props;

  const renderItem: ListRenderItem<TypeFilterCategories> = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          width: 120,
          //   borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginRight: 20,
          backgroundColor: item.backgroundColor,
        }}
      >
        {item.icon}
        <Text style={{ color: 'white' }}> {item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={style}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default LabelPicker;
