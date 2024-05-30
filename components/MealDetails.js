import { View, Text, StyleSheet, Image } from 'react-native';

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <>
      <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
        <Text style={[styles.detailItem, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailItem, textStyle]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4,
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
});
