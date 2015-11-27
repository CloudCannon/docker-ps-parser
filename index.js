var SEPARATOR = "---";

function parseOutput(output) {
	if (!output) {
		return [];
	}

	var lines = output.trim().split("\n");

	if (lines.length < 2) {
		return [];
	}

	var headers = {}, start = 0;
	lines[0].replace(/([A-Z\s]+?)($|\s{2,})/g, function (all, name, space, index) {
		headers[name] = {
			start: index,
			end: index + all.length
		};

		// check if this header is at the end of the line
		if (space.length === 0) {
			headers[name].end = undefined;
		}
		return name + " ";
	});

	var entries = [];
	for (var i = 1; i < lines.length; i++) {
		var entry = {};
		for (var key in headers) {
			if (headers.hasOwnProperty(key)) {
				entry[key] = lines[i].substring(headers[key].start, headers[key].end).trim();
			}
		}
		entries.push(entry);
	}

	return entries;
}

module.exports = {
	parse: parseOutput
};
