### Install Nginx

`sudo apt-get install nginx` 

#### Test Nginx Status

`sudo nginx -t`

### Run 

`sudo vi /etc/nginx/conf.d/myapp.conf`

### Add following configuration to myapp.conf

```
server {
    listen 80;

    server_name your_domain_or_IP;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

> Replace your_domain_or_IP with public ip of EC2 instance

#### Restart nginx service

`sudo systemctl restart nginx`


