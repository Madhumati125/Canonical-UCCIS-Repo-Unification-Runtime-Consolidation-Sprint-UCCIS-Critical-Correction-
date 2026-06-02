const axios = require("axios");

async function fetchEscalations() {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/escalations"
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

module.exports = {
  fetchEscalations
};