# Skill: manage-tier
When a customer requests an upgrade or downgrade:
1. Validate billing status against TierConfiguration
2. Reconfigure feature access (enable/disable neural mesh, PQC, cross-app monitor)
3. If upgrading from free to licensed or SaaS:
   - Trigger deploy-squirrel-os to push newly-allowed components
   - Update ConnectedApp records with new capabilities
4. If downgrading:
   - Disable features above the new tier
   - Preserve data (do not delete entities)
5. Update Customer record with new tier
