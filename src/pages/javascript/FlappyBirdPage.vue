<template>
  <article class="page-panel project-page">
    <header class="project-header">
      <h2>Flappy Bird JS</h2>
      <p class="project-subtitle">
        JavaScript remake of Flappy Bird with classic one-button gameplay.
      </p>
    </header>

    <section class="project-meta">
      <p><strong>Status:</strong> Complete</p>
      <p>
        <strong>Links: </strong>
        <a
          href="https://joeoregan.github.io/JS-FlappyBird/"
          target="_blank"
          rel="noopener"
          >Live Demo</a
        >
        ·
        <a
          href="https://github.com/JoeORegan/JS-FlappyBird"
          target="_blank"
          rel="noopener"
          >Source Code</a
        >
      </p>
    </section>

    <section class="project-image-wrap">
      <img
        src="/images/flappybird/cover.png"
        alt="Flappy Bird gameplay screenshot"
        class="project-image"
      />
    </section>

    <section>
      <h3>Overview</h3>
      <p>
        Flappy Bird JS is a browser version of the arcade classic focused on
        timing, obstacle avoidance, and high-score chasing.
      </p>
    </section>

    <section>
      <h3>Features</h3>
      <ul>
        <li>Simple one-button controls</li>
        <li>Pipe obstacle generation and collision detection</li>
        <li>Score and top score tracking</li>
        <li>Audio and gameplay settings panel</li>
      </ul>
    </section>

    <section>
      <h3>Tech Stack</h3>
      <ul>
        <li>Vanilla JavaScript</li>
        <li>HTML5 Canvas</li>
        <li>HTML + CSS</li>
      </ul>
    </section>
  </article>
</template>

<style scoped>
.project-page {
  display: grid;
  gap: 1rem;
}

.project-header h2 {
  margin: 0 0 0.25rem 0;
}

.project-subtitle {
  margin: 0;
  opacity: 0.9;
}

.project-meta p {
  margin: 0.25rem 0;
}

.project-image-wrap {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.75rem;
}

.project-image {
  width: 100%;
  max-width: 920px;
  border-radius: 6px;
  display: block;
  margin: 0 auto;
}
</style>
