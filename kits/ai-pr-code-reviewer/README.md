# AI PR Code Reviewer

An intelligent agent kit built on Lamatic that automatically reviews GitHub Pull Requests, analyzes code changes for bugs, security vulnerabilities, and style issues, and provides actionable feedback.

## Features

- **Automated PR Analysis**: Fetches and evaluates code diffs from GitHub Pull Requests.
- **Smart Code Review**: Identifies logical bugs, performance bottlenecks, and best practice violations.
- **Actionable Feedback**: Generates structured, constructive comments to help developers improve code quality.

## Setup & Configuration

1. **Configure Environment Variables**:
   Copy the `.env.example` file to `.env` and fill in your required API keys and GitHub credentials.

2. **Deploy on Lamatic**:
   Import this flow into your Lamatic Studio workspace using the provided configuration.

## Folder Structure

- `flows/`: Contains the core Lamatic flow definitions.
- `prompts/`: System and user prompts powering the AI reviewer.
- `model-configs/`: LLM configurations and parameters.
- `constitutions/`: Guardrails and rule sets for code quality assessment.
- `apps/`: Frontend interface for managing and triggering reviews.

<!-- TODO: Add a description of what this AgentKit does -->
<!-- TODO: Add setup instructions, prerequisites, and usage examples -->
