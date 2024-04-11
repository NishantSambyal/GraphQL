import * as Component from '../../screens';
import { RootStackProps } from './types';

export interface RoutesItem<T extends RootStackProps> {
  name: keyof T;
  component: T[keyof T];
}

export const SCREENS: RootStackProps = {
  Home: 'Home',
};

export const authenticatedStackRoutes: RoutesItem<RootStackProps>[] = [
  {
    name: SCREENS.Home,
    component: Component.Home,
  },
];
