# node-mssql

get the db script from below path--

https://github.com/mataprasad/scott_schema/blob/master/scott_mssql.SQL

if you are not able to connect to your database server frpm remote, follow these steps--

1. Enable TCP in the sql server Client Protocol
2. Add the ip of your m/c in the sql server n/w configuration TCP
3. Add the port 1433 for the static port for ALL IP in n/w configuration for TCP
4. Add inbound rule for TCP port 1433 on your m/c firewall.
