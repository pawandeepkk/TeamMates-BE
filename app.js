// Imports --------------------------------------
import express from 'express';


// Configure express app ------------------------
const app = express();
import { tableOfModules } from './data/tableOfModules.js';

// Configure middleware -------------------------
app.use(express.json());

// Configure CRUDL endpoints --------------------
// List all modules
app.get('/api/modules', (req, res) => {
    // validate request
    // access data model
    // response to request
    res.json(tableOfModules);
});

// Read specific record
app.get('/api/modules/:id', (req, res) => {
    // validate request
    // access data model
    const module = tableOfModules.find((module) => module.ModuleID === parseInt(req.params.id));
    if (!module) return res.status(404).json({ Message: `Record ${req.params.id} not found`});
    // response to request
    res.json(module);
});

// Create record
app.post('/api/modules', (req, res) => {
    // validate request
    // access data model
    const newModule = { ...req.body, "ModuleID": tableOfModules.length + 1 };
    tableOfModules.push(newModule);
    // response to request
    res.json(newModule);
});

// Update specific record
app.put('/api/modules/:id', (req,res) => {
    // validate request
    // access data model
    const module = tableOfModules.find((module) => module.ModuleID === parseInt(req.params.id));
    if (!module) return res.status(404).json({ Message: `Record ${req.params.id} not found`});
    module.ModuleName       = req.body.ModuleName       || module.ModuleName;
    module.ModuleCode       = req.body.ModuleCode       || module.ModuleCode;
    module.ModuleLevel      = req.body.ModuleLevel      || module.ModuleLevel;
    module.ModuleLeaderID   = req.body.ModuleLeaderID   || module.ModuleLeaderID;
    module.ModuleImage      = req.body.ModuleImage      || module.ModuleImage;
    // response to request
});

// Start server ---------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));