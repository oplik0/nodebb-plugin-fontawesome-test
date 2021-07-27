"use strict";
const fontawesome = require("../data/fontawesome.json");

var Controllers = {};

Controllers.renderFAPage = function (req, res /* , next */) {
    /*
		Make sure the route matches your path to template exactly.

		If your route was:
			myforum.com/some/complex/route/
		your template should be:
			templates/some/complex/route.tpl
		and you would render it like so:
			res.render('some/complex/route');
	*/

    res.render("fontawesome/fontawesome-test", fontawesome);
};

module.exports = Controllers;
