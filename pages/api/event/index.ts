import prisma from '../../../lib/prisma';

// POST /api/event
export default async function handle(req, res) {
  const { album, host, ingredient, eventDate } = req.body;

  const result = await prisma.event.create({
    data: {
      album: album,
      host: host,
      ingredient: ingredient,
      eventDate: new Date(eventDate),
    },
  });
  res.json(result);
}