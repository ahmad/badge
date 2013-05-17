## Badge Processor
``badge.js`` is a reuable snippet of code that allows raw badge processing.

### Step 1: Include badge.js
``<script src="badge.js" ></script>``


### Step 2: Begin Using Badge.js
```javascript
var raw_data = "999287^Donald^Shanahan^^3453 College St^^Macon^GA^31201^^(800) 555-5594^testing@options.com^^RN^IV Care Options";

var positions = {
	first_name: 1,
	last_name: 2,
	title: 3,
	address1: 4,
	address2: 5,
	city: 6,
	state: 7,
	zip: 8,
	country: 9,
	phone: 10,
	email: 11,
	npi_number: 12
};

var delimiter = "^";

var data = badge.process(delimiter, raw_data, positions);
```

The ``data`` contains the value of all the parameters specified in the ``position`` variable.