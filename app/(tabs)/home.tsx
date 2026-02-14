import { YStack, Text, H1, Card, XStack, Button, Theme } from 'tamagui';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <YStack padding="$4" gap="$4" backgroundColor="$background">
        <H1>Welcome to OutfitFlow</H1>
        
        <Theme name="accent">
          <Card elevate bordered padding="$4" gap="$3">
            <XStack justifyContent="space-between" alignItems="center">
              <Text fontSize="$5" fontWeight="bold">
                Dashboard
              </Text>
              <Ionicons 
                name="stats-chart-outline" 
                size={24} 
                color="$color11" 
              />
            </XStack>
            <Text color="$color11">
              Gestiona tu restaurante desde aquí
            </Text>
          </Card>
        </Theme>

        <XStack gap="$3" flexWrap="wrap">
          <Theme name="accent">
            <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
              <Ionicons 
                name="receipt-outline" 
                size={32} 
                color="hsl(208, 69%, 46%)" 
              />
              <Text fontSize="$6" fontWeight="bold">24</Text>
              <Text color="$color11">Órdenes Hoy</Text>
            </Card>
          </Theme>

          <Theme name="success">
            <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
              <Ionicons 
                name="people-outline" 
                size={32} 
                color="hsl(151, 55%, 42%)" 
              />
              <Text fontSize="$6" fontWeight="bold">156</Text>
              <Text color="$color11">Clientes</Text>
            </Card>
          </Theme>
        </XStack>

        <XStack gap="$3" flexWrap="wrap">
          <Theme name="warning">
            <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
              <Ionicons 
                name="restaurant-outline" 
                size={32} 
                color="hsl(60, 54%, 47%)" 
              />
              <Text fontSize="$6" fontWeight="bold">12</Text>
              <Text color="$color11">En Cocina</Text>
            </Card>
          </Theme>

          <Card flex={1} minWidth={150} elevate bordered padding="$4" gap="$2">
            <Ionicons 
              name="checkmark-circle-outline" 
              size={32} 
              color="hsl(270, 51%, 60%)" 
            />
            <Text fontSize="$6" fontWeight="bold">32</Text>
            <Text color="$color11">Completadas</Text>
          </Card>
        </XStack>

        <Card elevate bordered padding="$4" gap="$3">
          <Text fontSize="$5" fontWeight="bold">
            Acciones Rápidas
          </Text>
          <YStack gap="$2">
            <Theme name="accent">
              <Button icon={<Ionicons name="add-circle-outline" size={20} color="white" />}>
                Nueva Orden
              </Button>
            </Theme>
            <Theme name="success">
              <Button icon={<Ionicons name="calendar-outline" size={20} color="white" />}>
                Ver Reservaciones
              </Button>
            </Theme>
            <Button 
              backgroundColor="hsl(270, 51%, 60%)"
              icon={<Ionicons name="bar-chart-outline" size={20} color="white" />}
            >
              Estadísticas
            </Button>
          </YStack>
        </Card>
      </YStack>
    </ScrollView>
  );
}
