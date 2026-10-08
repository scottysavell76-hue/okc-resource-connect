# OKC Resource Connect — MVP

A low-data, installable Progressive Web App (PWA) designed for distribution on Lifeline-supported phones.

## What is included
- One-tap 911 and 988
- One-tap 211 as the universal starting point
- OKC shelter and homelessness resources
- Food/SNAP/WIC
- Community health care
- Transportation / EMBARK / MOE
- Jobs and workforce services
- Legal and eviction assistance
- Domestic violence and youth resources
- ID/document recovery routing
- Libraries/connectivity
- Recovery support
- Search, categories, directions, phone links and source links
- Offline cache after first load
- Verification dates on every resource

## Important product decision
Do not hard-code this as a directory that is "permanently current." Shelter availability, hours, eligibility and funding can change. The production version should have a small admin dashboard for resource verification, with:
- Last verified date
- Verified by
- Status: active / temporarily unavailable / seasonal
- Phone
- Address
- Website
- Eligibility notes
- Hours
- Accessibility notes
- Languages
- Pets/families/youth flags
- Transportation access

## Install
Serve this folder over HTTPS (GitHub Pages, Netlify, Cloudflare Pages, or a similar host). Open it on an Android phone and choose "Add to Home screen" / "Install app."

## Suggested production name
OKC Resource Connect

## Sources used for the October 7, 2026 MVP
- City of Oklahoma City / Key to Home: https://www.okc.gov/Government/Administration/Key-to-Home-Partnership/Get-Help
- Homeless Alliance: https://www.homelessalliance.org/get-help
- City Care: https://citycare.org/okc
- United Way / 211: https://unitedwayokc.org/211-immediate-help/
- Oklahoma Human Services SNAP: https://www.oklahoma.gov/okdhs/services/snap.html
- Oklahoma WIC: https://oklahoma.gov/health/services/children-family-health/wic.html
- EMBARK: https://www.embarkok.com/
- Oklahoma Works: https://oklahoma.gov/workforce.html
- Legal Aid Services of Oklahoma: https://oklaw.org/
- OCU Housing Eviction Legal Assistance Program: https://oklaw.org/organization/ocu-housing-eviction-legal-assistance-program/housing/landlord-and-tenant-problems
- City of OKC mental-health resources: https://www.okc.gov/Services/Public-Safety/Mental-Health-Services
- Metropolitan Library System: https://www.metrolibrary.org/

This MVP is a prototype, not an official government application and does not guarantee service availability or eligibility.
