import express from 'express'
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index.pug', {title: 'my express app', greeting: 'Assalomu alaykum'})
})

export default router