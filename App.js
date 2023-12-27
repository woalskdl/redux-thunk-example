import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CounterScreen } from './src/screens/CounterScreen';
import { createContext, useState } from 'react';
import { RecoilRoot } from 'recoil';

export const CounterContext = createContext();

export default function App() {
  const counterState = useState(0);

  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <CounterScreen/>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}