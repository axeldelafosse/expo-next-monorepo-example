// https://reactnavigation.org/docs/custom-navigators/#type-checking-navigators

import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  TabActionHelpers,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder
} from '@react-navigation/native'
import { useRouter } from 'next/router'
import { BottomTabView } from '@react-navigation/bottom-tabs'
import {
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
  BottomTabNavigationConfig
} from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { useBuildLink } from './build-link'

type Props = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap
> &
  TabRouterOptions &
  BottomTabNavigationConfig

function BottomTabNavigator({
  initialRouteName,
  backBehavior,
  children,
  screenListeners,
  screenOptions,
  sceneContainerStyle,
  ...restWithDeprecated
}: Props) {
  const {
    // @ts-expect-error: lazy is deprecated
    lazy,
    // @ts-expect-error: tabBarOptions is deprecated
    tabBarOptions,
    ...rest
  } = restWithDeprecated

  let defaultScreenOptions: BottomTabNavigationOptions = {}

  if (tabBarOptions) {
    Object.assign(defaultScreenOptions, {
      tabBarHideOnKeyboard: tabBarOptions.keyboardHidesTabBar,
      tabBarActiveTintColor: tabBarOptions.activeTintColor,
      tabBarInactiveTintColor: tabBarOptions.inactiveTintColor,
      tabBarActiveBackgroundColor: tabBarOptions.activeBackgroundColor,
      tabBarInactiveBackgroundColor: tabBarOptions.inactiveBackgroundColor,
      tabBarAllowFontScaling: tabBarOptions.allowFontScaling,
      tabBarShowLabel: tabBarOptions.showLabel,
      tabBarLabelStyle: tabBarOptions.labelStyle,
      tabBarIconStyle: tabBarOptions.iconStyle,
      tabBarItemStyle: tabBarOptions.tabStyle,
      tabBarLabelPosition:
        tabBarOptions.labelPosition ??
        (tabBarOptions.adaptive === false ? 'below-icon' : undefined),
      tabBarStyle: [
        { display: tabBarOptions.tabBarVisible ? 'none' : 'flex' },
        defaultScreenOptions.tabBarStyle
      ]
    })
  }

  ;(
    Object.keys(defaultScreenOptions) as (keyof BottomTabNavigationOptions)[]
  ).forEach((key) => {
    if (defaultScreenOptions[key] === undefined) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete defaultScreenOptions[key]
    }
  })
  const nextRouter = useRouter()
  const buildLink = useBuildLink()

  const { state, descriptors, navigation, NavigationContent } =
    useNavigationBuilder<
      TabNavigationState<ParamListBase>,
      TabRouterOptions,
      TabActionHelpers<ParamListBase>,
      BottomTabNavigationOptions,
      BottomTabNavigationEventMap
    >(TabRouter, {
      initialRouteName,
      backBehavior,
      children,
      screenListeners: ({ navigation, route }) => ({
        ...screenListeners,
        tabPress(e) {
          if (!e.defaultPrevented && nextRouter) {
            e.preventDefault()
            const linkTo = buildLink(navigation, route.name)

            nextRouter.push(linkTo)
          }
        }
      }),
      screenOptions,
      defaultScreenOptions
    })

  return (
    <NavigationContent>
      <BottomTabView
        {...rest}
        state={state}
        navigation={navigation}
        descriptors={descriptors}
        sceneContainerStyle={sceneContainerStyle}
      />
    </NavigationContent>
  )
}

export const createNextBottomTabs = createNavigatorFactory<
  TabNavigationState<ParamListBase>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
  typeof BottomTabNavigator
>(BottomTabNavigator)
