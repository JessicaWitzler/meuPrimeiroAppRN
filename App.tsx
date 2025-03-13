import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Que flor é esta?</Text>
      <StatusBar style="auto" />
      <MinhaImagem/>
      <EntradaDeTexto/>
    </View>
  );
}

import { Image } from 'react-native';
const MinhaImagem = () => {
  return <Image source={{ uri: 'https://uploads.leouve.com.br/2024/09/wMMbhFGC-lirio-do-vale-2.webp' }} style={{ width: 200, height: 200 }} />;
};

const EntradaDeTexto = () => {
  return <TextInput placeholder="Responda a pergunta: " style={{ borderWidth: 1, padding: 5, margin: 10}} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADC27AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    color: '#EDEDEDFF',
    fontSize: 50,
    textAlign: 'center',
    margin: 10
  },

});
