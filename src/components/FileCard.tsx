import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import { Attachment } from '../types/file';
import { CloseCircle } from 'iconsax-react-native';

type FileType = 'Image' | 'File';

type Props = {
  type?: FileType;
  dataFile?: Attachment[];
  onDeleteImage: (index: number) => void;
};

const FileCard = (props: Props) => {
  const { type = 'Image', dataFile, onDeleteImage } = props;

  const renderItem: ListRenderItem<Attachment> = ({ item, index }) => {
    return (
      <View key={index} style={[styles.image, index >= 1 && { marginLeft: 15 }]}>
        <TouchableOpacity style={styles.iconClose} onPress={() => onDeleteImage(index)}>
          <CloseCircle size="20" color="#FF8A65" />
        </TouchableOpacity>
        <Image source={{ uri: item.deviceURI }} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={dataFile}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FileCard;

const styles = StyleSheet.create({
  container: {
    // width: 300,
    // height: 300,
    // backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  iconClose: {
    position: 'absolute',
    right: 10,
    zIndex: 9999,
    top: 10,
  },
});
