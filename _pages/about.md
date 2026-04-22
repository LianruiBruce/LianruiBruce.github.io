---
permalink: /
title: "Biography"
excerpt: "Lianrui (Bruce) Geng - MSCS Student at UNC Chapel Hill | Applied AI & LLM Engineer | Graduate Research Assistant @ ZDlab."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

# Lianrui (Bruce) Geng

I am a graduate student pursuing a **Master of Science in Computer Science** at the **University of North Carolina at Chapel Hill (UNC)**, and a **Graduate Research Assistant at ZDlab** (advisor: Prof. Zhun Deng). My work sits at the intersection of **Large Language Models**, **Human–AI Collaboration**, and **multi-agent systems** — specifically, how to make LLMs more calibrated, honest, and useful when they collaborate with humans on high-stakes tasks.

I came to LLMs from a strong full-stack and systems background. At Utah, I led a Top-1 capstone — an open-sourced legal-document analysis platform that has earned 80+ GitHub stars — and shipped projects in Unreal Engine 5, GPU ray tracing, and interactive C++/Qt teaching tools. I treat that foundation as a feature, not a bug: it means I can take a research idea and ship a usable product around it.

> 🎯 **I'm actively looking for Summer 2026 internships in Applied AI / LLM engineering or ML research engineering.** CPT-authorized, US-relocatable. [Reach out](mailto:lianruig@unc.edu) if you're hiring.

## 🎓 Education

* **University of North Carolina at Chapel Hill** (Chapel Hill, NC)
    * *Master of Science in Computer Science* — **GPA 4.0**
    * *Aug 2025 – May 2027 (expected)*
    * Graduate Research Assistant, ZDlab — advisor Prof. Zhun Deng
    * Research focus: Human–AI Collaboration, multi-agent LLM systems, prompt optimization

* **University of Utah** (Salt Lake City, UT)
    * *Bachelor of Science in Computer Science, Minor in Mathematics*
    * *Graduated: Dec 2024* — **GPA 3.6/4.0**
    * **Honors:** Utah Global Scholarship (4 academic years, $6,000), Dean's List (5 semesters)
    * **Achievement:** "Staff Choice" Award + Top-1 Capstone Project, Fall 2024

## 🔬 Research Experience

**Graduate Research Assistant** | *ZDlab, UNC–Chapel Hill* &nbsp; *Nov 2025 – Present*

Building two end-to-end LLM research pipelines from scratch — covering data, training, evaluation, and multi-GPU infrastructure.

* **CollectiveLLM — LLM survey simulation & DST-guided interviewer fine-tuning**
    * Built a multi-turn "interviewer ↔ simulated respondent" rollout system with batched generation, Monte-Carlo question search, and shared-engine **vLLM inference across 8 GPUs**.
    * Trained a question-aware **Dialogue State Tracking (DST)** model (DistilBERT backbone with question-conditioned head) to recover respondent stances; used DST scores both to filter SFT data and to construct preference pairs for DPO.
    * Implemented the full interviewer fine-tuning loop with **HuggingFace + PEFT/LoRA SFT and TRL-based DPO**, then regenerated higher-quality rollouts to form a self-improvement cycle.
    * Reproduced the pipeline on **4 survey datasets** (CES, WVS, Polish Participatory Budgeting, OpinionQA).

* **HAC — Human–AI Collaboration framework for medical MCQA**
    * Designed a **selective-prediction pipeline** that lets an LLM answer when confident and defer to a (simulated) human otherwise, optimizing the custom HAC loss `L(τ) = (1 − sel_acc) · coverage + λ · human_rate` via threshold search.
    * Implemented a unified confidence-extraction stack — Maximum Softmax Probability, margin, negative entropy, verbalized self-evaluation, and explicit "defer" prompts — benchmarked with **ECE, AUROC, and risk-coverage curves**.
    * Ran systematic ablations across **12 prompt templates** and 3 framework variants on **Qwen2.5-7B, Llama-3-8B, and BioMistral-7B** over MedMCQA, MedQA, and PubMedQA.
    * Built the multi-GPU evaluation infrastructure (torchrun DDP, model-agnostic local-HF / vLLM / OpenAI wrappers, reusable plotting scripts).

## 💼 Professional Experience

**Game Development Engineer Intern** | *Aureum Gale Game* (Los Angeles, CA)
*May 2024 – Aug 2024*
* Developed a fully functional 3D game prototype using **Unreal Engine 5**, used for critical team presentations.
* Integrated 20+ unique game assets, enhancing user engagement and playability through close collaboration with the design team.
* Managed version control via **Git**, achieving a **30% reduction** in code conflicts and streamlining the team workflow.

**Remote Web Developer** | *Heilongjiang Guanjie Biotechnology Co., Ltd* (Harbin, China)
*Apr 2024 – Aug 2024*
* Designed and maintained 3 responsive websites with HTML/CSS and JavaScript, lifting user retention by **30%**.
* Boosted application performance by **40%** via interactive dashboards and mobile support optimization.
* Coordinated weekly sprint cycles remotely, improving development efficiency by **25%**.

**Computer Service Support Administrator** | *Jilin Baiqi Pharmaceutical Co., Ltd* (Jilin, China)
*May 2023 – Aug 2023*
* Reduced system downtime by **25%** through proactive hardware/software maintenance.
* Upgraded critical network infrastructure, increasing communication reliability by **30%**.

## 💻 Selected Projects

**Wrap — Intelligent Legal Document Assistant** *(Capstone, Top-1 Fall 2024)*
*Full-Stack Engineer & Project Lead · React, Node.js, MongoDB, AWS, Python/PyTorch, Chrome Extension*
*Aug 2024 – Dec 2025 · [wrapcapstone.com](https://wrapcapstone.com/) · [github.com/LianruiBruce/wrap](https://github.com/LianruiBruce/wrap) — 80+ ⭐ / 9 forks / 192 commits / 4 contributors*

* **Top-1 Capstone + Staff Choice Award.** Led design and full-stack development of a legal-document summarization platform deployed on **AWS** with **NGINX**-secured communication.
* Built a Chrome extension that auto-detects Terms / Privacy Policies / Contract Agreements on the page and pipes them through a **Python/PyTorch + Flask NLP backend (CUDA-accelerated)** plus the **Claude API** for summarization and report generation — lifting document-processing efficiency by **40%**.
* Connected extension and web app via JWT auth so users can upload documents, generate PDF reports, and access historical and current summaries from a single account.
* Open-sourced under MIT; production deployment served real users at [wrapcapstone.com](https://wrapcapstone.com/).

**High-Performance Ray Tracing with DDA Algorithm**
*Computer Graphics Engineer · C++, OpenGL, GPU Programming · Apr 2024 – May 2024*
* Implemented the Digital Differential Analyzer (DDA) line algorithm on the GPU, bypassing CPU floating-point operations.
* Achieved a **50% reduction** in ray-tracing computation time.
* Simulated complex visual effects, including dynamic objects and mirror rendering, resolving oversampling issues to ensure visual fidelity.

**Machine Learning Educational Application**
*Software Engineer · C++, Qt, Box2D · Nov 2023 – Dec 2023*
* Architected an MVC-based educational tool to demonstrate Linear Regression concepts.
* Integrated **Box2D** for physics simulations and polynomial curve generation, visualizing mathematical principles through interactive gameplay.

## 🛠 Technical Proficiency

* **Languages:** Python, C/C++, C#, Java, JavaScript, TypeScript, SQL, MATLAB, HTML/CSS
* **AI / ML:** PyTorch, HuggingFace Transformers, PEFT / LoRA, TRL (SFT, DPO), vLLM, torchrun DDP, scikit-learn, prompt engineering, evaluation (ECE, AUROC, risk-coverage curves)
* **Backend / Web:** Node.js, Express.js, Django, Flask, React, Material-UI, Axios, Mongoose, REST APIs, Socket.IO
* **Data / Infra:** MongoDB, MySQL, Docker, AWS, NGINX, Git, multi-GPU Linux clusters (CUDA)
* **Specializations:** LLM training and evaluation, Human–AI Collaboration, full-stack delivery, computer graphics, Unreal Engine 5 (Blueprints)

---

*Feel free to connect via [LinkedIn](https://linkedin.com/in/lianrui-geng-01533a294) or explore my work on [GitHub](https://github.com/LianruiBruce).*
