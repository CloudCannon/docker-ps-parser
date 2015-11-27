# docker-ps-parser

Parses the output from docker ps into an object

## Install

```bash
npm install docker-ps-parser --save
```

## Usage

```js
var Parser = require("docker-ps-parser");

var psOutput = fs.readFileSync(__dirname + "/output.txt").toString();

var parsed = Parser.parse(psOutput);
```

The code above reads a file that contains the output of a `docker ps` command. For example:

```
CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS               NAMES
000000000001        fileserver:1027      "/bin/entrypoint node"   2 hours ago         Up 2 hours                              fileserver5
000000000002        fileserver:1027      "/bin/entrypoint node"   2 hours ago         Up 2 hours                              fileserver4
000000000003        fileserver:1027      "/bin/entrypoint node"   2 hours ago         Up 2 hours                              fileserver3
000000000004        fileserver:1027      "/bin/entrypoint node"   2 hours ago         Up 2 hours                              fileserver2
000000000005        fileserver:1027      "/bin/entrypoint node"   2 hours ago         Up 2 hours                              fileserver1
000000000006        varnish:1009         "/start"                 2 weeks ago         Up 2 weeks                              varnish
```

This would output:

```js
[
  {
    "CONTAINER ID": "000000000001",
    "IMAGE": "fileserver:1027",
    "COMMAND": "\"/bin/entrypoint node\"",
    "CREATED": "2 hours ago",
    "STATUS": "Up 2 hours",
    "PORTS": "",
    "NAMES": "fileserver5"
  },
  {
    "CONTAINER ID": "000000000002",
    "IMAGE": "fileserver:1027",
    "COMMAND": "\"/bin/entrypoint node\"",
    "CREATED": "2 hours ago",
    "STATUS": "Up 2 hours",
    "PORTS": "",
    "NAMES": "fileserver4"
  },
  {
    "CONTAINER ID": "000000000003",
    "IMAGE": "fileserver:1027",
    "COMMAND": "\"/bin/entrypoint node\"",
    "CREATED": "2 hours ago",
    "STATUS": "Up 2 hours",
    "PORTS": "",
    "NAMES": "fileserver3"
  },
  {
    "CONTAINER ID": "000000000004",
    "IMAGE": "fileserver:1027",
    "COMMAND": "\"/bin/entrypoint node\"",
    "CREATED": "2 hours ago",
    "STATUS": "Up 2 hours",
    "PORTS": "",
    "NAMES": "fileserver2"
  },
  {
    "CONTAINER ID": "000000000005",
    "IMAGE": "fileserver:1027",
    "COMMAND": "\"/bin/entrypoint node\"",
    "CREATED": "2 hours ago",
    "STATUS": "Up 2 hours",
    "PORTS": "",
    "NAMES": "fileserver1"
  },
  {
    "CONTAINER ID": "000000000006",
    "IMAGE": "varnish:1009",
    "COMMAND": "\"/start\"",
    "CREATED": "2 weeks ago",
    "STATUS": "Up 2 weeks",
    "PORTS": "",
    "NAMES": "varnish"
  }
]
```

## Contributing

Feel free to contribute. Please ensure tests pass and for any new functionality tests are added. To run tests:

```bash
npm test
```
