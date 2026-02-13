import { YStack, Text, H1, Card, XStack, Button } from 'tamagui';
import { ScrollView } from 'react-native';
import { useTheme } from '../../src/core/theme/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }}>
      <YStack padding="$4" gap="$4">
        <H1>Welcome to OutfitFlow</H1>
        
        <Card elevate bordered padding="$4" gap="$3">
          <XStack justifyContent="space-between" alignItems="center">
            <Text fontSize="$5" fontWeight="bold">
              Dashboard
            </Text>
            <Ionicons 
              name="stats-chart-outline" 
              size={24} 
              color={isDark ? '#ffffff' : '#000000'} 
            />
          </XStack>
          <Text color="$gray10">
            Gestiona tu restaurante desde aquí
          </Text>
        </Card>

        <XStack gap="$3" flexWrap="wrap">
          <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
            <Ionicons 
              name="receipt-outline" 
              size={32} 
              color="#3b82f6" 
            />
            <Text fontSize="$6" fontWeight="bold">24</Text>
            <Text color="$gray10">Órdenes Hoy</Text>
          </Card>

          <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
            <Ionicons 
              name="people-outline" 
              size={32} 
              color="#10b981" 
            />
            <Text fontSize="$6" fontWeight="bold">156</Text>
            <Text color="$gray10">Clientes</Text>
          </Card>
        </XStack>

        <XStack gap="$3" flexWrap="wrap">
          <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
            <Ionicons 
              name="restaurant-outline" 
              size={32} 
              color="#f59e0b" 
            />
            <Text fontSize="$6" fontWeight="bold">12</Text>
            <Text color="$gray10">En Cocina</Text>
          </Card>

          <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
            <Ionicons 
              name="checkmark-circle-outline" 
              size={32} 
              color="#8b5cf6" 
            />
            <Text fontSize="$6" fontWeight="bold">32</Text>
            <Text color="$gray10">Completadas</Text>
          </Card>
        </XStack>

        <Card elevate bordered padding="$4" gap="$3">
          <Text fontSize="$5" fontWeight="bold">
            Acciones Rápidas
          </Text>
          <YStack gap="$2">
            <Button theme="blue" icon={<Ionicons name="add-circle-outline" size={20} />}>
              Nueva Orden
            </Button>
            <Button theme="green" icon={<Ionicons name="calendar-outline" size={20} />}>
              Ver Reservaciones
            </Button>
            <Button theme="purple" icon={<Ionicons name="bar-chart-outline" size={20} />}>
              Estadísticas
            </Button>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
