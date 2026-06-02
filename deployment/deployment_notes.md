# Deployment Notes

Backend

Port:
5000

Frontend

Port:
3000

Container

docker-compose up --build

Health Check

GET /

Expected

{
"system":"UCCIS",
"status":"RUNNING"
}

Deployment Status

Development Ready

Production Ready

NO

Reason

Authentication Pending

Role Management Pending

WebSocket Pending
