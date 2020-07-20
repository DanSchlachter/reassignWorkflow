sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("reassign.reassignUI.controller.ReassignView", {
		_getTaskInstances: function () {
			var model = this.getView().getModel();
			$.ajax({
				url: "/bpmworkflowruntime/workflow-service/rest/v1/task-instances?status=READY&status=RESERVED",
				method: "GET",
				async: false,
				contentType: "application/json",

				success: function (result, xhr, data) {
					model.setProperty("/result", result);
				}
			});
		},

		onInit: function () {
			this.getView().setModel(new sap.ui.model.json.JSONModel());
			this._getTaskInstances();
		},
		
		reassign: function (instanceId) {
            //find the value entered as new processor in the input field
            var owner = this.getView().byId("processorInput").getValue();
            var that = this;

            // update the workflow instance with the new processor
			$.ajax({
				url: "/bpmworkflowruntime/workflow-service/rest/v1/task-instances/" + instanceId,
				method: "PATCH",
				async: false,
				contentType: "application/json",
				data: JSON.stringify({
					"processor" : owner
				}),
				success: function (result, xhr, data) {
                    //reload UI when task is reassigned successfully, so result becomes visible
                    that._getTaskInstances();
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