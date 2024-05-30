import { View, Text, StyleSheet, Image } from 'react-native';
function Subtitle({ subtitleName }) {
  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subtitleName}</Text>
      </View>
    </>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
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
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
