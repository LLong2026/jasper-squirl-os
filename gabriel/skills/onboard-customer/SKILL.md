# Skill: onboard-customer
When a new customer signs up (free, licensed, or SaaS):
1. Create a Customer record with company_name, admin_name, admin_email, tier
2. Validate admin contact
3. Load the TierConfiguration for the chosen tier
4. Provision the tier-allowed feature set and credit allotment
5. Generate a deployment plan listing the apps the customer intends to connect
6. Create a PlatformAlert (info) confirming onboarding complete
