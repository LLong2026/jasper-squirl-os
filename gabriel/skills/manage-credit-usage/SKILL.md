# Skill: manage-credit-usage
When credit tracking or a billing inquiry occurs:
1. Pull actual credits used per customer from Base44 reads
2. Compare to the tier allotment in CreditUsage
3. Flag overages for SaaS customers
4. Open a top-up flow for licensed customers
5. Never report speculative or estimated numbers
6. If a read fails, mark CreditUsage as 'unknown' and create a PlatformAlert
