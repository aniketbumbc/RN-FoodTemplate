import { View, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function MealDetailsScreen() {
  const route = useRoute();
  const titleScreen = route.params.title;
  const mealId = route.params.mealId;

  return (
    <>
      <View>
        <Text>
          Welcome to meal detail screen from {titleScreen} and {mealId}{' '}
        </Text>
      </View>
    </>
  );
}

export default MealDetailsScreen;
