## steamer-responsive
Responsive h5 solution


### Usage
```
var Responsive = require("steamer-responsive");
Responsive.init();

var rem = responsive.px2rem("150px");
var px = responsive.rem2px("1rem");

```

### Options
* baseW
	- base width, default to 375px, ie iphone6 width
* baseFontSize
	- base font size, default to 75px
* maxW
	- max width, default to 0. When it is set to non-zero, it means it will stops scale up if width reaches this limit

### Changelog
* v0.1.1 finish basic features and add less px2rem function
* v0.2.0 add more less functions
