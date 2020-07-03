# reassignWorkflow
Reassign Workflows to a different processor

SAP Cloud Platform Workflow // Cloud Foundry

- Display a list of task instances of a workflow
- Select an item on the list
- Enter a processor in the input field
- Click reassign processor to assign the task to that user
- Reload UI to reflect changes

App can be cloned, built and deployed to CF spaces.

Possible improvements
 - Read new processor from Successfactors or other data source, no manual input
 - Automatically refresh UI after reassigning processor
 - etc
____________
Prerequisites:
 
Needs a destination called "WORKFLOW_SERVICE" pointing to:
https://api.workflow-sap.cfapps.eu10.hana.ondemand.com
eu10 might need to be replaced by a different data center
____________
Authorization

Authorization can be handled by the destination, e.g. through OAuth2ClientCredentials.
OAuth2Client needs the right authorization to execute API: 
https://api.sap.com/api/SAP_CP_Workflow_CF/resource
User Task Instances -> PATCH -> /v1/task-instances/{taskInstanceId}
Assigning the rights is done through parameters of the service instance:
https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/c74f5ff9065b4baeb700d033602ef1d9.html
E.g. through Cloud Foundry Command Line Interface: cf update-service service_name -c config.json 

Content of config.json:
{
    "authorities": [
        "TASK_COMPLETE",
        "TASK_UPDATE",
        "TASK_GET"
    ]
}
