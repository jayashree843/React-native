import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Cameras = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
      }
    });
  };

  return (
    <View>
      <Button title="Pick Image" onPress={handleImagePicker} />
      {selectedImage && (
        <View>
          <Text>Selected Image:</Text>
          <Image
            source={selectedImage}
            style={{ width: 300, height: 300 }}
          />
        </View>
      )}
    </View>
  );
};

export default Cameras;