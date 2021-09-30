import React from 'react';
import { Pressable, Button } from 'react-native';
import { Text } from 'dripsy';
import { useRouter } from 'next/router';
import { useNavigation } from '@react-navigation/native';

import type { PlaylistsScreenProps } from 'app/navigation/types';

export default function PlaylistsScreen() {
  const router = useRouter();
  const navigation = useNavigation<PlaylistsScreenProps['navigation']>();

  return (
    <>
      <Button
        onPress={() => {
          navigation.navigate('/playlists?modal=new-playlist');
          router?.push(
            { pathname: '/playlists' },
            `/playlists?modal=new-playlist`
          );
        }}
        title="New playlist"
      />

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
    </>
  );
}
