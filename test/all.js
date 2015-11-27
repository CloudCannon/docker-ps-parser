var fs = require("fs"),
	assert = require("assert"),
	valid = fs.readFileSync(__dirname + "/valid.txt").toString(),
	empty = fs.readFileSync(__dirname + "/empty.txt").toString(),
	parser = require("..");

describe("Init", function () {
	it("should return an object", function (done) {
		assert.ok(parser, "parser is not defined");
		done();
	});

	it("should have a parse method", function (done) {
		assert.ok(parser.parse, "parser.parse is not defined");
		assert.equal(typeof parser.parse, "function", "parser.parse is not a function");
		done();
	});
});

describe("Parsing", function () {
	it("parser.parse should return an array empty array on no input", function (done) {
		assert.equal(parser.parse("").length, 0, "parser length incorrect on no input");
		assert.equal(parser.parse(null).length, 0, "parser length incorrect on null input");
		done();
	});

	it("parser.parse should return an empty array when there are only headers", function (done) {
		var output = parser.parse(empty);
		assert.equal(output.length, 0, "parser length incorrect on empty input");
		done();
	});

	it("parser.parse should return an array of objects on valid input", function (done) {
		var output = parser.parse(valid);
		assert.ok(output.length > 0, "parser length incorrect on valid input");

		for (var i = 0; i < output.length; i++) {
			assert.equal(typeof output[1], "object", "parser entries are invalid");
			assert.ok("CONTAINER ID" in output[1], "parser 'CONTAINER ID' missing");
			assert.ok("IMAGE" in output[1], "parser 'IMAGE' missing");
			assert.ok("COMMAND" in output[1], "parser 'COMMAND' missing");
			assert.ok("CREATED" in output[1], "parser 'CREATED' missing");
			assert.ok("STATUS" in output[1], "parser 'STATUS' missing");
			assert.ok("PORTS" in output[1], "parser 'PORTS' missing");
			assert.ok("NAMES" in output[1], "parser 'NAMES' missing");
		}

		done();
	});
});
