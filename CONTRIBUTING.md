# 🤝 Contributing to LokDrishti AI

We are thrilled that you are interested in contributing to LokDrishti AI! This document outlines the guidelines and best practices for setting up your local environment, writing code, and submitting pull requests.

---

## 🌟 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please report any unacceptable behavior to **connect.crystalstudio@gmail.com**.

---

## 🛠️ Local Development Setup

Please refer to the **Getting Started** section of the [README.md](README.md#getting-started--setup) for prerequisites, cloning, installing dependencies, and configuring your local Gemini and Google Maps API credentials.

### Code Style Guidelines
To maintain consistency across our files, please configure your editor using the provided `.editorconfig` file:
*   **Indentation:** 2 spaces (no tabs).
*   **Line Endings:** LF line endings (enforced via `.gitattributes`).
*   **CSS Styles:** Use variables from `index.css` for typography and colors rather than writing ad-hoc styling rules.

---

## 🚀 Branching & Workflow

We follow a simple branch-and-merge workflow:

1.  **Fork** the repository and create your branch from `main`:
    ```bash
    git checkout -b feature/your-awesome-feature
    ```
2.  **Make your changes** in a clean, isolated commit.
3.  **Run formatting and builds** locally to ensure no syntax errors or warnings:
    ```bash
    npm run build
    ```
4.  **Commit** your changes with a clear, descriptive message following Conventional Commits (e.g. `feat: add email notification triggers` or `fix: resolve voice recording crash`).
5.  **Push** to your fork and submit a **Pull Request** targeting our `main` branch.

---

## 🚨 Security Reports

If you identify a security vulnerability, please do not open a public issue. Instead, report it privately to our team by following the instructions in our [Security Policy](SECURITY.md).
