import React from 'react'
import { Platform, Button, useWindowDimensions } from 'react-native'
import { View, Text, TextInput } from 'dripsy'

import { useRouter } from 'app/navigation/use-router'

export default function NewPlaylistScreen() {
  const { width } = useWindowDimensions()
  const router = useRouter()

  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0.8,
          backgroundColor: 'black'
        }}
      />
      <View
        sx={{
          ...Platform.select({
            web: {
              backgroundColor: '#333',
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              justifyContent: 'space-between',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            },
            android: {
              backgroundColor: '#333',
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.26)',
              borderRadius: 3,
              justifyContent: 'space-between',
              alignSelf: 'center',
              position: 'absolute',
              top: '50%'
            },
            ios: {
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center'
            }
          }),
          height: width / 2,
          width: width / 1.5,
          maxHeight: 300,
          maxWidth: 500,
          padding: 24
        }}
      >
        <Text sx={{ color: 'white', fontWeight: 'bold' }}>New Playlist</Text>

        <TextInput
          style={[
            {
              color: 'white'
            },
            Platform.OS === 'web'
              ? {
                  // @ts-ignore
                  outlineStyle: 'none'
                }
              : null
          ]}
          placeholder="Title"
          autoFocus={true}
          accessibilityHint="The title of your playlist"
          returnKeyType="done"
          selectionColor="#7e7f81"
          placeholderTextColor="#7e7f81"
        />

        {Platform.OS !== 'ios' ? (
          <View sx={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button
              onPress={() => {
                router.back()
              }}
              title="Cancel"
            />
            <View sx={{ width: 8 }} />
            <Button
              onPress={() => {
                router.back()
              }}
              title="Create"
            />
          </View>
        ) : (
          <Button
            onPress={() => {
              router.back()
            }}
            title="Create"
          />
        )}
      </View>
    </>
  )
}
