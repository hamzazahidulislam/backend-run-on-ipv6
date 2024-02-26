<!-- @format -->

# Run Backend code on IPv6 Network and IPv4 and use our static IP address that given by the router

## let me describe these ip addresses

    '192.168.0.103',
    '127.0.0.1',
    '[::1]',
    '[fe80::e0ed:619a:2d7a:c145%3]'

- ### first IPv4 address that assing by the router

- ### second IPv4 address is the local well known IPv4 address

- ### third ip address is the local well known IPv6 address

- ### fourth IPv6 address is LINK-LOCAL IPv6 address that assing by the router and this is use commonly one user to another user can communicate with each other

## One Important note here please don't use my LINK-LOCAL IPv6 address because this is always mine. You have to eanble your IPv6 functionality then you get your IPv6 Link-LOCAL IPv6 address. Then you easily change that IPv6 address. I hope you will be able to change this.

### when you successfully complete these. Then you can get request the server from your any local network very easily

### check your server runing or not using this command

- curl -X GET "http://192.168.0.103:80/"

- curl -X GET "http://127.0.0.1:80/"

- curl -X GET "http://[::1]:80/"

- curl -X GET "http://[fe80::e0ed:619a:2d7a:c145%3]:80/"

## Last final please make sure when you try to request from browser then remove the `%3`

- curl -X GET "http://[fe80::e0ed:619a:2d7a:c145]:80/"

