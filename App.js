import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./pages/WelcomeScreen";
import LoginScreen from "./pages/LoginScreen";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import Events from "./pages/Events";
import Businesses from "./pages/Businesses";
import ImageGallery from "./pages/ImageGallery";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome Screen" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "LoginScreen" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Students"
          component={Students}
          options={{ title: "Students" }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{ title: "Events" }}
        />
        <Stack.Screen
          name="Businesses"
          component={Businesses}
          options={{ title: "Businesses" }}
        />
        <Stack.Screen
          name="Gallery"
          component={ImageGallery}
          options={{ title: "Gallery" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
