const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getWithComments(id) {
    try {
      const tweet = await tweet
        .findById(id)
        .populate({ path: "comments" })
        .lean();
    } catch (error) {
      console.log(error);
    }
  }
  async update(tweetId, data) {
    const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
    return tweet;
  }
  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
