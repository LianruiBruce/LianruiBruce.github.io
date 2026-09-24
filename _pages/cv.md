---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

I am a Computer Science master's student at the University of North Carolina at Chapel Hill and a Graduate Research Assistant at ZDlab. I work on LLM post-training, preference learning, and multi-agent systems. I expect to graduate in **May 2027** and am interested in full-time applied AI and research engineering roles.

## Education

**University of North Carolina at Chapel Hill** · M.S. in Computer Science<br>
August 2025 – May 2027 (expected) · GPA **4.0/4.0**<br>
Graduate Research Assistant, ZDlab · Advisor: Prof. Zhun Deng

**University of Utah** · B.S. in Computer Science, minor in Mathematics<br>
August 2021 – December 2024 · GPA **3.55/4.0**<br>
Dean's List (5 semesters) · Utah Global Scholarship (4 years)

## Research

### W-CABLE: Welfare-Aware Preference Acquisition

*Co-first-author research manuscript · ZDlab · 2026–present*

I primarily lead the preference acquisition and post-training experiments for a framework that allocates limited human feedback across diverse users. The study covers **six Roleplay collections and four OpinionQA regional subsets**, comparing against random, entropy, and reference-disagreement acquisition. On four main Roleplay collections, I evaluated **28 Qwen3-4B + LoRA + DPO training runs**, including generalization to held-out personas. At a 20% query budget, the acquisition-stage mean utility improved by **2.86–3.24 percentage points** over the strongest matched baseline across the main welfare settings.

### Multi Agent Orchestration

*Co-first-author research manuscript · 2026–present*

This project studies budget-aware orchestration for multi-agent workflows. A Bayesian controller tracks uncertainty over dependent subtask outputs and chooses when to execute, refine, verify, or submit. Two-step lookahead values the information gained from verification when it can change a later action. We evaluated the approach in controlled simulations and on the **57-task AppWorld development split**. In the five-node simulation, task success at budget 7.5 reached **26.0%**, compared with **18.5%** for the strongest baseline.

### Identity-Preserving Image Generation

*Course research project · Advisor: Prof. Xiaoming Liu · Ongoing*

Studying how facial geometry, local appearance, and background edits affect identity preservation. An initial background-replacement study compares five generation workflows across 50 samples. Controlled evaluation with ArcFace similarity, blinded human judgments, and GPT-assisted scoring is in design.

### Image Inpainting with Latent Flow Matching

*Course research project · Fall 2025*

Extended latent flow matching to conditional image restoration using a frozen VAE, mask-conditioned latent velocity field, attention U-Net, and ODE sampling. In the project evaluation, the model reached **PSNR 38.9 / FID 2.7** on CelebA-HQ and **PSNR 42.4 / FID 1.3** on Landscape-HQ.

## Engineering and experience

**Wrap — web legal-document analysis** · Full-stack development lead · 2024<br>
University of Utah capstone project; received **Top Capstone Project** and **Staff Choice Award**. Built a Chrome extension, web app, and NLP service for document detection, extraction, summaries, and risk reports, using React, Node.js, MongoDB, Flask, BART-MNLI, LegalPro-BERT, and the Claude API. [Project repository](https://github.com/LianruiBruce/wrap).

**Aureum Gale LLC** · Game Development Engineer Intern · May–August 2024<br>
Contributed remotely to an Unreal Engine 5 3D game prototype, maintained gameplay systems, and participated in Git-based review and iteration.

## Skills

**Research and modeling:** preference learning, DPO, SFT, GRPO, LoRA, agent orchestration, experiment design, model evaluation, Flow Matching.<br>
**Programming:** Python, C++, JavaScript/TypeScript, SQL.<br>
**Frameworks and tools:** PyTorch, Hugging Face Transformers, Linux, Git, Docker, AWS, React, Node.js, Flask, MongoDB.

For a current PDF résumé or research discussion, [email me](mailto:lianruig@unc.edu).
