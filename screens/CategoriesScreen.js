import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCatItem(itemData) {
    function onPressHandler() {
      navigation.navigate('Meal-Overview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={onPressHandler}
        />
      </>
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      key={'_'}
      keyExtractor={(item) => item.id}
      renderItem={renderCatItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
