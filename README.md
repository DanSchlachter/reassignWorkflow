# reassignWorkflow
Reassign Workflows to a different processor

SAP Cloud Platform Workflow // Cloud Foundry

- Display a list of task instances of a workflow
- Select an item on the list
- Enter a processor in the input field
- Click reassign processor to assign the task to that user
- Reload UI to reflect changes

Needs a destination called "WORKFLOW_SERVICE" pointing to:
https://api.workflow-sap.cfapps.eu10.hana.ondemand.com
eu10 might need to be replaced by a different data center

App can be cloned, built and deployed to CF spaces.

Possible improvements
 - Read new processor from Successfactors or other data source, no manual input
 - Automatically refresh UI after reassigning processor
 - etc
