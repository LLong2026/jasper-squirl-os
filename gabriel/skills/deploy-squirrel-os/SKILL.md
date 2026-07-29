# Skill: deploy-squirrel-os
When a connected app is approved for deployment:
1. Push the 15 entity schemas via base44.manage_entity_schemas
2. Deploy the 4 backend functions (healthCheck, systemMetrics, ameliaHeartbeat, jasperRemediation) via base44.deploy_backend_function
3. Register the 11 AegisPlaybooks from PlaybookTemplate
4. Register the 4 skills from SkillTemplate
5. Configure the 3 workflows (15-min heartbeat, daily 03:00 sweep, anomaly entity trigger)
6. Initialize the 31-node/5-layer neural mesh from NeuralNodeTemplate
7. Set PQC config (Dilithium3/kyber_1024/SPHINCS+-256f) based on app domain
8. Update DeploymentJob to 'complete'
9. Verify success with a first heartbeat read
10. Create NeuralMeshSnapshot record
