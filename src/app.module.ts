import { Module } from './decorators/module.decorator'
import express from 'express'

export const app = express()

@Module({
    controllers: [],
    app,
})
export class AppModule { }