import { Card as TamaguiCard, CardProps } from 'tamagui';
import { useTheme } from '../../core/theme/ThemeProvider';

interface CustomCardProps extends CardProps {
  elevated?: boolean;
}

export const Card = ({ elevated = true, children, ...props }: CustomCardProps) => {
  const { isDark } = useTheme();

  return (
    <TamaguiCard
      elevate={elevated}
      bordered
      backgroundColor={isDark ? '#2a2a2a' : '#ffffff'}
      borderColor={isDark ? '#404040' : '#e0e0e0'}
      {...props}
    >
      {children}
    </TamaguiCard>
  );
};
