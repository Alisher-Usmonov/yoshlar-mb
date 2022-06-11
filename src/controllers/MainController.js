module.exports = {
    async HomeGet(req, res) {
        try {
            res.render("index");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async EmploymentGet(req, res) {
        try {
            res.render("employment");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async SportGet(req, res) {
        try {
            res.render("sport");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async PolicyGet(req, res) {
        try {
            res.render("policy");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async LibraryGet(req, res) {
        try {
            res.render("library");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async InitiativeGet(req, res) {
        try {
            res.render("initiative");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
    async ProblemGet(req, res) {
        try {
            res.render("problem");
        } catch (err) {
            res.status(400).json({
                ok: false,
                message: err.message
            })
        }
    },
}