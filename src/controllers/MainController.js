module.exports = async (req, res) => {
    try {
        res.render("index");
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}