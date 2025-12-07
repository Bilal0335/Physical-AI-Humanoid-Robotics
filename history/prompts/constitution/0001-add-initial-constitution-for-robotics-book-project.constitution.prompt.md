---
id: 0001
title: Add initial constitution for robotics book project
stage: constitution
date: 2025-12-07
surface: agent
model: unknown
feature: none
branch: unknown
user: unknown
command: /sp.constitution Project: Physical AI & Humanoid Robotics Book + Integrated RAG Chatbot

Core principles:
- Technical accuracy (ROS 2, Gazebo, Unity, Isaac, VLA)
- Clarity for intermediate AI/robotics learners
- Consistency across book, code, and chatbot answers
- Reproducibility of all examples and simulations

Standards:
- Verify all robotics/AI facts with primary sources
- Code must be runnable (ROS 2 + rclpy, Gazebo, Unity, Isaac)
- Follow Spec-Kit Plus + Docusaurus structure
- Consistent terminology and module flow
- RAG chatbot answers must rely only on retrieved book content

Writing:
- Tone: practical, instructional
- Level: Flesch-Kincaid 9–11
- Each module must include objectives, examples, and exercises

Book requirements:
- Modules:
  1. ROS 2 (Robot Nervous System)
  2. Gazebo/Unity (Digital Twin)
  3. NVIDIA Isaac (AI-Robot Brain)
  4. VLA (Vision-Language-Action)
- Capstone: Voice → Plan → Navigate → Detect → Manipulate
- Deployment: Docusaurus → GitHub Pages

RAG Chatbot:
- Stack: FastAPI + OpenAI Agents/ChatKit + Qdrant + Neon
- Must answer book questions + selected-text questions
- Zero hallucinations; retrieval-grounded responses only

Constraints:
- Code style: Python PEP8, TS/JS ESLint defaults
- All examples and infrastructure steps must run as written

Success criteria:
- Book published and consistent
- RAG chatbot fully integrated and accurate
- All simulations reproducible and functioning
labels: ["constitution", "initial-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: []
---

## Prompt

/sp.constitution Project: Physical AI & Humanoid Robotics Book + Integrated RAG Chatbot

Core principles:
- Technical accuracy (ROS 2, Gazebo, Unity, Isaac, VLA)
- Clarity for intermediate AI/robotics learners
- Consistency across book, code, and chatbot answers
- Reproducibility of all examples and simulations

Standards:
- Verify all robotics/AI facts with primary sources
- Code must be runnable (ROS 2 + rclpy, Gazebo, Unity, Isaac)
- Follow Spec-Kit Plus + Docusaurus structure
- Consistent terminology and module flow
- RAG chatbot answers must rely only on retrieved book content

Writing:
- Tone: practical, instructional
- Level: Flesch-Kincaid 9–11
- Each module must include objectives, examples, and exercises

Book requirements:
- Modules:
  1. ROS 2 (Robot Nervous System)
  2. Gazebo/Unity (Digital Twin)
  3. NVIDIA Isaac (AI-Robot Brain)
  4. VLA (Vision-Language-Action)
- Capstone: Voice → Plan → Navigate → Detect → Manipulate
- Deployment: Docusaurus → GitHub Pages

RAG Chatbot:
- Stack: FastAPI + OpenAI Agents/ChatKit + Qdrant + Neon
- Must answer book questions + selected-text questions
- Zero hallucinations; retrieval-grounded responses only

Constraints:
- Code style: Python PEP8, TS/JS ESLint defaults
- All examples and infrastructure steps must run as written

Success criteria:
- Book published and consistent
- RAG chatbot fully integrated and accurate
- All simulations reproducible and functioning

## Response snapshot

New constitution version 1.0.0 created. Please update RATIFICATION_DATE. Suggested commit message: docs: add initial constitution for Physical AI & Humanoid Robotics book project

## Outcome

- ✅ Impact: The project constitution has been successfully created with version 1.0.0.
- 🧪 Tests: No tests were run or added in this step.
- 📁 Files: The `.specify/memory/constitution.md` file was created/updated.
- 🔁 Next prompts: The user should review the new constitution and consider providing the RATIFICATION_DATE.
- 🧠 Reflection: The initial creation of the constitution ensures a foundational document for project governance.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script did not create the file as expected, requiring manual PHR creation using agent-native tools.
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Investigate why `create-phr.sh` failed or did not create the file in the expected location.