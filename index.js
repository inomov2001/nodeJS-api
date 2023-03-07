import express from 'express'
import books from './routes/books.js'
import home from './routes/home.js'
const app = express()

app.use('/api/books', books)
app.use('/home', home)

app.set( 'views engine', 'pug')

const port = process.env.Port || 5001

app.listen(port, ()=> {
    console.log(`${port} eshitishni boshladik`)
})
























    // import express  from 'express'
    // import Get from './express.js'
    // let app = express()
    // app.use(express.json())
    // app.use(Get)
    
    // app.listen(8000, () => {
    //     console.log("8000 - port ishga tushdi");
    // })
    
    
    
    // import log from './logger.js'
    // import autent from './auth.js'
    // import helmet from 'helmet'
    // import morgan from 'morgan'
    // import config from 'config'
    
    // app.use(morgan('tiny'))
    // app.use(express.json())
    // app.use(express.urlencoded({extended: true}))
    // app.use(express.static('public'))
    // app.use(helmet())
    // app.use(log)
    // app.use(autent)
    
    
    // if (app.get('env') === 'development'){
    //     app.use(morgan('tiny'))
    //     console.log('logger ishladi');
    // } 
    
    
    // console.log(config.get('name'))
    // console.log(config.get('mailserver.host'))
    // console.log(config.get('mailserver.password'))
    
    
    
    // console.log(process.env.NODE_ENV)
    // console.log(app.get('env'))
    
    
    
    // console.log(config.get('name'))
    // console.log(config.get('mailserver.password'))
    // console.log(config.get('mailserver.host'))
