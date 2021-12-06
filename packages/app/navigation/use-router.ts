import { useCallback } from 'react'
import { useRouter as useNextRouter, NextRouter } from 'next/router'
import { useLinkTo, useNavigation } from '@react-navigation/native'

const parseNextPath = (from: Parameters<NextRouter['push']>[0]) => {
  let path = (typeof from == 'string' ? from : from.pathname) || ''

  // replace each instance of [key] with the corresponding value from query[key]
  // this ensures we're navigating to the correct URL
  // it currently ignores [...param]
  // but I can't see why you would use this with RN + Next.js
  if (typeof from == 'object' && from.query && typeof from.query == 'object') {
    const query = { ...from.query }
    for (const key in query) {
      if (path.includes(`[${key}]`)) {
        path = path.replace(`[${key}]`, `${query[key] ?? ''}`)
        delete query[key]
      }
    }
    if (Object.keys(query).length) {
      path += '?'
      for (const key in query) {
        if (query[key] != null) {
          path += `${key}=${query[key]}&`
        }
      }
      if (path.endsWith('&')) {
        path = path.slice(0, -1)
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

          const to = as ? parseNextPath(as) : parseNextPath(url)

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

          const to = as ? parseNextPath(as) : parseNextPath(url)

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
