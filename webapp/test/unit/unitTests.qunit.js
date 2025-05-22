/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/sapui5viewsandctrl/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
