// Imports --------------------------------------
import express from 'express';


// Configure express app ------------------------
const app = express();
import { tableOfModules } from './data/tableOfModules.js';
// Configure middleware -------------------------

// Configure CRUDL endpoints --------------------
// List all modules
app.get('/api/modules', (req, res) => {
    res.json(tableOfModules);
});

// Start server ---------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));