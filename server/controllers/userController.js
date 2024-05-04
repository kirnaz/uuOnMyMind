const { User } = require("../models/models");
const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("missed ID"));
    }
    res.json(id);
  }

  async get(req, res) {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    return res.json(user);
  }

  async list(req, res) {
    const { userId } = req.query;
    let users;

    users = await User.findAll();

    return res.json(users);
  }
}

module.exports = new UserController();
