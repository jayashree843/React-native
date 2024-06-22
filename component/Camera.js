
import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Cameras() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [capturing, setCapturing] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  async function takePicture() {
    if (capturing) return;
    setCapturing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(photo);
      console.log('Photo taken:', photo);
      await uploadImage(photo);
    } catch (error) {
      console.error('Error taking photo:', error);
    } finally {
      setCapturing(false);
    }
  }

  async function uploadImage(photo) {
    const formData = new FormData();
    formData.append('file', {
      uri: photo.uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      const response = await fetch('http://admin.turtu.in', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      console.log('Upload successful:', result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={cameraRef} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture} disabled={capturing}>
            <Text style={styles.text}>{capturing ? 'Capturing...' : 'Take Picture'}</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {capturedPhoto && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedPhoto.uri }} style={styles.previewImage} />
          <TouchableOpacity style={styles.button} onPress={() => setCapturedPhoto(null)}>
            <Text style={styles.text}>Retake Picture</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 560,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  previewContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  previewImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'black',
    color: 'black',
  },
});

/*import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

export default function Cameras() {
const [facing, setFacing] = useState('back');
const [permission, requestPermission] = useCameraPermissions();
const [capturing, setCapturing] = useState(false);
const [capturedPhoto, setCapturedPhoto] = useState(null);
const cameraRef = useRef(null);

if (!permission) {
// Camera permissions are still loading.
return <View />;
}

if (!permission.granted) {
// Camera permissions are not granted yet.
return (
<View style={styles.container}>
<Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
<Button onPress={requestPermission} title="Grant Permission" />
</View>
);
}

async function takePicture() {
if (capturing) return;
setCapturing(true);
try {
const photo = await cameraRef.current.takePictureAsync();
setCapturedPhoto(photo);
console.log('Photo taken:', photo);
} catch (error) {
console.error('Error taking photo:', error);
} finally {
setCapturing(false);
}
}

function toggleCameraFacing() {
setFacing(current => (current === 'back' ? 'front' : 'back'));
}

return (
<View style={styles.container}>
<CameraView style={styles.camera} ref={cameraRef} facing={facing}>
<View style={styles.buttonContainer}>
<TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
<Text style={styles.text}>Flip Camera</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={takePicture} disabled={capturing}>
<Text style={styles.text}>{capturing ? 'Capturing...' : 'Take Picture'}</Text>
</TouchableOpacity>
</View>
</CameraView>
{capturedPhoto && (
<View style={styles.previewContainer}>
<Image source={{ uri: capturedPhoto.uri }} style={styles.previewImage} />

  <TouchableOpacity style={styles.button} onPress={() => setCapturedPhoto(null)}>
<Text style={styles.text}>Retake Picture</Text>
</TouchableOpacity>
</View>
)}
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
},
camera: {
flex: 1,
},
buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
marginTop:560,
},
button: {
backgroundColor: 'black',
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 10,
},
text: {
fontSize: 18,
color: 'white',
},
previewContainer: {
alignItems: 'center',
marginTop: 20,
},
previewImage: {
width: 200,
height: 200,
borderRadius: 10,
marginBottom: 10,
},
btn:{
  backgroundColor:'black',
  color:'black',
}
});*/
