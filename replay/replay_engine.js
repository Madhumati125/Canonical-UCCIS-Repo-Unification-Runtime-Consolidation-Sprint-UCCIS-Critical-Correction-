const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "replay_sessions.json"
);

function replay() {
  const sessions = JSON.parse(
    fs.readFileSync(filePath)
  );

  console.log("========== REPLAY ==========");

  sessions.forEach((session) => {
    console.log(
      `${session.session_name}
       Started: ${session.start_time}
       Ended: ${session.end_time}`
    );
  });

  console.log("============================");
}

replay();