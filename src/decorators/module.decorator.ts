import 'reflect-metadata'
import { Express } from 'express'

type ModuleDecoratorOptions = {
    controllers: any[],
    app: Express
}

export function Module(options?: ModuleDecoratorOptions) {
    return (target: Object) => {
        target.constructor.prototype.app = options.app as Express
        options.controllers.forEach(controller => {
            const prefix = Reflect.getMetadata('prefix', controller)
            const router = Reflect.getMetadata('router', controller)
            target.constructor.prototype.app.use(`/${prefix}`, router)
        });
    }
}