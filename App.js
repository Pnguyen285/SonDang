import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import {Ionicons} from "@expo/vector-icons"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Đăng nhập" component={Login} options={{
          headerTransparent: true,
          headerTintColor: "white",
          headerBackVisible: true,

        }}></Stack.Screen>
        <Stack.Screen name="Đăng ký" component={Signup} options={{
          headerTransparent: true,
          headerTintColor: "white",
          headerBackVisible: true,

        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
