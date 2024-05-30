import { View, FlatList, StyleSheet, Text } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeal = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMeal(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return (
      <>
        <MealItem {...mealItemProps} />
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
