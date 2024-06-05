import MealList from '../components/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

function FavoritesScreen() {
  //const FaveContext = useContext(FavoritesContext);
  const favoritesMealsIds = useSelector((state) => {
    return state.favoriteMeals.ids;
  });

  const favoritesMeals = MEALS.filter((meal) =>
    favoritesMealsIds.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}> You have no favorites meals yet.</Text>
      </View>
    );
  }

  return (
    <>
      <MealList items={favoritesMeals} />
    </>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
