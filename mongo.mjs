// server.js
import app from './src/app.js';
import { connectMongoDB } from './src/config/database.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Connect to database first
        await connectMongoDB();
        
        // Start server after successful DB connection
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
        
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
};

startServer();