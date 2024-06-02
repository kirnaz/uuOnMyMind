const { Notice } = require("../models/models");
const ApiError = require("../error/ApiError");
const { default: next } = require("next");

class NoticeController {
  async create(req, res, next) {
    try {
      const { name, typeId, description } = req.body;
      const notice = await Notice.create({ name, typeId, description });

      return res.json(notice);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { typeId } = req.query;
    let notes;
    if (!typeId) {
      notes = await Notice.findAll();
    }
    if (typeId) {
      notes = await Notice.findAll({ where: { typeId } });
    }
    return res.json(notes);
  }

  async filter(req, res) {
    
  }

  async getOne(req, res) {
    const { id } = req.params;
    const notice = await Notice.findOne({
      where: { id },
    });
    return res.json(notice);
  }

  async edit(req, res) {

  }

  async delete(req, res) {
    return {};
  }
}

module.exports = new NoticeController();
