import express from 'express';
import userRoutes from './routes/userRoutes';
import { sequelize } from './config/database';

const app = express();
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

