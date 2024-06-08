/*import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { Camera } from 'expo-camera';

const Cameras = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => setCameraRef(ref)}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <Button
            title="Flip"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </Button>
        </View>
      </Camera>
    </View>
  );
};

export default Cameras;*/

import React, { useState } from 'react';
import { Button, Image, View, Platform, StyleSheet } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const Cameras = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('Image picker error: ', response.errorMessage);
    } else {
      const imageUri = response.assets && response.assets.length > 0 ? response.assets[0].uri : null;
      setSelectedImage(imageUri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <View style={styles.buttonContainer}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default Cameras;


/*import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Camera=()=>{
  const handleCameraOpen=()=>{};
  const handleGalleryOpen=()=>{};

  return(
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        sourse={require("")}
        style={styles.image}
      
      />
      <TouchableOpacity onPress={handleCameraOpen}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGalleryOpen}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Camera;*/

/*import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Camera=()=>{
  const handleCameraOpen=()=>{};
  const handleGalleryOpen=()=>{};

  return(
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        sourse={require("")}
        style={styles.image}
      
      />
      <TouchableOpacity onPress={handleCameraOpen}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGalleryOpen}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Camera;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  image:{
    width:150,
    height:150,
    borderRadius:100,
  }
})*/