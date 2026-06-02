const axios = require("axios");

const signals = [
  {
    signal_type: "WasteOverflow",
    ward: "Ward-01",
    severity: "HIGH",
    payload: {
      fillLevel: 91,
      sensorId: "BIN-100"
    }
  },
  {
    signal_type: "WaterLeakage",
    ward: "Ward-05",
    severity: "MEDIUM",
    payload: {
      pressure: 24
    }
  },
  {
    signal_type: "TrafficCongestion",
    ward: "Ward-10",
    severity: "CRITICAL",
    payload: {
      density: 99
    }
  }
];

async function generateSignal() {
  const signal =
    signals[Math.floor(Math.random() * signals.length)];

  try {
    const response = await axios.post(
      "http://localhost:5000/api/signals",
      signal
    );

    console.log(
      "Signal Generated:",
      response.data
    );
  } catch (err) {
    console.log(err.message);
  }
}

setInterval(generateSignal, 10000);

console.log("Telemetry Generator Running...");