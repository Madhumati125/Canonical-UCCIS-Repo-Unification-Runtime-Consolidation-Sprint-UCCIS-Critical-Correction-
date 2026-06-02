const axios = require("axios");

async function run() {

  const endpoints = [
    "/signals",
    "/telemetry",
    "/escalations",
    "/replay",
    "/logs"
  ];

  for (const endpoint of endpoints) {
    try {

      const response = await axios.get(
        `http://localhost:5000/api${endpoint}`
      );

      console.log(
        endpoint,
        "PASS",
        response.status
      );

    } catch (err) {

      console.log(
        endpoint,
        "FAIL"
      );

    }
  }
}

run();