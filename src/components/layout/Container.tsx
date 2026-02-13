import { YStack, YStackProps } from 'tamagui';
import { useTheme } from '../../core/theme/ThemeProvider';
import { ScrollView } from 'react-native';

interface ContainerProps extends YStackProps {
  scrollable?: boolean;
}

export const Container = ({ 
  children, 
  scrollable = false, 
  ...props 
}: ContainerProps) => {
  const { isDark } = useTheme();

  const content = (
    <YStack
      flex={1}
      backgroundColor={isDark ? '#1a1a1a' : '#ffffff'}
      padding="$4"
      {...props}
    >
      {children}
    </YStack>
  );

  if (scrollable) {
    return (
      <ScrollView 
        style={{ 
          flex: 1, 
          backgroundColor: isDark ? '#1a1a1a' : '#ffffff' 
        }}
      >
        {content}
      </ScrollView>
    );
  }

  return content;
};
