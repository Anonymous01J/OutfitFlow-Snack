import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme as useTamaguiTheme } from 'tamagui';

export default function TabLayout() {
  const theme = useTamaguiTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accent9.val,
        tabBarInactiveTintColor: theme.color9.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="kitchen"
        options={{
          title: 'Kitchen',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
