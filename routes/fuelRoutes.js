import  express  from "express";

const router = express.Router()

import { createFuel, deleteFuel, getFuel, getFuelByShed, searchShed, updateFuelStatus } from "../controllers/fuelController.js";

//create api routes

router.post('/createFuel', createFuel);
router.get('/allFuel', getFuel);
router.get('/shed/:number', getFuelByShed);
router.get('/location/:location', searchShed);
router.put('/update/:id', updateFuelStatus);
router.delete('/delete/:id', deleteFuel);

export default router;