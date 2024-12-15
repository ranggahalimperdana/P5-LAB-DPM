   // src/screens/HomeScreen.js
   import React from 'react';
   import { View, Text, Button, Image, StyleSheet } from 'react-native';

   const HomeScreen = ({ navigation }) => {
     return (
       <View style={styles.container}>
         <Text style={styles.title}>Home Screen</Text>
         <Image
           source={{ uri: 'https://example.com/your-image-url.jpg' }} // Ganti dengan URL gambar yang valid
           style={styles.image}
         />
         <Button
           title="Go to Details"
           onPress={() => navigation.navigate('Detail')}
         />
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     title: {
       fontSize: 24,
       marginBottom: 20,
     },
     image: {
       width: 200,
       height: 200,
       marginBottom: 20,
     },
   });

   export default HomeScreen;
