import {Router} from 'express'
import { createProduct } from './handlers/product'
import { body } from 'express-validator'
import { handlerInputErrors } from './middleware'
const router = Router()
router.get('/', (req,res)=>{
    res.json('Hola desde Get en puerto 4000')
})
//este
router.post('/',
    body('name')
        .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no Valido')
        .notEmpty().withMessage('El precio del producto no puede ir vacio')
        .custom(value => value>0).withMessage('Precio no valido menor a 0'),
    handlerInputErrors,
    createProduct)

router.put('/', (req,res)=>{
    res.json('Hola desde Put en puerto 4000')
})
router.patch('/', (req,res)=>{
    res.json('Hola desde Patch en puerto 4000')
})
router.delete('/', (req,res)=>{
    res.json('Hola desde Delete en puerto 4000')
})
export default router