import { View, FlatList, StyleSheet, Text } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverViewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  function renderMeal(itemData) {
    return (
      <>
        <MealItem title={itemData.item.title} />
      </>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={displayedMeal}
          keyExtractor={(item) => item.id}
          renderItem={renderMeal}
        />
      </View>
    </>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
