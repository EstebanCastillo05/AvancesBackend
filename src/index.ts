import express from 'express';
import userRoutes from './routes/userRoutes';
import { sequelize } from './config/database';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database connected');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

