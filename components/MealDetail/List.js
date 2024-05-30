import { View, Text, StyleSheet, Image } from 'react-native';

function List({ selectedMeal }) {
  return (
    <>
      {selectedMeal.map((mealItem) => (
        <View key={mealItem} style={styles.listItem}>
          <Text style={styles.itemText}> {mealItem}</Text>
        </View>
      ))}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#352401',
    textAlign: 'center',
  },
});
