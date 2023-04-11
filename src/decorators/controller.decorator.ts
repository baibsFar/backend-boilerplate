import { Router } from 'express'
import 'reflect-metadata'

export function Controller(prefix?: string) {
    return (target: Function) => {
        const routes = Reflect.getMetadata('routes', target) as any[]
        const newPrefix = (!prefix) ? '' : prefix
        Reflect.defineMetadata('prefix', newPrefix, target)
        const router = Router({ caseSensitive: true })
        routes.forEach((route: { path: string, method: string, handler: () => any }) => {
            router[route.method](`/${route.path}`, route.handler)
        })
        Reflect.defineMetadata('router', router, target)
    }
}