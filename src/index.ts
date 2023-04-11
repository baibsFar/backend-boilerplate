import { AppModule } from './app.module'
import { app } from './app.module'
import http from 'http'
import dotenv from 'dotenv'

dotenv.config()

function bootstrap() {
    new AppModule()
    http.createServer(app)
        .listen(+process.env.PORT, () => console.log(`Server listen on http://${process.env.HOST}:${process.env.PORT}`))
}

bootstrap()