const fs = require("fs");
const path = require("path");

const masterDbPath = path.join(
  __dirname,
  "../datasets/master_db_seed.json"
);

function getMasterData() {
  return JSON.parse(
    fs.readFileSync(masterDbPath)
  );
}

module.exports = {
  getMasterData
};