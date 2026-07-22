import { Router } from 'express';

const router = Router();

const AI_SERVICE_URL = process.env.AI_SERVICE_URL || 'http://localhost:8000';

router.post('/predict-maintenance', async (req, res) => {
  try {
    const response = await fetch(`${AI_SERVICE_URL}/predict-maintenance`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    
    if (!response.ok) {
      throw new Error(`AI Service responded with status ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.error('AI Service Error:', error);
    res.status(500).json({ error: 'Failed to communicate with AI Service' });
  }
});

export default router;
