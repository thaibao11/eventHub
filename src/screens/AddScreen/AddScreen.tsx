import { View, Text, SafeAreaView, StyleSheet, Dimensions, Button } from 'react-native';
import React, { useEffect } from 'react';
import ControllerInput from '../../components/ControllerInput';
import { useForm } from 'react-hook-form';
import { LocationType, NewEventType } from '../../types/event';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Add,
  ArrowRight2,
  Camera,
  EyeSlash,
  Image,
  Location,
  LocationTick,
} from 'iconsax-react-native';
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
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '../../components/DateTimePicker';
import { formatHour } from '../../utils/formatHour';
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
  PhotoQuality,
} from 'react-native-image-picker';
import { Attachment } from '../../types/file';
import FileCard from '../../components/FileCard';

const AddScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [visibleStartTime, setVisibleStartTime] = useState<boolean>(false);
  const [visibleEndTime, setVisibleEndTime] = useState<boolean>(false);
  const [visibleImagePicker, setVisibleImagePicker] = useState<boolean>(false);
  const [file, setFile] = useState<Attachment[]>([]);

  const [dataLocation, setDataLocation] = useState<LocationType[]>([]);
  const [initLocation, setInitLocation] = useState({
    lat: 0,
    long: 0,
  });
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [locationSelected, setLocationSelected] = useState<LocationType>();
  const { mutateAsync: searchLocation, isLoading } = useSearchLocation();
  const { control, watch, register, setValue } = useForm<NewEventType>({
    defaultValues: {
      name: '',
      description: '',
      location: '',
      timeStart: new Date(),
      timeEnd: new Date(),
    },
  });
  const [name, description, location, timeStart, timeEnd] = watch([
    'name',
    'description',
    'location',
    'timeStart',
    'timeEnd',
  ]);
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

  const onSelectLocation = (item: LocationType) => {
    setLocationSelected(item);
    setDataLocation([]);
  };

  const onConfirm = () => {
    setVisible(false);
    setDataLocation([]);
  };

  const onOpenLibraryImage = async () => {
    const options = {
      mediaType: 'photo' as MediaType,
      quality: 1 as PhotoQuality,
    };
    await launchImageLibrary(options, (response) => {
      try {
        if (response.assets && response.assets.length > 0) {
          console.log('=====', response);
          const dataImage: Attachment = {
            deviceURI: response.assets[0].uri,
            fileSize: response.assets[0].fileSize,
            name: response.assets[0].fileName,
            mediaType: response.assets[0].type,
          };
          console.log('dataImage', dataImage);
          setFile([...file, dataImage]);
          setVisibleImagePicker(false);
        }
      } catch (err) {
        console.log('Error', err);
      }
    });
  };

  const onDeleteImage = (index: number) => {
    const cloneArr = [...file];
    cloneArr.splice(index, 1);
    setFile(cloneArr);
  };

  const onOpenCamera = async () => {
    console.log('1111');
    await launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'back',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera picker');
        } else if (response.errorMessage) {
          console.error('Camera error:', response.errorMessage);
        } else if (response.assets) {
          console.log('Camera result:', response.assets[0]);
        }
      }
    );
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
        <View style={styles.containerTime}>
          <DateTimePicker
            setValue={setValue}
            control={control}
            name="timeStart"
            title="Time Start"
            isHalfWidth
            mode="time"
            visible={visibleStartTime}
            setVisible={setVisibleStartTime}
            onPress={() => setVisibleStartTime(true)}
          />
          <DateTimePicker
            setValue={setValue}
            control={control}
            name="timeEnd"
            title="Time End"
            isHalfWidth
            mode="time"
            visible={visibleEndTime}
            setVisible={setVisibleEndTime}
            onPress={() => setVisibleEndTime(true)}
          />
        </View>
        <TouchableOpacity
          onPress={() => setVisibleImagePicker(true)}
          style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}
        >
          <Text style={{ color: colors.orange }}>Add Image</Text>
          <Add size="20" color="#FF8A65" />
        </TouchableOpacity>
      </View>
      <FileCard dataFile={file} onDeleteImage={onDeleteImage} />
      <ModalComponent
        isLocation
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
              region={
                {
                  latitude: locationSelected?.boundingbox[0] ?? initLocation.lat,
                  longitude:
                    locationSelected?.boundingbox[locationSelected?.boundingbox.length - 1] ??
                    initLocation.long,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                } as any
              }
            ></MapView>
          </View>
        ) : (
          <></>
        )}
      </ModalComponent>
      <ModalComponent
        visible={visibleImagePicker}
        onDismiss={() => setVisibleImagePicker(false)}
        sheetHeight={150}
      >
        <View style={{ flex: 1, width: '100%', padding: 15 }}>
          <TouchableOpacity
            onPress={onOpenLibraryImage}
            style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
          >
            <Image size="20" color="#FF8A65" />
            <Text style={{ marginLeft: 10 }}>Choose image from library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={onOpenCamera}
          >
            <Camera size="20" color="#FF8A65" />
            <Text style={{ marginLeft: 10 }}>Camera</Text>
          </TouchableOpacity>
        </View>
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
  containerTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
