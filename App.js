import { StatusBar, SafeAreaView } from 'react-native';
import Leilao from './src/telas/Leilao';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Leilao/>
    </SafeAreaView>
  );
}

