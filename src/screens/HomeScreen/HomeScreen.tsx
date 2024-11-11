import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { clearAccessToken } from '../../redux/authSlice';
import { colors } from '../../color/color';
import {
  ArrowDown2,
  FilterSearch,
  HambergerMenu,
  Notification,
  SearchNormal1,
} from 'iconsax-react-native';
import { filterCategories } from '../../constants/labelPicker';
import LabelPicker from '../../components/LabelPicker';
import EventHome from './components/EventHome';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    await AsyncStorage.clear();
    dispatch(clearAccessToken(''));
  };
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="light-content" backgroundColor="#5A55CA" />
      <View
        style={{
          height: 200,
          borderBottomLeftRadius: 60,
          borderBottomRightRadius: 60,
          backgroundColor: '#5A55CA',
          paddingHorizontal: 30,
          paddingTop: Platform.OS === 'ios' ? 60 : 20,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity>
            <HambergerMenu size="30" color="white" />
          </TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 15 }}>Current Location </Text>
              <ArrowDown2 size="25" color="white" />
            </TouchableOpacity>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>New York, USA</Text>
          </View>
          <View>
            <Notification size="20" color="white" />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <SearchNormal1 size="20" color="white" />
            <TextInput
              placeholder="Search"
              style={{ marginLeft: 20, width: '80%', paddingVertical: 20 }}
              placeholderTextColor="#C0C0C0"
              cursorColor="#C0C0C0"
              value=""
            />
          </View>
          <TouchableOpacity>
            <FilterSearch size="20" color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <LabelPicker data={filterCategories} style={{ width: '100%', bottom: 30 }} />
      <EventHome />
    </View>
  );
};

export default HomeScreen;
