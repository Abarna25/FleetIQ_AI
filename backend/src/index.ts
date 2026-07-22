import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

import authRoutes from './routes/auth';
import vehicleRoutes from './routes/vehicles';
import aiRoutes from './routes/ai';

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/ai', aiRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'FleetIQ API' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
