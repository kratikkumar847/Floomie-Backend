
exports.home = (req, res) =>{
    res.status(201).json({
        success : true,
        message : `Welcome to Floomie Module Backend !`
    })
}