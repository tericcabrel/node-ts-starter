import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.listen(PORT, () => {
  console.log(`Application started on port ${PORT} 🎉`);
});
