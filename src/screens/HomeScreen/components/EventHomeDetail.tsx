import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { images } from '../../../assets/images/images';
import Header from '../../../components/Header';
import { Location, Note1, Timer1, UserSquare } from 'iconsax-react-native';
import { colors } from '../../../color/color';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackNavigator } from '../../../types/navigation';

const EventHomeDetail = () => {
  const navigation = useNavigation<NavigationProp<RootStackNavigator>>();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="light-content" />
      <View>
        <Header
          onPress={() => navigation.goBack()}
          title="Event Details"
          style={{
            position: 'absolute',
            zIndex: 9999,
            top: 60,
            left: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          titleStyle={{ flexDirection: 'row', alignItems: 'center' }}
        />
        <Image source={images.image_header} style={{ width: '100%', zIndex: -10 }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   borderWidth: 0.5,
          borderRadius: 30,
          padding: 15,
          borderColor: 'gray',
          justifyContent: 'space-around',
          width: '80%',
          alignSelf: 'center',
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
          bottom: 30,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image source={images.avatar} />
          <Image source={images.avatar} style={{ marginLeft: -10 }} />
          <Image source={images.avatar} style={{ marginLeft: -10 }} />
        </View>
        <Text style={{ color: colors.primary }}>+20 Going</Text>
        <TouchableOpacity
          style={{ backgroundColor: colors.primary, padding: 10, borderRadius: 15 }}
        >
          <Text style={{ color: 'white' }}>Invite</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>International Branch Music Concert</Text>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Timer1 size="32" color="#FF8A65" />
          <View style={{ marginLeft: 20 }}>
            <Text>14 November, 2024</Text>
            <Text>Tuesday, 4:00PM-9:00PM</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Location size="32" color="#FF8A65" />
          <View style={{ marginLeft: 20 }}>
            <Text>Gala Convention Center</Text>
            <Text>36 Guild street London</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <UserSquare size="32" color="#FF8A65" />
            <View style={{ marginLeft: 20 }}>
              <Text>Son tung MTP</Text>
              <Text>Viet Nam</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{ color: colors.primary }}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventHomeDetail;
