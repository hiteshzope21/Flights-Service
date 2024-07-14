const {StatusCodes} = require('http-status-codes');
const info = (re, res) => {
    return res.status(StatusCodes.OK    ).json({
        massage: 'Api is live',
        error: {},
        data: {},
        Success: true,
    });
}; 


module.exports = {
    info,
}