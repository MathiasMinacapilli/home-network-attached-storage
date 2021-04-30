Maybe you should have to open the port 5000 in Windows:
`netsh advfirewall firewall add rule name="TCP Port 5000" dir=in action=allow protocol=TCP localport=5000`
