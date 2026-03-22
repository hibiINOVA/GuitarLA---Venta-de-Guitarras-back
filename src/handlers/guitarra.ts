import { Request, Response } from "express";
import Guitarra from "../models/Guitarra.model";

export const getGuitarras = async (req: Request, res: Response) => {
    try {
        const guitarras = await Guitarra.findAll({
            order: [['precio', 'DESC']],
        })
        res.json({ data: guitarras })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarraById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const guitarra = await Guitarra.findByPk(id)
        if (!guitarra) {
            return res.status(404).json({ error: 'Guitarra no encontrada' })
        }
        res.json({ data: guitarra })
    } catch (error) {
        console.log(error);
    }
}

export const createGuitarra = async (req: Request, res: Response) => {
    try {
        const guitarra = await Guitarra.create(req.body)
        res.json({ data: guitarra })
    } catch (error) {
        console.log(error);
    }
}

export const updateGuitarra = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const guitarra = await Guitarra.findByPk(id)
        if (!guitarra) {
            return res.status(404).json({ error: 'Guitarra no encontrada' })
        }
        await guitarra.update(req.body)
        await guitarra.save()
        res.json({ data: guitarra })
    } catch (error) {
        console.log(error);
    }
}

export const deleteGuitarra = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params
        const guitarra = await Guitarra.findByPk(id)
        if (!guitarra) {
            return res.status(404).json({ error: 'Guitarra no encontrada' })
        }
        await guitarra.destroy()
        res.json({ data: 'Guitarra eliminada' })
    } catch (error) {
        console.log(error);
    }
}