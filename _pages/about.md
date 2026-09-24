---
layout: home
permalink: /
title: "AI Research & Engineering"
excerpt: "Graduate researcher at UNC Chapel Hill working on pluralistic alignment, LLM post-training, and multi-agent systems."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-title">
  <div class="home-hero__copy">
    <p class="home-eyebrow"><span class="home-status-dot" aria-hidden="true"></span> UNC Chapel Hill · ZDlab</p>
    <h1 id="home-title">Building AI systems that <em>listen, reason, and adapt.</em></h1>
    <p class="home-lede">I'm Lianrui (Bruce) Geng, a Computer Science master's student and Graduate Research Assistant at UNC Chapel Hill. My work connects <strong>pluralistic alignment</strong>, <strong>LLM post-training</strong>, and <strong>multi-agent systems</strong>.</p>
    <div class="home-hero__actions">
      <a class="home-button home-button--primary" href="#research">Explore my research <span aria-hidden="true">↗</span></a>
      <a class="home-button home-button--secondary" href="mailto:lianruig@unc.edu">Get in touch</a>
    </div>
    <p class="home-availability">Open to 2027 full-time roles in applied AI and LLM engineering.</p>
  </div>
  <figure class="home-portrait">
    <div class="home-portrait__frame">
      <img src="/images/lianrui-coding-anime.webp" alt="Anime-style illustration of Lianrui Geng coding at a laptop" width="900" height="1125" fetchpriority="high">
    </div>
    <figcaption>
      <span>Lianrui Geng</span>
      <span>Researcher · Engineer</span>
    </figcaption>
  </figure>
</section>

<div class="home-at-a-glance" aria-label="At a glance">
  <div><span class="home-at-a-glance__label">Current role</span><strong>Graduate Research Assistant</strong><span>ZDlab · UNC Chapel Hill</span></div>
  <div><span class="home-at-a-glance__label">Education</span><strong>M.S. Computer Science</strong><span>Expected May 2027</span></div>
  <div><span class="home-at-a-glance__label">Research focus</span><strong>Alignment + agents</strong><span>From experiments to systems</span></div>
</div>

<section id="research" class="home-section" aria-labelledby="research-title">
  <div class="home-section__heading">
    <div>
      <p class="home-section__eyebrow">01 / Research</p>
      <h2 id="research-title">Making models more useful for more people.</h2>
    </div>
    <p>I study how to spend limited feedback and compute where they matter most, then test whether those decisions improve trained models and real tasks.</p>
  </div>
  <div class="home-research-grid">
    <article class="home-research-card">
      <div class="home-research-card__top"><span class="home-research-card__number">01</span><span class="home-pill">LLM post-training</span></div>
      <h3>W-CABLE</h3>
      <p class="home-research-card__subtitle">Welfare-aware preference acquisition for pluralistic alignment</p>
      <p>When preference labels are scarce, whose feedback should a model request? W-CABLE estimates each query's benefit and allocates attention across users using explicit welfare priorities.</p>
      <ul>
        <li>Evaluated on six Roleplay collections and four OpinionQA regional subsets.</li>
        <li>Studied downstream Qwen3-4B, LoRA, and DPO training on four Roleplay collections.</li>
      </ul>
      <div class="home-tags"><span>Preference learning</span><span>DPO</span><span>Evaluation</span></div>
    </article>
    <article class="home-research-card">
      <div class="home-research-card__top"><span class="home-research-card__number">02</span><span class="home-pill">Agent systems</span></div>
      <h3>Multi-agent orchestration</h3>
      <p class="home-research-card__subtitle">Budget-aware decisions for complex workflows</p>
      <p>A Bayesian controller tracks uncertainty across dependent subtasks and decides when to execute, refine, verify, or stop. Two-step lookahead values evidence that can change the next decision.</p>
      <ul>
        <li>Uses offline calibration and online belief updates without an LLM planner at every step.</li>
        <li>Evaluated in controlled simulations and on the 57-task AppWorld development split.</li>
      </ul>
      <div class="home-tags"><span>Multi-agent systems</span><span>Bayesian control</span><span>Verification</span></div>
    </article>
  </div>
</section>

<section id="projects" class="home-section" aria-labelledby="projects-title">
  <div class="home-section__heading">
    <div>
      <p class="home-section__eyebrow">02 / Selected work</p>
      <h2 id="projects-title">Research ideas, built and tested.</h2>
    </div>
    <p>My background spans generative vision, evaluation, and full-stack engineering. I like turning an idea into a system people can actually use.</p>
  </div>
  <div class="home-project-grid">
    <article class="home-project-card">
      <span class="home-project-card__mark" aria-hidden="true">IG</span>
      <p class="home-project-card__type">Generative vision · Ongoing</p>
      <h3>Identity-preserving generation</h3>
      <p>Investigating how facial geometry, local appearance, and background edits affect identity consistency. A controlled pilot compares five generation workflows across 50 images.</p>
      <span class="home-project-card__tools">ArcFace · human evaluation · image editing</span>
    </article>
    <article class="home-project-card">
      <span class="home-project-card__mark" aria-hidden="true">FM</span>
      <p class="home-project-card__type">Generative modeling · 2025</p>
      <h3>Latent flow matching for inpainting</h3>
      <p>Extended latent flow matching to conditional image restoration with a frozen VAE, mask-conditioned velocity field, attention U-Net, and ODE sampling.</p>
      <span class="home-project-card__tools">PyTorch · Flow Matching · CelebA-HQ</span>
    </article>
    <article class="home-project-card">
      <span class="home-project-card__mark" aria-hidden="true">W</span>
      <p class="home-project-card__type">Full-stack AI · 2024</p>
      <h3>Wrap: legal document analysis</h3>
      <p>Led the capstone team building a Chrome extension and web app for legal-document summaries and risk reports. The project received Top Capstone and Staff Choice awards.</p>
      <a class="home-text-link" href="https://github.com/LianruiBruce/wrap">View project on GitHub <span aria-hidden="true">↗</span></a>
    </article>
  </div>
</section>

<section id="background" class="home-section home-background" aria-labelledby="background-title">
  <div class="home-section__heading">
    <div>
      <p class="home-section__eyebrow">03 / Background</p>
      <h2 id="background-title">Research depth. Engineering range.</h2>
    </div>
  </div>
  <div class="home-background__grid">
    <div class="home-background__education">
      <h3>Education</h3>
      <div class="home-timeline-item"><span>2025 — 2027</span><strong>University of North Carolina at Chapel Hill</strong><p>M.S. in Computer Science · GPA 4.0/4.0<br>Graduate Research Assistant, ZDlab</p></div>
      <div class="home-timeline-item"><span>2021 — 2024</span><strong>University of Utah</strong><p>B.S. in Computer Science, minor in Mathematics<br>Dean's List (5 semesters)</p></div>
    </div>
    <div class="home-background__skills">
      <h3>Tools I work with</h3>
      <p>Research is strongest when experiments are reproducible and the system around them works reliably.</p>
      <div class="home-skill-list"><span>Python</span><span>PyTorch</span><span>Hugging Face</span><span>LoRA / DPO</span><span>Linux</span><span>Git</span><span>Docker</span><span>React</span><span>Flask</span><span>AWS</span></div>
      <a class="home-text-link" href="/cv/">Read the full CV <span aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>

<section id="contact" class="home-contact" aria-labelledby="contact-title">
  <div>
    <p class="home-section__eyebrow">04 / Contact</p>
    <h2 id="contact-title">Let's build useful AI systems.</h2>
    <p>I'm interested in applied AI, LLM post-training, and agent systems roles starting in 2027. I'd be glad to talk about research or engineering opportunities.</p>
  </div>
  <div class="home-contact__links">
    <a href="mailto:lianruig@unc.edu">lianruig@unc.edu <span aria-hidden="true">↗</span></a>
    <a href="https://github.com/LianruiBruce">GitHub <span aria-hidden="true">↗</span></a>
    <a href="https://www.linkedin.com/in/lianrui-geng-01533a294/">LinkedIn <span aria-hidden="true">↗</span></a>
  </div>
</section>
