import { YStack, Text, H2, Card, XStack, Button, Badge } from 'tamagui';
import { ScrollView } from 'react-native';
import { useTheme } from '../../src/core/theme/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface Order {
  id: string;
  table: string;
  items: string[];
  status: 'pending' | 'preparing' | 'ready';
  time: string;
}

const mockOrders: Order[] = [
  {
    id: '1',
    table: 'Mesa 5',
    items: ['Pizza Margherita', 'Ensalada César', 'Limonada x2'],
    status: 'pending',
    time: '10:30 AM',
  },
  {
    id: '2',
    table: 'Mesa 12',
    items: ['Pasta Carbonara', 'Vino Tinto'],
    status: 'preparing',
    time: '10:45 AM',
  },
  {
    id: '3',
    table: 'Mesa 3',
    items: ['Hamburguesa Doble', 'Papas Fritas', 'Coca-Cola'],
    status: 'ready',
    time: '11:00 AM',
  },
];

export default function KitchenScreen() {
  const { isDark } = useTheme();
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return '#f59e0b';
      case 'preparing':
        return '#3b82f6';
      case 'ready':
        return '#10b981';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'preparing':
        return 'Preparando';
      case 'ready':
        return 'Lista';
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: isDark ? '#1a1a1a' : '#ffffff' }}>
      <YStack padding="$4" gap="$4">
        <XStack justifyContent="space-between" alignItems="center">
          <H2>Órdenes en Cocina</H2>
          <Badge backgroundColor="$red10" color="white" size="$3">
            {orders.filter((o) => o.status === 'pending').length} pendientes
          </Badge>
        </XStack>

        {orders.map((order) => (
          <Card key={order.id} elevate bordered padding="$4" gap="$3">
            <XStack justifyContent="space-between" alignItems="center">
              <XStack gap="$2" alignItems="center">
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={isDark ? '#ffffff' : '#000000'}
                />
                <Text fontSize="$5" fontWeight="bold">
                  {order.table}
                </Text>
              </XStack>
              <XStack gap="$2" alignItems="center">
                <Ionicons name="time-outline" size={16} color="$gray10" />
                <Text fontSize="$3" color="$gray10">
                  {order.time}
                </Text>
              </XStack>
            </XStack>

            <YStack gap="$1">
              {order.items.map((item, idx) => (
                <XStack key={idx} gap="$2" alignItems="center">
                  <Ionicons name="ellipse" size={8} color="$gray10" />
                  <Text>{item}</Text>
                </XStack>
              ))}
            </YStack>

            <XStack justifyContent="space-between" alignItems="center">
              <Badge backgroundColor={getStatusColor(order.status)} color="white">
                {getStatusText(order.status)}
              </Badge>

              <XStack gap="$2">
                {order.status === 'pending' && (
                  <Button
                    size="$3"
                    theme="blue"
                    onPress={() => updateOrderStatus(order.id, 'preparing')}
                  >
                    Iniciar
                  </Button>
                )}
                {order.status === 'preparing' && (
                  <Button
                    size="$3"
                    theme="green"
                    onPress={() => updateOrderStatus(order.id, 'ready')}
                  >
                    Completar
                  </Button>
                )}
                {order.status === 'ready' && (
                  <Button
                    size="$3"
                    theme="gray"
                    icon={<Ionicons name="checkmark-circle" size={16} />}
                  >
                    Entregada
                  </Button>
                )}
              </XStack>
            </XStack>
          </Card>
        ))}

        {orders.length === 0 && (
          <Card elevate bordered padding="$6" alignItems="center" gap="$3">
            <Ionicons
              name="checkmark-done-circle-outline"
              size={64}
              color="$gray10"
            />
            <Text fontSize="$5" color="$gray10">
              No hay órdenes pendientes
            </Text>
          </Card>
        )}
      </YStack>
    </ScrollView>
  );
}
