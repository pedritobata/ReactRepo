import app from './server.js';
import userRoutes from './src/routes/user.routes.js';
import hotelRoutes from './src/routes/hotel.routes.js';


app.use('/api/users', userRoutes);
app.use('/api/hotels', hotelRoutes);