const axios = require("axios");

async function fetchTelemetry() {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/telemetry"
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

module.exports = {
  fetchTelemetry
};