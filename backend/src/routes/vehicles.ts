import { Router } from 'express';
import prisma from '../utils/prisma';

const router = Router();

// GET all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany({
      include: {
        organization: true,
      },
    });
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
});

export default router;
