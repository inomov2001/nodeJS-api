import express from 'express'
import Joi from 'joi'
const router = express.Router()

let books = [
    {id: 1, name: "Rich dad poor dad"},
    {id: 2, name: "Good to great"},
    {id: 3, name: "The war of art"},
    {id: 4, name: "How to win friends and influence people"}
]

router.get('/', (req, res) => {
    
    let {id} =  req.params
    const book = books.find(b => b.id === parseInt(req.params.id) )
    
    if(!book){
        return res.status(404).send("Bunday id ga teng bo\'lgan kitob topilmadi...")
    }
    res.send(book) 
})




router.post('/', (req, res) => {
    const {error} = validateBook(req.body)
    if(error){
        return res.status(404).send(error.details[0].message)
    }
    
    const book = {
        id: books.length + 1,
        name: req.body.name
    }
    books.push(book)
    res.status(201).send(book)
})


router.get('/', (req, res) => {
    res.send(books)
})


router.put('/', (req, res) => {

    // kitobni bazadan izlab topish
    // agarda kitob mavjud bo'Imasa, 404 qaytarish
    const book = books.find(b => b.id === parseInt(req.params.id))
    if(!book){
        return res.status(404).send("Bunday id ga teng bo\'lgan kitob topilmadi...")
    }

    // agarda kitob topilsa, so'rovni validatsiya qilish
    // agarda so'rov validatsiyada o'tmasa, 400 qaytarish
    const {error} = validateBook(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    
    // kitobni yangilash
    book.name = req.body.name

    // yangilangan kitobni qaytarish
    res.send(book)

})

router.delete('/', (req, res) => {
    // kitobni idsi bo'yicha izlab topamiz
    // agar topilmasa 404 gaytaramiz
    const book = books.find(b => b.id === parseInt(req.params.id))
    if(!book){
        return res.status(404).send("Bunday id ga teng bo\'lgan kitob topilmadi...")
    }

    // topilsa uni o'chirib tashlaymiz
    const booksIndex = books.indexOf(book)
    books.splice(booksIndex, 1)

    // topilgan kitobni qaytarib beramiz
    res.send(book)

})


function validateBook(book){

    const bookSchema = Joi.object({name: Joi.string().required().min(3)})
    return bookSchema.validate(book)

}



export default router