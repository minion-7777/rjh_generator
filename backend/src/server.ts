import 'dotenv/config';
import { config as higgsfieldConfig } from '@higgsfield/client/v2';
import cors from 'cors';
import express from 'express';
import { generationRouter } from './routes/generation.routes';

if(process.env.HF_CREDENTIALS?.trim()){
    higgsfieldConfig({ credentials: process.env.HF_CREDENTIALS.trim() });
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.use('/api/generations', generationRouter);

app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: "ai-creatvie-studio-api" });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})