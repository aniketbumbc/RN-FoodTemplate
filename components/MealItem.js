import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({
  id,
  title,
  imageUrl,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate('Meal-Details', {
      title: title,
      mealId: id,
    });
  }

  return (
    <>
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: '#ccc' }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={onPressHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <MealDetails
              affordability={affordability}
              duration={duration}
              complexity={complexity}
            />
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
