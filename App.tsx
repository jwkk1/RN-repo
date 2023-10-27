import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Store } from '@/store/store';
import Navigator from '@/router/Navigator';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />
        <Navigator></Navigator>
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
