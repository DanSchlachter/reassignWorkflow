/*global QUnit*/

sap.ui.define([
	"reassign/reassignUI/controller/ReassignView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ReassignView Controller");

	QUnit.test("I should test the ReassignView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});