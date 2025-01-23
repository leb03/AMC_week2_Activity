import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const Activiy1 = () => {
  return (
    <ScrollView>
      <Text>Jason Lebicot</Text>
      <View>
        <Text>BSIT302</Text>
        <Image
          source={{
            uri: 'https://pixnio.com/free-images/2017/09/26/2017-09-26-07-22-55.jpg',
          }}
          style={{width: 200, height: 200,
          justifyContent:'center',
          alignItems: 'center',
          }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="hi, i am a student in GRC"
      />
    </ScrollView>
  );
};

export default Activiy1;