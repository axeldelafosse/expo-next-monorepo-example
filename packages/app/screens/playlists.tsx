import React from 'react';
import { Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'dripsy';
import { useRouter } from 'next/router';
import { useNavigation } from '@react-navigation/native';

import type { PlaylistsScreenProps } from 'app/navigation/types';

export default function PlaylistsScreen() {
  const router = useRouter();
  const navigation = useNavigation<PlaylistsScreenProps['navigation']>();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Pressable
            key={index}
            onPress={() => {
              router?.push(
                { pathname: '/playlist/[id]' },
                `/playlist/${index + 1}`,
                {
                  shallow: true
                }
              );
              navigation.navigate('/playlist', { id: (index + 1).toString() });
            }}
          >
            <Text sx={{ color: 'white' }}>{`Playlist ${index + 1}`}</Text>
          </Pressable>
        ))}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
