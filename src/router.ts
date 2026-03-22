import { Router } from 'express'
import {
    createGuitarra,
    getGuitarras,
    getGuitarraById,
    updateGuitarra,
    deleteGuitarra
} from './handlers/guitarra'
import { body, param } from 'express-validator'
import { handlerInputErrors } from './middleware'

const router = Router()

router.get('/', getGuitarras)

router.get('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handlerInputErrors,
    getGuitarraById
)

router.post('/',
    body('nombre')
        .notEmpty().withMessage('El nombre de la guitarra no puede ir vacio'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion no puede ir vacia'),
    body('precio')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no valido, menor a 0'),
    body('img')
        .notEmpty().withMessage('La imagen no puede ir vacia'),
    handlerInputErrors,
    createGuitarra
)

router.put('/:id',
    param('id').isInt().withMessage('ID no valido'),
    body('nombre')
        .notEmpty().withMessage('El nombre de la guitarra no puede ir vacio'),
    body('descripcion')
        .notEmpty().withMessage('La descripcion no puede ir vacia'),
    body('precio')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no valido, menor a 0'),
    body('img')
        .notEmpty().withMessage('La imagen no puede ir vacia'),
    handlerInputErrors,
    updateGuitarra
)

router.delete('/:id',
    param('id').isInt().withMessage('ID no valido'),
    handlerInputErrors,
    deleteGuitarra
)

export default router