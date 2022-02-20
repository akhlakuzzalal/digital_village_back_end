const verifyRoles = (...allRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allRoles];

    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((value) => value === true);
    if (!result) res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
