import 'reflect-metadata'

export function Get(path?: string) {
    return (target: Object, propertyKey: string | symbol) => {
        const routes = Reflect.getMetadata('routes', target.constructor)
        const newPath = (!path) ? '' : path
        const route = {
            path: newPath,
            method: 'get',
            handler: target[propertyKey]
        }
        Reflect.defineMetadata('routes', routes ? [...routes, route] : [route], target.constructor)
    }
}

export function Post(path?: string) {
    return (target: Object, propertyKey: string | symbol) => {
        const routes = Reflect.getMetadata('routes', target.constructor)
        const newPath = (!path) ? '' : path
        const route = {
            path: newPath,
            method: 'post',
            handler: target[propertyKey]
        }
        Reflect.defineMetadata('routes', routes ? [...routes, route] : [route], target.constructor)
    }
}

export function Patch(path?: string) {
    return (target: Object, propertyKey: string | symbol) => {
        const routes = Reflect.getMetadata('routes', target.constructor)
        const newPath = (!path) ? '' : path
        const route = {
            path: newPath,
            method: 'patch',
            handler: target[propertyKey]
        }
        Reflect.defineMetadata('routes', routes ? [...routes, route] : [route], target.constructor)
    }
}

export function Put(path?: string) {
    return (target: Object, propertyKey: string | symbol) => {
        const routes = Reflect.getMetadata('routes', target.constructor)
        const newPath = (!path) ? '' : path
        const route = {
            path: newPath,
            method: 'put',
            handler: target[propertyKey]
        }
        Reflect.defineMetadata('routes', routes ? [...routes, route] : [route], target.constructor)
    }
}

export function Delete(path?: string) {
    return (target: Object, propertyKey: string | symbol) => {
        const routes = Reflect.getMetadata('routes', target.constructor)
        const newPath = (!path) ? '' : path
        const route = {
            path: newPath,
            method: 'delete',
            handler: target[propertyKey]
        }
        Reflect.defineMetadata('routes', routes ? [...routes, route] : [route], target.constructor)
    }
}