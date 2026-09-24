---
layout: home
title: "Curriculum Vitae"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

<article class="cv-document">
  <header class="cv-intro">
    <p class="cv-intro__label">Curriculum vitae</p>
    <h1>Lianrui Geng</h1>
    <p>Computer Science master's student and Graduate Research Assistant at UNC Chapel Hill. I work on pluralistic alignment, LLM post-training, and multi-agent systems, and expect to graduate in May 2027.</p>
    <div class="cv-intro__links"><a href="mailto:lianruig@unc.edu">Email</a><a href="https://github.com/LianruiBruce">GitHub</a><a href="https://www.linkedin.com/in/lianrui-geng-01533a294/">LinkedIn</a></div>
  </header>

  <section class="cv-section" aria-labelledby="cv-education">
    <h2 id="cv-education">Education</h2>
    <div class="cv-section__body">
      <div class="cv-entry"><div class="cv-entry__heading"><h3>University of North Carolina at Chapel Hill</h3><span>Aug 2025 – May 2027</span></div><p>M.S. in Computer Science (expected) · GPA <strong>4.0/4.0</strong><br>Graduate Research Assistant, ZDlab · Advisor: Prof. Zhun Deng</p></div>
      <div class="cv-entry"><div class="cv-entry__heading"><h3>University of Utah</h3><span>Aug 2021 – Dec 2024</span></div><p>B.S. in Computer Science, minor in Mathematics · GPA <strong>3.55/4.0</strong><br>Dean's List (5 semesters) · Utah Global Scholarship (4 years)</p></div>
    </div>
  </section>

  <section class="cv-section" aria-labelledby="cv-research">
    <h2 id="cv-research">Research</h2>
    <div class="cv-section__body">
      <div class="cv-entry" id="research-w-cable"><div class="cv-entry__heading"><h3>W-CABLE: Welfare-Aware Preference Acquisition</h3><span>2026–present</span></div><p class="cv-entry__meta">Co-first-author research manuscript · ZDlab</p><p>I primarily lead preference acquisition and post-training experiments for a framework that allocates limited human feedback across diverse users. The study covers six Roleplay collections and four OpinionQA regional subsets, comparing random, entropy, and reference-disagreement acquisition. I evaluated 28 Qwen3-4B + LoRA + DPO training runs on four main Roleplay collections, including generalization to held-out personas. At a 20% query budget, acquisition-stage mean utility improved by <strong>2.86–3.24 percentage points</strong> over the strongest matched baseline across the main welfare settings.</p></div>
      <div class="cv-entry" id="research-agents"><div class="cv-entry__heading"><h3>Multi-agent orchestration</h3><span>2026–present</span></div><p class="cv-entry__meta">Co-first-author research manuscript</p><p>A Bayesian controller tracks uncertainty over dependent subtask outputs and chooses when to execute, refine, verify, or submit. Two-step lookahead values the information gained from verification when it can change a later action. We evaluated the approach in controlled simulations and on the 57-task AppWorld development split. In the five-node simulation, task success at budget 7.5 reached <strong>26.0%</strong>, compared with <strong>18.5%</strong> for the strongest baseline.</p></div>
      <div class="cv-entry"><div class="cv-entry__heading"><h3>Identity-preserving image generation</h3><span>Ongoing</span></div><p class="cv-entry__meta">Course research project · Advisor: Prof. Xiaoming Liu</p><p>Studying how facial geometry, local appearance, and background edits affect identity preservation. An initial background-replacement study compares five generation workflows across 50 samples. Controlled evaluation with ArcFace similarity, blinded human judgments, and GPT-assisted scoring is in design.</p></div>
      <div class="cv-entry"><div class="cv-entry__heading"><h3>Image inpainting with latent flow matching</h3><span>Fall 2025</span></div><p class="cv-entry__meta">Course research project</p><p>Extended latent flow matching to conditional image restoration using a frozen VAE, mask-conditioned latent velocity field, attention U-Net, and ODE sampling. In the project evaluation, the model reached <strong>PSNR 38.9 / FID 2.7</strong> on CelebA-HQ and <strong>PSNR 42.4 / FID 1.3</strong> on Landscape-HQ.</p></div>
    </div>
  </section>

  <section class="cv-section" aria-labelledby="cv-engineering">
    <h2 id="cv-engineering">Engineering</h2>
    <div class="cv-section__body">
      <div class="cv-entry"><div class="cv-entry__heading"><h3>Wrap — web legal-document analysis</h3><span>2024</span></div><p class="cv-entry__meta">Full-stack development lead · University of Utah capstone</p><p>Built a Chrome extension, web app, and NLP service for document detection, extraction, summaries, and risk reports, using React, Node.js, MongoDB, Flask, BART-MNLI, LegalPro-BERT, and the Claude API. Received <strong>Top Capstone Project</strong> and <strong>Staff Choice Award</strong>. <a href="https://github.com/LianruiBruce/wrap">Project repository ↗</a></p></div>
      <div class="cv-entry"><div class="cv-entry__heading"><h3>Aureum Gale LLC</h3><span>May–Aug 2024</span></div><p class="cv-entry__meta">Game Development Engineer Intern · Remote</p><p>Contributed to an Unreal Engine 5 3D game prototype, maintained gameplay systems, and participated in Git-based review and iteration.</p></div>
    </div>
  </section>

  <section class="cv-section" aria-labelledby="cv-skills">
    <h2 id="cv-skills">Skills</h2>
    <div class="cv-section__body cv-skills">
      <p><strong>Research and modeling</strong> Preference learning, DPO, SFT, GRPO, LoRA, agent orchestration, experiment design, model evaluation, Flow Matching.</p>
      <p><strong>Programming</strong> Python, C++, JavaScript/TypeScript, SQL.</p>
      <p><strong>Frameworks and tools</strong> PyTorch, Hugging Face Transformers, Linux, Git, Docker, AWS, React, Node.js, Flask, MongoDB.</p>
    </div>
  </section>

  <p class="cv-close">Interested in full-time applied AI and research engineering roles starting in 2027. For a current PDF résumé or research discussion, <a href="mailto:lianruig@unc.edu">email me ↗</a></p>
</article>
