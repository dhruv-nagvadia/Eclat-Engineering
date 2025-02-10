/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/babel.config`; params?: Router.UnknownInputParams; } | { pathname: `/Calculator`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/ProfileCards`; params?: Router.UnknownInputParams; } | { pathname: `/responsive`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/babel.config`; params?: Router.UnknownOutputParams; } | { pathname: `/Calculator`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/ProfileCards`; params?: Router.UnknownOutputParams; } | { pathname: `/responsive`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/babel.config${`?${string}` | `#${string}` | ''}` | `/Calculator${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/ProfileCards${`?${string}` | `#${string}` | ''}` | `/responsive${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/babel.config`; params?: Router.UnknownInputParams; } | { pathname: `/Calculator`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/ProfileCards`; params?: Router.UnknownInputParams; } | { pathname: `/responsive`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
