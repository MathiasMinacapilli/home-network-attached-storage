# Proect

Home Network Attached Storage is tended to be a project for everyone that wants to run a NAS in its home.

# Setup

1. Create virtual env: `python3 -m venv env`
1. Activate virtual env: `source env/bin/activate` (use `activate.fish` if you are in fish)
1. Install dependencies: `pip install -r requirements.txt`

## Considerations
Maybe you should have to open the port 5000 in Windows:
`netsh advfirewall firewall add rule name="TCP Port 5000" dir=in action=allow protocol=TCP localport=5000`
