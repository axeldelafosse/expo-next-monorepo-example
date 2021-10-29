import { useCallback } from 'react'
import { useRouter as useNextRouter, NextRouter } from 'next/router'
import { useLinkTo, useNavigation } from '@react-navigation/native'

const path = (from: Parameters<ReturnType<typeof useRouter>['push']>[0]) => {
  let path = (typeof from == 'string' ? from : from.pathname) || ''

  // replace each instance of [key] with the corresponding value from query[key]
  // this ensures we're navigating to the correct URL
  // it currently ignores [...param]
  // but I can't see why you would use this with RN + Next.js
  if (typeof from == 'object' && from.query && typeof from.query == 'object') {
    for (const key in from.query) {
      if (from.query[key] != null) {
        path = path.replace(`[${key}]`, `${from.query[key]}`)
      }
    }
  }

  return path
}

export function useRouter() {
  const linkTo = useLinkTo()
  const router = useNextRouter()
  const navigation = useNavigation()

  return {
    push: useCallback(
      (...nextProps: Parameters<NextRouter['push']>) => {
        if (router) {
          router.push(...nextProps)
        } else {
          const [url, as] = nextProps

          const to = as ? path(as) : path(url)

          if (to) {
            linkTo(to)
          }
        }
      },
      [linkTo, router]
    ),
    replace: useCallback(
      (...nextProps: Parameters<NextRouter['replace']>) => {
        if (router) {
          router.replace(...nextProps)
        } else {
          const [url, as] = nextProps

          const to = as ? path(as) : path(url)

          if (to) {
            linkTo(to)
          }
        }
      },
      [linkTo, router]
    ),
    back: useCallback(
      (...nextProps: Parameters<NextRouter['back']>) => {
        if (router) {
          router.back(...nextProps)
        } else {
          navigation.goBack()
        }
      },
      [router, navigation]
    )
  }
}
