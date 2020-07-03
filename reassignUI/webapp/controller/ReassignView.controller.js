sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("reassign.reassignUI.controller.ReassignView", {
		_startInstance: function () {
			var model = this.getView().getModel();
			$.ajax({
				url: "/bpmworkflowruntime/workflow-service/rest/v1/task-instances?status=READY&status=RESERVED",
				method: "GET",
				async: false,
				contentType: "application/json",

				success: function (result, xhr, data) {
					model.setProperty("/result", result);
					debugger;
				}
			});
		},

		onInit: function () {
			this.getView().setModel(new sap.ui.model.json.JSONModel());
			this._startInstance();

		},
		
		reassign: function (instanceId) {
			var owner = this.getView().byId("processorInput").getValue()
			$.ajax({
				url: "/bpmworkflowruntime/workflow-service/rest/v1/task-instances/" + instanceId,
				method: "PATCH",
				async: false,
				contentType: "application/json",
				data: JSON.stringify({
					"processor" : owner
				}),
				success: function (result, xhr, data) {
				}
			});			

		},
		
		onPress: function () {
			var table = this.getView().byId("taskTable");
			var selectedItem = table.getSelectedItem();
			var taskId = selectedItem.getBindingContext().getObject().id;
			this.reassign(taskId);
		},
	});
});