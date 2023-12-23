import mongoose from "mongoose"

const CommunityFridgeSchema = new mongoose.Schema({
  donations: {
    allowed: {
      type: Array
    },
    notAllowed: {
      type: Array
    }
  },
  community: {
    type: String
  },
  contact: {
    email: {
      type: String
    },
    instagramURL: {
      type: String
    },
    siteURL: {
      type: String
    }
  },
  isFridge: {
    type: Boolean,
    required: true
  },
  isPantry: {
    type: Boolean,
    required: true
  },
  location: {
    address: {
      type: String
    },
    cityState: {
      type: String
    },
    zipCode: {
      type: String
    },
    directionsURL: {
      type: String
    },
    lat: {
      type: String
    },
    long: {
      type: String
    }
  },
  name: {
    type: String,
    required: true
  },
  rules: {
    type: Array
  },
  status: {
    type: String
  },
  key: {
    type: String
  },
  profileIMG: {
    type: String
  },
  description: {
    type: String
  }
})

const CommunityFridge = mongoose.model(
  "CommunityFridge",
  CommunityFridgeSchema,
  "communityFridges"
)
export { CommunityFridge }
