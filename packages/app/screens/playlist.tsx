import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'dripsy';

import { createParam } from 'app/navigation/use-param';
import type { PlaylistScreenProps } from 'app/navigation/types';

type Query = {
  id: string;
};

const { useParam } = createParam<Query>();

export default function PlaylistScreen({
  navigation,
  route
}: PlaylistScreenProps) {
  const [id, setId] = useParam('id');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Text sx={{ color: 'white' }}>Playlist {id}</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
