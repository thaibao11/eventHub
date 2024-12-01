import { View, Text, SafeAreaView, StyleSheet, Dimensions, Button } from 'react-native';
import React, { useEffect } from 'react';
import ControllerInput from '../../components/ControllerInput';
import { useForm } from 'react-hook-form';
import { LocationType, NewEventType } from '../../types/event';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowRight2, EyeSlash, Location, LocationTick } from 'iconsax-react-native';
import ModalComponent from '../../components/ModalComponent';
import { useState } from 'react';
import { CloseCircle, SearchNormal1 } from 'iconsax-react-native';
import { colors } from '../../color/color';
import { useSearchLocation } from '../../hook/useSearchLocation';
import IconLoading from '../../components/IconLoading';
import { useDebounce } from '../../hook/useDebounce';
import ListSearchLocation from './ListSearchLocation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const AddScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [dataLocation, setDataLocation] = useState<LocationType[]>([]);
  const [initLocation, setInitLocation] = useState({
    lat: 0,
    long: 0,
  });
  const [locationSelected, setLocationSelected] = useState<LocationType>();
  const { mutateAsync: searchLocation, isLoading } = useSearchLocation();
  const { control, watch, register, setValue } = useForm<NewEventType>({
    defaultValues: {
      name: '',
      description: '',
      location: '',
    },
  });
  const [name, description, location] = watch(['name', 'description', 'location']);
  const debounceQuery = useDebounce(location, 1000);

  const onSearchLocation = async () => {
    const res = await searchLocation({ keyword: location, polygon_geojson: 1 });
    setDataLocation(res);
  };
  useEffect(() => {
    if (debounceQuery && location) {
      onSearchLocation();
    }
  }, [location, debounceQuery]);

  // useEffect(() => {
  //   Geolocation.getCurrentPosition((info) => {
  //     setInitLocation({ lat: info.coords.latitude, long: info.coords.longitude });
  //   });
  // }, []);

  const onSelectLocation = (item: LocationType) => {
    setLocationSelected(item);
    setDataLocation([]);
  };

  const onConfirm = () => {
    setVisible(false);
    setDataLocation([]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <ControllerInput
          control={control}
          name="name"
          register={register}
          placeholder="Type name"
          style={{ padding: 15 }}
        />
        <ControllerInput
          style={{ marginTop: 20, padding: 15 }}
          control={control}
          name="description"
          register={register}
          placeholder="Type description"
        />
        <TouchableOpacity style={styles.location} onPress={() => setVisible(true)}>
          <View style={styles.nameLocation}>
            <Location size="20" color="#FF8A65" />
            {locationSelected ? (
              <Text style={styles.text} numberOfLines={1}>
                {locationSelected.display_name}
              </Text>
            ) : (
              <Text style={styles.text}>Select location</Text>
            )}
          </View>
          <View>
            <ArrowRight2 size="20" color="#FF8A65" />
          </View>
        </TouchableOpacity>
      </View>
      <ModalComponent
        visible={visible}
        onDismiss={() => setVisible(false)}
        sheetHeight={750}
        onConfirm={onConfirm}
      >
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}
        >
          <ControllerInput
            setValue={setValue}
            name="location"
            value={location}
            control={control}
            register={register}
            prefix={<SearchNormal1 size="20" color="#FF8A65" />}
            suffix={<CloseCircle size="20" color="#FF8A65" />}
            placeholder="Search location"
            style={{
              paddingHorizontal: 40,
              paddingVertical: 15,
              width: Dimensions.get('window').width / 1.3,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
              setValue('location', '');
              setLocationSelected(undefined);
              setDataLocation([]);
            }}
          >
            <Text style={{ color: colors.orange }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        {isLoading && <IconLoading />}
        {dataLocation.length > 0 && location ? (
          <ListSearchLocation data={dataLocation} onPress={onSelectLocation} />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ color: colors.orange, fontSize: 20 }}>No location found</Text>
          </View>
        )}
        {locationSelected ? (
          <View style={styles.container}>
            <MapView
              showsUserLocation
              showsMyLocationButton
              style={styles.map}
              initialRegion={{
                latitude: initLocation.lat,
                longitude: initLocation.long,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
              region={{
                latitude: locationSelected?.boundingbox[0] ?? initLocation.lat,
                longitude:
                  locationSelected?.boundingbox[locationSelected?.boundingbox.length - 1] ??
                  initLocation.long,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            ></MapView>
          </View>
        ) : (
          <></>
        )}
      </ModalComponent>
    </SafeAreaView>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    padding: 15,
  },
  nameLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  text: {
    marginLeft: 10,
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 120,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
