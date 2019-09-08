module.exports = function(req, res, next) {
    // valid:1

    const header = req.headers.authorization

    if(!header) {
        return res.status(401).json({ errors: { global: "no token provided" } })
    }

    //Bearer valid:1
    const token = header.split(' ')[1];
    const userId  = token.split(':')[1];

    req.userId = userId;

    next();
}