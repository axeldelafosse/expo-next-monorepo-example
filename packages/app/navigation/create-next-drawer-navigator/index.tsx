// https://reactnavigation.org/docs/custom-navigators/#type-checking-navigators
// forked from https://github.com/react-navigation/react-navigation/blob/e947943ace33086405210e9454329be47d76478f/packages/drawer/src/navigators/createDrawerNavigator.tsx

import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  DrawerNavigationState,
  DrawerRouterOptions
} from '@react-navigation/native'
import { useRouter } from 'next/router'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'
import {
  DrawerNavigationOptions,
  DrawerNavigationEventMap,
  DrawerNavigationConfig,
  DrawerDescriptorMap,
  DrawerNavigationHelpers
} from '@react-navigation/drawer/lib/typescript/src/types'
import { Children, useCallback, cloneElement } from 'react'

const { Navigator } = createDrawerNavigator()

type Props = DefaultNavigatorOptions<
  ParamListBase,
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap
> &
  DrawerRouterOptions &
  DrawerNavigationConfig & {
    Component?: React.ComponentType<any>
    pageProps?: any
  }

import {
  CommonActions,
  DrawerActions,
  useLinkBuilder
} from '@react-navigation/native'
import { useBuildLink } from '../build-link'
/**
 * Component that renders the navigation list in the drawer.
 *
 * Forked from https://github.com/react-navigation/react-navigation/blob/e947943ace33086405210e9454329be47d76478f/packages/drawer/src/views/DrawerItemList.tsx#L22
 */
export function DrawerItemList({
  state,
  navigation,
  descriptors
}: {
  state: DrawerNavigationState<ParamListBase>
  navigation: DrawerNavigationHelpers
  descriptors: DrawerDescriptorMap
}) {
  const buildLink = useBuildLink()
  // const buildLink = useLinkBuilder()
  const nextRouter = useRouter()

  const focusedRoute = state.routes[state.index]
  const focusedDescriptor = descriptors[focusedRoute.key]
  const focusedOptions = focusedDescriptor.options

  const {
    drawerActiveTintColor,
    drawerInactiveTintColor,
    drawerActiveBackgroundColor,
    drawerInactiveBackgroundColor
  } = focusedOptions

  return state.routes.map((route, i) => {
    const focused = i === state.index
    const {
      title,
      drawerLabel,
      drawerIcon,
      drawerLabelStyle,
      drawerItemStyle
    } = descriptors[route.key].options

    const to = buildLink(
      navigation,
      route.name
      // TODO should we include this?
      // if you click the tabs many times, it results in weird URLs...
      // I thought it would help preserve the tab's nested stack state
      // but it doesn't
      //   route.params
    )

    return (
      <DrawerItem
        key={route.key}
        label={
          drawerLabel !== undefined
            ? drawerLabel
            : title !== undefined
            ? title
            : route.name
        }
        icon={drawerIcon}
        focused={focused}
        activeTintColor={drawerActiveTintColor}
        inactiveTintColor={drawerInactiveTintColor}
        activeBackgroundColor={drawerActiveBackgroundColor}
        inactiveBackgroundColor={drawerInactiveBackgroundColor}
        labelStyle={drawerLabelStyle}
        style={drawerItemStyle}
        to={to}
        onPress={() => {
          if (nextRouter && to) {
            if (focused) {
              navigation.dispatch(DrawerActions.closeDrawer())
            }
            nextRouter.push(to)
          } else {
            navigation.dispatch({
              ...(focused
                ? DrawerActions.closeDrawer()
                : CommonActions.navigate({ name: route.name, merge: true })),
              target: state.key
            })
          }
        }}
      />
    )
  }) as React.ReactNode as React.ReactElement
}

function DrawerNavigator({
  children,
  Component,
  pageProps = {},
  ...props
}: Props) {
  const nextRouter = useRouter()

  const nextComponentChild = useCallback(
    (props) => {
      return Component && <Component {...pageProps} {...props} />
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Component, pageProps]
  )

  return (
    <Navigator
      {...props}
      drawerContent={function Content(props) {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        )
      }}
    >
      {Children.map(children, (child) => {
        if (nextRouter && Component) {
          return cloneElement(child as any, {
            component: undefined,
            getComponent: undefined,
            children: nextComponentChild
          })
        }

        return child
      })}
    </Navigator>
  )
}

export const createNextDrawerNavigator = createNavigatorFactory<
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap,
  typeof DrawerNavigator
>(DrawerNavigator)
