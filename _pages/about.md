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

<div class="portfolio-home">
  <section class="intro" aria-labelledby="home-title">
    <div class="intro__copy">
      <p class="intro__identity">Lianrui (Bruce) Geng <span aria-hidden="true">/</span> UNC Chapel Hill</p>
      <h1 id="home-title">AI systems for <span>more than one voice.</span></h1>
      <p class="intro__lede">I am a Computer Science master's student and Graduate Research Assistant at ZDlab. I work across pluralistic alignment, LLM post-training, and multi-agent systems, with an eye on whether research choices survive real training and deployment constraints.</p>
      <div class="intro__actions">
        <a href="#research">Explore research <span aria-hidden="true">↗</span></a>
        <a href="/cv/">Read my CV <span aria-hidden="true">↗</span></a>
      </div>
      <p class="intro__availability">Open to 2027 full-time roles in applied AI and LLM engineering.</p>
    </div>
    <figure class="intro__illustration">
      <img src="/images/lianrui-coding-anime.webp" alt="Cartoon illustration of Lianrui coding at a laptop" width="900" height="1125" fetchpriority="high">
    </figure>
  </section>

  <section id="research" class="portfolio-section" aria-labelledby="research-title">
    <header class="section-heading">
      <h2 id="research-title">Research</h2>
      <p>I study how to allocate limited feedback and computation, then measure what those decisions change downstream.</p>
    </header>
    <div class="research-list">
      <article class="research-piece">
        <div class="research-piece__lead">
          <p class="research-piece__category">Pluralistic alignment · 2026–present</p>
          <h3>W-CABLE</h3>
          <p class="research-piece__subtitle">Welfare-aware preference acquisition</p>
          <p class="research-piece__role">Co-first-author research manuscript · ZDlab</p>
        </div>
        <div class="research-piece__detail">
          <p>When preference labels are scarce, whose feedback should a model request? W-CABLE estimates the benefit of each query while accounting for differences in user welfare.</p>
          <p>My experiments span six Roleplay collections and four OpinionQA regional subsets. I also evaluated 28 Qwen3-4B + LoRA + DPO training runs on four Roleplay collections.</p>
          <p class="research-piece__evidence">At a 20% query budget, mean acquisition utility improved by 2.86–3.24 percentage points over the strongest matched baseline across the main welfare settings.</p>
        </div>
      </article>
      <article class="research-piece research-piece--reverse">
        <div class="research-piece__lead">
          <p class="research-piece__category">Agent systems · 2026–present</p>
          <h3>Multi-agent orchestration</h3>
          <p class="research-piece__subtitle">Budget-aware decisions for complex workflows</p>
          <p class="research-piece__role">Co-first-author research manuscript</p>
        </div>
        <div class="research-piece__detail">
          <p>A Bayesian controller tracks uncertainty across dependent subtasks and chooses when to execute, refine, verify, or stop. Two-step lookahead values evidence that can change the next action.</p>
          <p>We evaluated the approach in controlled simulations and on the 57-task AppWorld development split.</p>
          <p class="research-piece__evidence">In the five-node simulation at budget 7.5, task success reached 26.0%, compared with 18.5% for the strongest baseline.</p>
        </div>
      </article>
    </div>
  </section>

  <section id="projects" class="portfolio-section" aria-labelledby="projects-title">
    <header class="section-heading">
      <h2 id="projects-title">Selected projects</h2>
      <p>From controlled vision experiments to software that makes complicated documents easier to use.</p>
    </header>
    <div class="project-list">
      <article class="project-line">
        <div><h3>Identity-preserving generation</h3><span>Generative vision · Ongoing</span></div>
        <p>Studying how facial geometry, appearance, and background edits affect identity consistency. A pilot compares five generation workflows across 50 images.</p>
        <small>ArcFace · human evaluation</small>
      </article>
      <article class="project-line">
        <div><h3>Latent flow matching for inpainting</h3><span>Generative modeling · 2025</span></div>
        <p>Extended latent flow matching to conditional image restoration using a frozen VAE, mask-conditioned velocity field, attention U-Net, and ODE sampling.</p>
        <small>PyTorch · CelebA-HQ</small>
      </article>
      <article class="project-line">
        <div><h3>Wrap: legal document analysis</h3><span>Full-stack AI · 2024</span></div>
        <p>Led full-stack development of a Chrome extension and web app for legal-document summaries and risk reports. Received Top Capstone Project and Staff Choice awards. <a href="https://github.com/LianruiBruce/wrap">View project ↗</a></p>
        <small>React · Flask · NLP</small>
      </article>
    </div>
  </section>

  <section id="background" class="portfolio-section" aria-labelledby="background-title">
    <header class="section-heading">
      <h2 id="background-title">Background</h2>
      <p>Research depth, with enough engineering range to build and test complete systems.</p>
    </header>
    <div class="background-columns">
      <div>
        <h3>Education</h3>
        <div class="education-line"><span>2025–2027</span><div><strong>University of North Carolina at Chapel Hill</strong><p>M.S. Computer Science · GPA 4.0/4.0<br>Graduate Research Assistant, ZDlab</p></div></div>
        <div class="education-line"><span>2021–2024</span><div><strong>University of Utah</strong><p>B.S. Computer Science · Mathematics minor<br>Dean's List, five semesters</p></div></div>
      </div>
      <div>
        <h3>Tools and methods</h3>
        <p>Preference learning, DPO, LoRA, agent orchestration, Flow Matching, experimental design, and model evaluation.</p>
        <p>Python, PyTorch, Hugging Face, Linux, Git, Docker, React, Flask, and AWS.</p>
        <a class="text-arrow" href="/cv/">Full experience and skills <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>

  <section id="contact" class="contact-section" aria-labelledby="contact-title">
    <div>
      <h2 id="contact-title">Let's build useful AI.</h2>
      <p>I am interested in applied AI, LLM post-training, and agent systems roles starting in 2027.</p>
    </div>
    <div class="contact-section__links">
      <a class="contact-section__email" href="mailto:lianruig@unc.edu">lianruig@unc.edu <span aria-hidden="true">↗</span></a>
      <div><a href="https://github.com/LianruiBruce">GitHub</a><a href="https://www.linkedin.com/in/lianrui-geng-01533a294/">LinkedIn</a></div>
    </div>
  </section>
</div>
