import {
  View,
  Text,
  ScrollView,
  FlatList,
  ListRenderItem,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { images } from '../../../assets/images/images';
import { colors } from '../../../color/color';
import { Location } from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackNavigator } from '../../../types/navigation';
import Geolocation from '@react-native-community/geolocation';

export type EventType = {
  id: string;
  title: string;
  location: string;
  image: ImageSourcePropType | undefined;
  avatar: ImageSourcePropType | undefined;
};

const data: EventType[] = [
  {
    id: '1',
    title: 'International Band Music',
    location: '36 Guild Street London, UK',
    image: images.image_event,
    avatar: images.avatar,
  },
  {
    id: '2',
    title: 'International Band Music',
    location: '36 Guild Street London, UK',
    image: images.image_event,
    avatar: images.avatar,
  },
  {
    id: '3',
    title: 'International Band Music',
    location: '36 Guild Street London, UK',
    image: images.image_event,
    avatar: images.avatar,
  },
  {
    id: '4',
    title: 'International Band Music',
    location: '36 Guild Street London, UK',
    image: images.image_event,
    avatar: images.avatar,
  },
];

const EventHome = () => {
  const navigation = useNavigation<NavigationProp<MainStackNavigator>>();
  const onNavigate = () => {
    navigation.navigate('EventHomeDetail');
  };

  const renderItem: ListRenderItem<EventType> = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={onNavigate}
        style={{
          margin: 10,
          borderWidth: 0.1,
          alignItems: 'center',
          padding: 20,
          borderRadius: 20,
          borderColor: '#979797',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}
      >
        <Image source={item?.image} />
        <View style={{ width: '100%', marginVertical: 10 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
        </View>
        <View
          style={{ flexDirection: 'row', width: '100%', alignItems: 'center', marginVertical: 5 }}
        >
          <Image source={item.avatar} />
          <Image source={item.avatar} style={{ marginLeft: -10 }} />
          <Image source={item.avatar} style={{ marginLeft: -10 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: colors.primary }}>+20 Going</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
          <Location size="20" color="#FF8A65" />
          <Text style={{ marginLeft: 10 }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, padding: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Upcoming Events</Text>
        <TouchableOpacity>
          <Text style={{ color: 'gray' }}>See all </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>NearBy You</Text>
        <TouchableOpacity>
          <Text style={{ color: 'gray' }}>See all </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default EventHome;
