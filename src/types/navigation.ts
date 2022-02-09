/* eslint-disable @typescript-eslint/indent */

import { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs'
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'

import { FolderItem } from '../screens/Collections/types'
import { ContentType } from './data'

export type RootStackParams = {
  'Root.Home': NavigatorScreenParams<HomeTabParams>,
  'Root.Collections'?: { path: string },
  'Root.Search': undefined,
}

export type RootStackScreenProps<
  Screen extends keyof RootStackParams,
> = StackScreenProps<RootStackParams, Screen>

export type HomeTabParams = {
  'Home.Gurbani': { id: string, type: ContentType },
  'Home.Settings': undefined,
}

export type HomeTabScreenProps<Screen extends keyof HomeTabParams> = CompositeScreenProps<
  MaterialBottomTabScreenProps<HomeTabParams, Screen>,
  RootStackScreenProps<keyof RootStackParams>
>

export type CollectionsStackParams = {
  'Collections.List': { items: FolderItem[] },
}

export type CollectionsStackScreenProps<
  Screen extends keyof CollectionsStackParams,
> = CompositeScreenProps<
  StackScreenProps<CollectionsStackParams, Screen>,
  RootStackScreenProps<keyof RootStackParams>
>
