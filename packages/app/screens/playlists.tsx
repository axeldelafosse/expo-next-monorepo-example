import React from 'react'
import { Pressable, Button } from 'react-native'
import { Text } from 'dripsy'

import { useRouter } from 'app/navigation/use-router'

export default function PlaylistsScreen() {
  const router = useRouter()

  return (
    <>
      <Button
        onPress={() => {
          router.push(`/playlists/new`)
        }}
        title="New playlist"
      />

      {[1, 2, 3, 4, 5].map((_, index) => (
        <Pressable
          key={index}
          onPress={() => {
            router.push(`/playlists/${index + 1}`)
          }}
        >
          <Text sx={{ color: 'white' }}>{`Playlist ${index + 1}`}</Text>
        </Pressable>
      ))}
    </>
  )
}
