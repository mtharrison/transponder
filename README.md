#transponder

Already set up an awesome Graphite/statsd monitoring dashboard for your applications? How about your servers? transponder is a super easy to use node daemon to send linux server stats to an existing statsd process. Just install transponder on all your servers and you're away!

###Install

To install transponder, log in to your server and run:

	[sudo] npm install -g transponder

###Usage

To start transponder simply use the `transponder` command from your terminal. The following options are configurable and set as environment variables:

- `HOST` - The hostname or IP of the statsd daemon (default is `localhost`)
- `PORT` - The port number of the statsd daemon (default is `8125`)
- `INTERVAL` - The sample interval, in milliseconds, desired (default is `1000`)
- `PREFIX` - Optional string to prefix all statsd indices with. Should include a trailing period (default is `''`).

Example:

	HOST=127.0.0.1 PORT=8125 INTERVAL=5000 PREFIX=myprefix. transponder

###Run in the background

You'll probably want this to run in the background, the easiest way to do this is using `nohup`:

	HOST=127.0.0.1 nohup transponder &