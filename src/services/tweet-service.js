const { TweetRepository, HastagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HastagRepository();
  }

  async create(data) {
    console.log(data);
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z0-9_]+/g)
      .map((tag) => tag.substring(1).toLowerCase()); // this regex extracts hashtags
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let titleOfPresenttags = alreadyPresentTags.map((tags) => tags.title);
    let newTags = tags.filter((tag) => !titleOfPresenttags.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweets.push(tweet.id);
      tag.save();
    });
    return tweet;
  }

  async get(tweetId) {
    const tweet = await this.tweetRepository.getWithComments(tweetId);
    return tweet;
  }
}

module.exports = TweetService;
