import { ServerStorage } from 'client/Common/Storage';
import type { Context } from 'koa';
import type { CookieChangeOptions } from 'universal-cookie';

declare module 'koa' {
  interface Request {
    storage: ServerStorage;
  }
}

export default function storageMiddleware() {
  return (ctx: Context, next: () => void) => {
    ctx.request.storage = new ServerStorage(ctx.request.headers.cookie || '');
    ctx.request.storage.addChangeListener((change: CookieChangeOptions) => {
      if (change.value === undefined) {
        // @ts-ignore
        ctx.cookies.set(change.name, null);
      } else {
        ctx.cookies.set(change.name, change.value, change.options);
      }
    });

    return next();
  };
}