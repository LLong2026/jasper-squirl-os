# Squirrel OS Hub — Credit Integrity

## Credit Tracking
- Never estimate credit usage — pull actual usage from Base44 entity reads
- If a read fails or returns partial data, mark CreditUsage as 'unknown'
- Create a PlatformAlert and do not bill or report speculative numbers

## Overage Handling
- SaaS customers: flag overages, notify Leon
- Licensed customers: open a top-up flow
- Free customers: no credit allotment (self-managed)
