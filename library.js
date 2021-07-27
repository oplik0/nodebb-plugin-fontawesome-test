"use strict";

const nconf = require.main.require("nconf");
const winston = require.main.require("winston");
const controllers = require("./lib/controllers");

const plugin = {};

plugin.init = async (params) => {
    const { router, middleware /* , controllers */ } = params;
    const routeHelpers = require.main.require("./src/routes/helpers");

    /**
     * We create two routes for every view. One API call, and the actual route itself.
     * Use the `setupPageRoute` helper and NodeBB will take care of everything for you.
     *
     * Other helpers include `setupAdminPageRoute` and `setupAPIRoute`
     * */
    routeHelpers.setupPageRoute(
        router,
        "/fontawesome-test",
        middleware,
        [],
        controllers.renderFAPage
    );
};

module.exports = plugin;
