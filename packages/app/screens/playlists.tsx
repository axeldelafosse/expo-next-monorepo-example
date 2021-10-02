import React from 'react';
import { Pressable, Button } from 'react-native';
import { Text } from 'dripsy';
import { useRouter } from 'next/router';
import { useNavigation, useLinkTo } from '@react-navigation/native';

import type { PlaylistsScreenProps } from 'app/navigation/types';

export default function PlaylistsScreen() {
  const router = useRouter();
  const navigation = useNavigation<PlaylistsScreenProps['navigation']>();
  const linkTo = useLinkTo();

  return (
    <>
      <Button
        onPress={() => {
          // no more double navigate 😎
          // this is fine only for modals on a given page
          // however, it won't work for navigating to an entirely different page
          // since this edits the URL and react-navigation state, but not next/router's state
          // as a result, it doesn't route to a new "page"
          // need to think about the best way to abstract this
          linkTo('/playlists/new');
          // router?.push({ pathname: '/playlists' }, `/playlists/new`);
        }}
        title="New playlist"
      />

      {[1, 2, 3, 4, 5].map((_, index) => (
        <Pressable
          key={index}
          onPress={() => {
            // router?.push(
            //   { pathname: '/playlists/[id]' },
            //   `/playlists/${index + 1}`,
            //   {
            //     shallow: true
            //   }
            // );
            linkTo(`/playlists/${index + 1}`);
          }}
        >
          <Text sx={{ color: 'white' }}>{`Playlist ${index + 1}`}</Text>
        </Pressable>
      ))}
    </>
  );
}
