import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
    const result = await prisma.event.delete({
        where: {id: Number(req.query?.id)},
      })
      res.json(result)
}