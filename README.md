# node-mssql

get the db script from below path--

https://github.com/mataprasad/scott_schema/blob/master/scott_mssql.SQL

if you are not able to connect your database server from remote m/c, follow these steps--

1. Enable TCP in the sql server Client Protocol
2. Add the ip of your m/c in the sql server n/w configuration for TCP
3. Add 1433 as the static port for ALL IP in n/w configuration for TCP
4. Add inbound rule for TCP port 1433 on your m/c firewall.
