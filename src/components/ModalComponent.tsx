import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { createElement, useCallback, useRef } from 'react';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { Portal } from '@gorhom/portal';

type ModalProps = {
  visible?: boolean;
  children?: React.ReactNode;
  onDismiss?: () => void;
  sheetHeight: number;
  onConfirm?: () => void;
};

const ModalComponent = (props: ModalProps) => {
  const { visible, children, onDismiss, sheetHeight, onConfirm } = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => {
    return createElement(BottomSheetBackdrop, {
      ...props,
      appearsOnIndex: 0,
      disappearsOnIndex: -1,
    });
  }, []);

  useEffect(() => {
    if (visible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [visible]);

  return (
    <Portal>
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          onDismiss={onDismiss}
          backdropComponent={renderBackdrop}
          snapPoints={sheetHeight ? [sheetHeight] : [600]}
        >
          <BottomSheetView style={styles.contentContainer}>{children}</BottomSheetView>
          <TouchableOpacity
            style={{ width: '100%', paddingHorizontal: 40, bottom: 40 }}
            onPress={onConfirm}
          >
            <View
              style={{
                backgroundColor: '#3D56F0',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                borderRadius: 30,
                bottom: 25,
              }}
            >
              <Text style={{ color: 'white', marginLeft: 10 }}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Portal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
