const axios = require("axios");

async function test() {
  const payload = {
    signal_type: "WasteOverflow",
    ward: "Ward-01",
    severity: "HIGH",
    payload: {
      fillLevel: 97
    }
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/signals",
      payload
    );

    console.log("CHAIN PASS");
    console.log(response.data);
  } catch (err) {
    console.log("CHAIN FAIL");
    console.log(err.message);
  }
}

test();