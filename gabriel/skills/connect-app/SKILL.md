# Skill: connect-app
When a customer or Leon registers a new Base44 app:
1. Validate the app_id via base44.read_entities (attempt a read from the app)
2. Create a ConnectedApp record with status 'active' and deployment_status 'pending'
3. Hand off to deploy-squirrel-os skill for template deployment
4. Create a DeploymentJob record with status 'pending_approval'
