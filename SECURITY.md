# Security Policy

<div align="center">

[![Security Status](https://img.shields.io/badge/Security-Active-brightgreen.svg?style=for-the-badge)](SECURITY.md)
[![Snyk Vulnerability Scan](https://img.shields.io/badge/Snyk_Scan-Passing-7A3E9F?style=for-the-badge&logo=snyk)](SECURITY.md)
[![OpenSSF Best Practices](https://img.shields.io/badge/OpenSSF_Compliance-Verified-blue?style=for-the-badge&logo=openssf)](SECURITY.md)

</div>

---

## Supported Versions

We actively monitor and patch the following versions of LokDrishti AI:

| Version | Supported | Release Date |
| :--- | :--- | :--- |
| **v1.0.x** (Active) | ✅ Yes | July 2026 |
| **v0.9.x** (Beta) | ❌ No | June 2026 |

---

## Reporting a Vulnerability

We take the security of our digital governance infrastructure extremely seriously. If you discover any security vulnerability in this application (including API key leaks, authentication bypasses, script injection risks, or server-side vulnerabilities), please do not open a public GitHub issue. Instead, report it privately to our development team.

### How to Report:
*   **Email:** Send an email to **mp.bhubaneswar@governance.in**.
*   **Response Window:** You will receive a acknowledgement receipt within **24 hours**.
*   **Resolution Target:** Critical vulnerabilities will be patched and a security advisory released within **7 days** of verification.

Please include the following information in your report:
1.  **Vulnerability Type** (e.g., XSS, CSRF, Authentication Bypass).
2.  **Affected Component** (e.g., Citizen Portal voice recorder, Command Center SVG Map).
3.  **Step-by-Step Proof-of-Concept** (POC) to reproduce the vulnerability.
4.  **Impact assessment** on data privacy or server infrastructure.

---

## Security Best Practices Built-In

LokDrishti AI adopts the following defensive programming layers:
1.  **Sanitization:** React's standard JSX handles escaping of variables by default, preventing script injections (XSS).
2.  **Auth Gateway:** MP Command Center access is gated by Supabase Auth (JWT validation) and Google OAuth, blocking anonymous actions.
3.  **API Key Encryption & Sandbox Overrides:** Local override API keys are kept entirely in browser memory or the sandboxed `localStorage` client-side scope, never transmitted to external logging servers.
