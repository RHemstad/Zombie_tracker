const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401); //unauthorized
        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles);
        console.result = request.roles.map(role => rolesArray.includes(role)).find(val => val === true); //should return true if all roles are allowed
        if (!result) return res.sendStatus(401); //authorized
        next();
    }
    };

    module.exports = verifyRoles;


