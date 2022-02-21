/* eslint-disable @typescript-eslint/indent */

import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Folder } from '../screens/Collections/types'
import { ContentType } from './data'

export type RootStackParams = {
  'Root.Home': NavigatorScreenParams<HomeTabParams>,
  'Root.Collections'?: { path: string },
  'Root.Search': undefined,
}

export type RootStackScreenProps<
  Screen extends keyof RootStackParams,
> = NativeStackScreenProps<RootStackParams, Screen>

export type HomeTabParams = {
  'Home.Tab.Gurbani': NavigatorScreenParams<GurbaniStackParams>,
  'Home.Tab.Settings': NavigatorScreenParams<SettingsStackParams>,
}

export type HomeTabScreenProps<Screen extends keyof HomeTabParams> = CompositeScreenProps<
  MaterialBottomTabScreenProps<HomeTabParams, Screen>,
  RootStackScreenProps<keyof RootStackParams>
>

export type GurbaniStackParams = {
  'Gurbani.View': { id: string, type: ContentType },
}

export type GurbaniStackScreenProps<Screen extends keyof GurbaniStackParams> = CompositeScreenProps<
  NativeStackScreenProps<GurbaniStackParams, Screen>,
  HomeTabScreenProps<keyof HomeTabParams>
>

export type SettingsStackParams = {
  'Settings.View': undefined,
}

export type SettingsStackScreenProps<
  Screen extends keyof SettingsStackParams
> = CompositeScreenProps<
  NativeStackScreenProps<SettingsStackParams, Screen>,
  HomeTabScreenProps<keyof HomeTabParams>
>

export type CollectionsStackParams = {
  'Collections.List': Folder,
}

export type CollectionsStackScreenProps<
  Screen extends keyof CollectionsStackParams,
> = CompositeScreenProps<
  NativeStackScreenProps<CollectionsStackParams, Screen>,
  RootStackScreenProps<keyof RootStackParams>
>
