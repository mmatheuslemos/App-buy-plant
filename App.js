import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import COLORS from './const/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor={Colors.white}/>
        <Stack.Navigator screenOptions={{header: ()=>null}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
