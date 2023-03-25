import Hastag from "../models/hastag.js";
// const Hastags = require("../models/hastag");

class HastagRepository {
  async create(data) {
    try {
      const tag = await Hastag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const tag = await Hastag.insertMany(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const tag = await Hastag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const response = await Hastag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async findByName(titleList) {
    try {
      const tags = await Hastag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HastagRepository;
