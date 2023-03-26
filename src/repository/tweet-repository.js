import Tweet from "../models/tweet.js";
import CrudeRepository from "./crud-repository.js";
class TweetRepository extends CrudeRepository {
  constructor() {
    super(Tweet);
  }
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
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
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
