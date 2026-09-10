import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap : Adel Zamalya</Text>
      <Text>TTl : Kuningan, 11 Januari 2007</Text>
      <Text>Nama Lengkap : Adel Zamalya</Text>
      <Text>Cita- Cita : Hacker Handal</Text>
      <Text>Rencana Hidup : Bismillah orang Have</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
