# Project Plan: Physical AI & Humanoid Robotics Book + Integrated RAG Chatbot

## 1. Scope and Dependencies

### In Scope:
-   **Book Content**: Comprehensive modules covering ROS 2, Gazebo/Unity, NVIDIA Isaac, and Vision-Language-Action (VLA) as defined in individual module specifications (001-ROS2-Nervous-System, 002-Digital-Twin-Gazebo-Unity, 003-AI-Robot-Brain-Isaac, 004-Vision-Language-Action). This includes:
    -   **Module 1 (ROS 2)**: Core ROS 2 middleware concepts, Nodes, Topics, Services, `rclpy` integration, URDF fundamentals.
    -   **Module 2 (Gazebo & Unity)**: Physics simulation (gravity, collisions, materials), robot-environment interaction, high-fidelity rendering with Unity, sensor simulation (LiDAR, depth cameras, IMUs).
    -   **Module 3 (NVIDIA Isaac)**: Isaac Sim for photorealistic simulation and synthetic data generation, Isaac ROS for hardware-accelerated VSLAM and navigation, Nav2 for bipedal humanoid path planning.
    -   **Module 4 (VLA)**: Voice-to-Action using OpenAI Whisper, cognitive planning with LLMs for ROS 2 action sequences, capstone VLA pipeline (voice → plan → navigate → perceive → manipulate).
-   **Capstone Project**: Integrated voice-to-action pipeline (Voice → Plan → Navigate → Detect → Manipulate) demonstrating end-to-end humanoid robotics behaviors in simulation, as detailed in Module 4.
-   **Docusaurus Website**: Full deployment of the book content as a static website on GitHub Pages, including navigation, search, code block highlighting, and content versioning.
-   **RAG Chatbot**: FastAPI-based backend, OpenAI Agents/ChatKit, Qdrant (vector database), Neon (Postgres) for semantic search and retrieval-grounded answers strictly based on book content. Integrated as a web component into the Docusaurus site.
-   **Reproducible Examples**: All code, simulations, and configuration files will be provided and verified to be runnable, ensuring readers can replicate all results as demonstrated.
-   **Quality Assurance**: Adherence to the project constitution for technical accuracy, clarity for intermediate AI/robotics learners, consistency across book, code, and chatbot answers, and reproducibility of all examples and simulations.

### Out of Scope:
-   Full conversational AI agents (beyond single-turn commands for VLA).
-   Complex multi-step household task planners (beyond defined capstone).
-   End-to-end robot reinforcement learning systems (beyond module scope).
-   Advanced animation pipelines or custom Unity shaders.
-   Full robot control stacks (beyond what's covered in specific modules like ROS 2 or Nav2).
-   Real-world robotics hardware development or extensive debugging (focus remains on simulation).

### External Dependencies:
-   **OpenAI API**: For Whisper (Voice-to-Action) and LLM-based cognitive planning (RAG Chatbot and VLA). API keys will be managed securely via environment variables.
-   **GitHub Pages**: Deployment platform for Docusaurus static website.
-   **Qdrant**: Vector database for RAG chatbot's semantic search capabilities.
-   **Neon (Postgres)**: Relational database for RAG chatbot backend (metadata, user sessions if implemented later).
-   **ROS 2**: Core robotics middleware (target: Humble or specified LTS version).
-   **Gazebo**: Physics simulator (ROS 2 compatible version).
-   **Unity**: High-fidelity rendering/interaction platform (ROS 2 compatible version).
-   **NVIDIA Isaac Sim & Isaac ROS**: Advanced simulation and hardware acceleration tools.
-   **Python Libraries**: `rclpy`, FastAPI, etc., as per specific module requirements.

## 2. Key Decisions and Rationale

### A. Docusaurus as Primary Platform:
-   **Rationale**: Chosen for its robust Markdown support, built-in search, content versioning capabilities, and active community, making it ideal for technical documentation. Its static site generation aligns well with GitHub Pages deployment.

### B. Iterative, Research-While-Writing Workflow:
-   **Rationale**: This approach balances the need for a structured book (long-term vision) with the dynamic nature of robotics and AI technologies. It allows for in-depth research into complex topics as content is developed, ensuring accuracy and relevance while maintaining overall project coherence and mitigating early incorrect assumptions.

### C. Consistent Code Example Format & Testing:
-   **Rationale**: Essential for ensuring reproducibility and ease of learning, as mandated by the project constitution. All code examples will follow Python PEP8/TS/JS ESLint, be fully runnable, and include clear setup instructions. Automated testing will be implemented where feasible to verify example functionality.

### D. Version Choices for Core Technologies:
-   **Rationale**: Standardize on ROS 2 Humble and corresponding compatible LTS (Long-Term Support) versions for Gazebo, Unity, and NVIDIA Isaac tools. This choice prioritizes stability and long-term reproducibility for learners, minimizing issues arising from rapid version changes in upstream dependencies. Specific versions will be explicitly stated in each module.

### E. Diagram Format:
-   **Rationale**: Will prioritize vector-based formats such as SVG or Mermaid.js where possible, for scalability and clear rendering across devices. This allows for text-based version control (Mermaid) or high-quality resolution-independent visuals (SVG). Raster images (PNG/JPG) will be used only for screenshots or complex renders where vector is impractical.

### F. Target Depth for Readers:
-   **Rationale**: Aligned with the project constitution's Flesch-Kincaid 9-11 readability target, catering to "intermediate AI/robotics learners." Content will provide sufficient detail to understand complex concepts and implement examples, without assuming expert-level prior knowledge.

### G. RAG Chatbot Integration Depth:
-   **Rationale**: The RAG Chatbot will be tightly integrated into the Docusaurus website, likely as a persistent component or accessible widget. It will be context-aware, meaning it can use the currently viewed book content to better ground its responses, offering a seamless and enriching learning experience.

## 3. Interfaces and API Contracts

### A. Docusaurus Front-End:
-   **Public APIs**: Standard web interface (HTML, CSS, JavaScript) accessible via a browser.
-   **Versioning Strategy**: Docusaurus's native content versioning feature will be utilized for managing book editions.
-   **Error Taxonomy**: Standard web error codes (e.g., 404 for missing pages, client-side JS errors).

### B. RAG Chatbot Backend (FastAPI):
-   **Public APIs**: RESTful API endpoints for interaction.
    -   `/api/v1/chat`:
        -   **Method**: POST
        -   **Input**: JSON payload `{ "query": "string", "context_text": "optional string or array of strings", "session_id": "optional string" }`
        -   **Output**: JSON payload `{ "response": "string", "citations": [ { "text": "string", "link": "string" } ] }`
        -   **Errors**: 400 Bad Request (invalid input), 401 Unauthorized (missing/invalid API key), 500 Internal Server Error.
    -   `/api/v1/ingest`: (Internal/Admin only)
        -   **Method**: POST
        -   **Input**: JSON payload `{ "book_content_url": "string" }` or `{ "content_text": "string", "metadata": {} }`
        -   **Output**: JSON payload `{ "status": "success", "message": "string" }`
        -   **Errors**: 400, 401, 500.
-   **Authentication**: API keys (managed via environment variables) for backend access.
-   **Data Privacy**: User query data will be ephemeral and not persisted on the backend. Only book content and derived embeddings will be stored.
-   **Versioning Strategy**: API versioning (e.g., `/api/v1/`).

## 4. Non-Functional Requirements (NFRs) and Budgets

### A. Performance:
-   **Docusaurus**: Page load time < 2 seconds (p95). Full book build time < 5 minutes.
-   **RAG Chatbot**:
    -   Query response latency < 5 seconds (p95).
    -   **VLA Voice-to-Action (Whisper)**: Processing latency < 500ms.
    -   **VLA LLM Planning**: Processing latency < 2 seconds.
    -   Overall near real-time response for VLA system interactions.
    -   Throughput: Capable of handling expected concurrent users for a public-facing learning resource on GitHub Pages.

### B. Reliability:
-   **Docusaurus**: 99.9% uptime on GitHub Pages (standard for static sites).
-   **RAG Chatbot**: 99% uptime for backend services.
-   **Error Budget**: Book content: 0 critical errors; Chatbot: < 1% hallucinations (ungrounded claims), < 5% ungrounded responses (responses not directly attributable to retrieved content).
-   **Degradation Strategy**: If RAG chatbot backend experiences issues, the Docusaurus frontend will display a graceful fallback message (e.g., "Chatbot temporarily unavailable") or provide context search without generative AI.

### C. Security:
-   **Docusaurus**: Standard web security practices for static sites; no sensitive user data stored.
-   **RAG Chatbot**:
    -   **AuthN/AuthZ**: OpenAI API keys and backend service access credentials will be managed via environment variables and cloud secret management services, *never* hardcoded or committed to version control.
    -   **Data Handling**: User queries will be processed ephemerally; no sensitive user data will be collected or stored. Book content is public.
    -   **Auditing**: Standard server access logs for API usage will be enabled for the FastAPI backend.

### D. Cost:
-   **Book/Docusaurus**: Minimal, leveraging GitHub Pages free tier for hosting.
-   **RAG Chatbot**: Aim for cost-effectiveness by utilizing OpenAI API's lower-cost models where appropriate, and Qdrant/Neon's free/hobby tiers initially. Implement cost monitoring and alerts for API usage.

## 5. Data Management and Migration

### A. Book Content (Docusaurus):
-   **Source of Truth**: Markdown files and static assets within the Git repository.
-   **Schema Evolution**: Docusaurus content structure will be versioned through Git. Markdown schema changes will be handled via content updates and linting rules.
-   **Data Retention**: All historical versions of the book content will be retained in the Git repository's history.

### B. RAG Chatbot (Qdrant/Neon):
-   **Source of Truth**: The processed content (text chunks, embeddings, metadata) derived from the book's Markdown files.
-   **Schema Evolution**: Qdrant vector schemas and Neon database schemas will be versioned alongside the RAG chatbot codebase.
-   **Migration and Rollback**: Automated scripts will be developed for re-ingesting book content into Qdrant/Neon upon content updates. Database migrations will be managed using standard tools (e.g., Alembic for Neon).
-   **Data Retention**: Vector embeddings and metadata of book content will be persisted indefinitely. User queries and chatbot responses will *not* be retained.

## 6. Operational Readiness

### A. Observability:
-   **Docusaurus**: Basic traffic and access logs provided by GitHub Pages.
-   **RAG Chatbot**:
    -   **Logs**: Structured logging (e.g., JSON format) for API requests, LLM calls, RAG retrievals, and errors from the FastAPI backend.
    -   **Metrics**: Prometheus/Grafana (or similar) metrics for API request counts, latency, error rates; OpenAI API token usage; Qdrant/Neon health metrics.
    -   **Traces**: Distributed tracing (e.g., OpenTelemetry) for the full request lifecycle to aid in complex debugging, especially between FastAPI, OpenAI, and Qdrant.
    -   **VLA Pipeline Observability (Module 4)**: Structured logging for key components (Whisper output, LLM plan, ROS 2 action status) and a simple visualization interface (e.g., Rviz plugin, web dashboard) will be implemented to make internal states observable for learners.

### B. Alerting:
-   **RAG Chatbot**: Alerts will be configured for high error rates, service downtime, unexpected cost spikes (OpenAI API), and critical failures in the RAG pipeline.
-   **On-call Owners**: [TODO: Define owner for RAG chatbot operations and monitoring].

### C. Runbooks for common tasks:
-   Deployment of Docusaurus updates.
-   Deployment of RAG chatbot backend and frontend integrations.
-   Content ingestion/re-ingestion process for RAG chatbot knowledge base.
-   Troubleshooting common chatbot errors (e.g., OpenAI API key issues, LLM failures, Qdrant connectivity).
-   Troubleshooting Docusaurus build failures.

### D. Deployment and Rollback strategies:
-   **Docusaurus**: Automated CI/CD pipeline using GitHub Actions to deploy to GitHub Pages. Instant rollback via Git reverts of the `gh-pages` branch.
-   **RAG Chatbot**: Containerized deployment (e.g., Docker) on a suitable cloud platform (e.g., Google Cloud Run, AWS Fargate). Blue/green deployment strategies will be favored for zero-downtime updates, with quick rollback capabilities to previous container versions.

### E. Feature Flags and compatibility:
-   **RAG Chatbot**: Implement a lightweight feature flag system to enable/disable new RAG features, experiment with different LLM versions, or control access to advanced functionalities. This aids in safe experimentation and gradual rollout.

## 7. Risk Analysis and Mitigation

### A. OpenAI API Cost Overruns:
-   **Blast Radius**: Unexpectedly high monthly bills, budget exhaustion.
-   **Mitigation**: Implement strict API usage limits, robust cost monitoring with automated alerts, educate users (via the book) on secure API key management and responsible API usage, implement circuit breakers for API calls.

### B. LLM Hallucinations / Ungrounded Responses:
-   **Blast Radius**: Providing incorrect or misleading information to learners, eroding trust and learning quality.
-   **Mitigation**: Enforce strict RAG grounding (chatbot MUST only answer from book content), aggressive prompt engineering to steer LLM behavior, implement confidence scoring for responses, human review of critical responses, fallback to "cannot answer" or a context search if confidence is low.

### C. Technical Obsolescence (ROS 2, Gazebo, Isaac, LLMs):
-   **Blast Radius**: Examples and instructions become outdated, reducing the long-term value and reproducibility of the book.
-   **Mitigation**: Choose stable LTS versions for core tools (e.g., ROS 2 Humble), actively monitor ecosystem changes, plan for periodic module updates, emphasize fundamental concepts over fleeting tool specifics, provide clear versioning information for all code.

### D. Complexity of Integrated Systems:
-   **Blast Radius**: Overwhelm for learners, difficulty in debugging, increased development time.
-   **Mitigation**: Modular design for all components, clear interfaces, comprehensive documentation and diagrams, step-by-step runnable examples, clear explanations of each system's role.

## 8. Evaluation and Validation

### A. Definition of Done (DOD):
-   **Book Modules**:
    -   Content written, reviewed for technical accuracy, clarity, and consistency (as per project constitution).
    -   All examples (code, simulations) runnable and reproducible on specified environments.
    -   All required pedagogical elements (diagrams, exercises, runnable steps) included.
    -   Docusaurus build passes without errors and adheres to site structure.
-   **RAG Chatbot**:
    -   Backend services deployed and accessible.
    -   Content ingestion pipeline functional and up-to-date with book content.
    -   Chatbot answers are consistently grounded in book content (<1% hallucinations on test set).
    -   Integration with Docusaurus frontend fully functional.
-   **Capstone (VLA)**: End-to-end VLA pipeline demonstrably working in simulation (voice → plan → navigate → perceive → manipulate), completing basic object interaction tasks.

### B. Output Validation:
-   **Book Content**:
    -   **Technical Review**: By domain experts for accuracy.
    -   **Editorial Review**: For clarity, style, and adherence to Flesch-Kincaid 9-11.
    -   **Automated Checks**: Docusaurus link validation, code linting, static analysis.
-   **RAG Chatbot**:
    -   **Automated Evaluation**: Of grounding, relevance, and accuracy using a comprehensive test set of book-derived questions.
    -   **Manual Spot-checking**: For hallucinations and overall response quality.
-   **Simulations**: Automated runs of simulation examples where possible, manual verification for visual and behavioral correctness.

## 9. Architectural Decision Record (ADR):

**ADR Suggestion**:
📋 Architectural decision detected: Overall project structure and technology choices. Document reasoning and tradeoffs? Run `/sp.adr "Overall Project Architecture"`
