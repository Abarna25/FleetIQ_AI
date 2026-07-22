import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  // Mock login implementation
  const { email, password } = req.body;
  if (email && password) {
    res.json({ token: 'mock-jwt-token', user: { email, role: 'SUPER_ADMIN' } });
  } else {
    res.status(400).json({ error: 'Email and password required' });
  }
});

export default router;
