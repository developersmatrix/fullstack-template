import express from "express";

import propertyTax from "../controllers/propertyTax.js";

const router = express.Router();

router.get("/", propertyTax.getPropertyTaxCollection);
router.post("/", propertyTax.postPropertyTaxCollection);

export default router;
