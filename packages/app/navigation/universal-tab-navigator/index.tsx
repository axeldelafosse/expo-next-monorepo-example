// https://reactnavigation.org/docs/custom-navigators/#type-checking-navigators

import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  TabNavigationState,
  TabRouterOptions
} from '@react-navigation/native'
import { useRouter } from 'next/router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
  BottomTabNavigationConfig
} from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { useBuildLink } from './build-link'

const { Navigator } = createBottomTabNavigator()

type Props = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap
> &
  TabRouterOptions &
  BottomTabNavigationConfig

function BottomTabNavigator({ screenListeners, ...props }: Props) {
  const nextRouter = useRouter()
  const buildLink = useBuildLink()

  return (
    <Navigator
      {...props}
      screenListeners={({ navigation, route }) => ({
        ...screenListeners,
        tabPress(e) {
          if (!e.defaultPrevented && nextRouter) {
            e.preventDefault()
            const linkTo = buildLink(navigation, route.name)

            nextRouter.push(linkTo)
          }
        }
      })}
    />
  )
}

export const createNextTabNavigator = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
  typeof BottomTabNavigator
>(BottomTabNavigator)
