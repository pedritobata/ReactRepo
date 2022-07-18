import cookieparser from 'cookie-parser';
import app from './server.js';
import userRoutes from './src/routes/user.routes.js';
import hotelRoutes from './src/routes/hotel.routes.js';
import authRoutes from "./src/routes/auth.routes.js";

// Middlewares
app.use(cookieparser());

// routes
app.use('/api/users', userRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).json({
        success: false,
        status,
        message,
        error: err.stack
    });
});