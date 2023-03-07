// import { Router }  from 'express'
// import { readFileSync, writeFileSync } from 'fs'
// import path from 'path'

// const app = Router()


// const Get = app.post('/user', (req, res)=>{
//     let { userName } =  req.body
//     let users = readFileSync(path.resolve('database', "user.json"), "utf-8")
//     users = JSON.parse(users)
//     let newuser= {
//         userName
//     }
//     users.push(newuser)
//     writeFileSync(path.resolve('database', 'user' + '.json'), JSON.stringify(users, null, 4))
//     res.status(201).send(users)
// })

// export default Get


