import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getName = async (req: Request, res: Response) => {
    try {
        const name = await prisma.name.findFirst({
            orderBy: {
                createdAt: 'desc'
            }, 
            select: {
                name: true,
            }
        });

        if (name) {
            return res.status(200).json({name})
        } else {
            return res.status(404).send("No name is DB")
        }
        

    } catch (error) {
        return res.status(404).send("Error with DB")
    }
}

const postName = async (req: Request, res: Response) => {    
    const { name } = req.body

    try {
        const newName = await prisma.name.create({
            data: {
                name
            },
            select: {
                name: true
            }
        })

        res.status(201).json({message: "Successfully added Name", name: newName.name})

    } catch (error) {
        return res.status(404).send("Unable to add Name")
    }
}

export { getName, postName }
