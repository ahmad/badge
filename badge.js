// a simple and reusable badge parser
var badge = {

	// stores teh raw badge data
	raw : null,

	// stores the badge delimiter
	delimiter : null,

	// stores the raw badge object split using the delimiter
	badge: null,

	// the cleaned badge, cleaned using the data of the positions
	output: {},

	// split the raw badge using the delimiter specified
	parse: function(){
		this.badge = this.raw.split(this.delimiter);
		return this;
	},

	// set the raw badge data
	set : function(rawData){
		this.raw = rawData;

		if(this.delimiter !== null){
			return this.parse();
		}

		return this;
	},

	// set the positions of fileds
	config: function (positions){
		this.output = {};

		for (var key in positions){
			this.output[key] = this.badge[positions[key]];
			this.output['raw'] = this.raw;
		}
	},


	// a one step process for main functions
	process: function(delimiter, rawData, positions){
		this.delimiter = delimiter;
		this.set(rawData);
		this.config(positions);

		return this.output;
	}
};