const mongoose = require("mongoose");

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("DB Connection Failed");
    console.error(error);
    process.exit(1);
  }
};
