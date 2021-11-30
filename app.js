// Imports --------------------------------------
import express from 'express';

// Configure express app ------------------------
const app = express();

// Configure middleware -------------------------

// Configure CRUDL endpoints --------------------

// Start server ---------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));