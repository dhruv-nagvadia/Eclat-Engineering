import { View, Button, Image, NativeModules, FlatList } from 'react-native';
import React, { useState } from 'react';

const { CameraModule } = NativeModules;

const NativeCamera = () => {
    const [imageUris, setImageUris] = useState([]); 

    const handleCapture = async () => {
        try {
            const uri = await CameraModule.ShowCamera(); 

            setImageUris((prevUris) => [...prevUris, uri]); 
        } catch (error) {
            console.error("Error capturing image:", error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,marginTop:50 }}>
            <Button title="Take Photo" onPress={handleCapture} />

            <FlatList
                data={imageUris}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} 
                renderItem={({ item }) => (
                    <Image 
                        source={{ uri: item }} 
                        style={{ width: 100, height: 100, margin: 5 }} 
                    />
                )}
            />
        </View>
    );
};

export default NativeCamera;
