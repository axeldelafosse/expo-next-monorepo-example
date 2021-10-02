import React from 'react';
import { Pressable, Button } from 'react-native';
import { Text } from 'dripsy';
import { useLink } from '../navigation/use-link';

export default function PlaylistsScreen() {
  const { link } = useLink();

  return (
    <>
      <Button
        onPress={() => {
          link('/playlists/new');
        }}
        title="New playlist"
      />

      {[1, 2, 3, 4, 5].map((_, index) => (
        <Pressable
          key={index}
          onPress={() => {
            link(`/playlists/${index + 1}`);
          }}
        >
          <Text sx={{ color: 'white' }}>{`Playlist ${index + 1}`}</Text>
        </Pressable>
      ))}
    </>
  );
}
