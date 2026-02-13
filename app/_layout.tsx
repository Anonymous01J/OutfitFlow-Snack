import 'react-native-gesture-handler';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { YStack, XStack, Text, Button, TamaguiProvider } from 'tamagui';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from '../src/core/theme/ThemeProvider';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter, usePathname } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import tamaguiConfig from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

function CustomDrawerContent(props: any) {
  const { theme, toggleTheme, isDark } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DrawerContentScrollView {...props}>
      <YStack padding="$4" gap="$2">
        <XStack justifyContent="space-between" alignItems="center" marginBottom="$4">
          <Text fontSize="$6" fontWeight="bold">
            OutfitFlow
          </Text>
          <Button
            size="$3"
            circular
            icon={<Ionicons name={isDark ? 'sunny' : 'moon'} size={20} />}
            onPress={toggleTheme}
          />
        </XStack>

        <DrawerItem
          label="Home"
          icon={({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )}
          focused={pathname === '/home'}
          onPress={() => router.push('/home')}
        />

        <DrawerItem
          label="Kitchen"
          icon={({ color, size }) => (
            <Ionicons name="restaurant-outline" size={size} color={color} />
          )}
          focused={pathname === '/kitchen'}
          onPress={() => router.push('/kitchen')}
        />

        <DrawerItem
          label="Clients"
          icon={({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          )}
          focused={pathname === '/clients'}
          onPress={() => router.push('/clients')}
        />

        <DrawerItem
          label="Orders"
          icon={({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          )}
          focused={pathname === '/orders'}
          onPress={() => router.push('/orders')}
        />
      </YStack>
    </DrawerContentScrollView>
  );
}

function DrawerLayout() {
  const { isDark } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
          },
          headerStyle: {
            backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
          },
          headerTintColor: isDark ? '#ffffff' : '#000000',
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            drawerLabel: 'Main',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

function AppLayout() {
  const { theme } = useTheme();

  const [fontsLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      <DrawerLayout />
    </TamaguiProvider>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}
