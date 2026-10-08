# OKC Resource Connect v2

Adds **My People & Services**, a device-only personal contact list for doctors, lawyers, pharmacies, caseworkers, housing contacts, schools/child care, employers, family/friends and other trusted contacts.

Personal contacts are stored in browser local storage on the user's device and are not sent to the OKC Resource Connect server. This is convenient, but it is not a secure vault; do not store passwords, SSNs, medical records, financial credentials, or other highly sensitive information.

To update GitHub Pages:
1. Replace `index.html` in the repository with the new `index.html`.
2. Replace `sw.js` with the new `sw.js`.
3. Commit both to `main`.
4. Reload the PWA. The service worker cache is versioned to v2.

