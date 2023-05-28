#!/bin/bash
# Update the instance
yum update -y
# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

# Create a simple HTTP server file
cat > /home/ec2-user/server.js <<- "EOF"
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
server.listen(80, '0.0.0.0', () => {
    console.log('Server running');
});
EOF

# Set the ownership of the server file
chown ec2-user:ec2-user /home/ec2-user/server.js

# Create a systemd service to run the server on startup
cat > /etc/systemd/system/node-server.service <<- "EOF"
[Unit]
Description=Node.js Server
After=network.target
[Service]
ExecStart=/home/ec2-user/.nvm/versions/node/v14.17.0/bin/node /home/ec2-user/server.js
WorkingDirectory=/home/ec2-user
User=ec2-user
Restart=always
[Install]
WantedBy=multi-user.target
EOF

# Start the service and enable it on startup
systemctl start node-server
systemctl enable node-server

