const router = require("express").Router();
const jobRoutes = require("./jobs");
const likesRoutes = require("./likes");

// Job routes
router.use("/jobs", jobRoutes);
router.use("/likes", likesRoutes)

module.exports = router;
