import Like from "../models/like.js";

import CrudeRepository from "./crud-repository.js";

class LikeRepository extends CrudeRepository {
  constructor() {
    super(Like);
  }
}

export default LikeRepository;
