import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect, useContext } from 'react';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const mealId = route.params.mealId;

  const favoriteMealsContext = useContext(FavoritesContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsLiked = favoriteMealsContext.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    console.log(mealId);
    if (mealIsLiked) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsLiked ? 'star' : 'star-outline'}
            color={'white'}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
          />
        </View>
        <View style={styles.listOuter}>
          <View style={styles.listContainer}>
            <Subtitle subtitleName={'Ingredients'} />

            <List selectedMeal={selectedMeal.ingredients} />

            <Subtitle subtitleName={'Steps'} />

            <List selectedMeal={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',

    textAlign: 'center',
  },

  subtitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listContainer: {
    width: '80%',
  },
  listOuter: {
    alignItems: 'center',
  },
});
