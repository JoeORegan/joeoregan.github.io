<template>
  <article class="page-panel project-page">
    <header class="project-header">
      <h2>SpaceQuest</h2>
      <p class="project-subtitle">
        2D browser game experiment built with JavaScript.
      </p>
    </header>

    <section class="project-meta">
      <p><strong>Status:</strong> In Progress</p>
      <p>
        <strong>Links: </strong>
        <a
          href="https://joeoregan.github.io/JS-SpaceQuest/"
          target="_blank"
          rel="noopener"
          >Live Demo</a
        >
        ·
        <a
          href="https://github.com/JoeORegan/JS-SpaceQuest"
          target="_blank"
          rel="noopener"
          >Source Code</a
        >
      </p>
    </section>

    <section class="project-video-wrap">
      <h3>Trailer</h3>
      <div class="video-frame">
        <iframe
          src="https://www.youtube.com/embed/TVLTJW5FwQs"
          title="SpaceQuest Trailer"
          loading="lazy"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <section class="project-image-wrap">
      <img
        src="/images/spacequest/cover.png"
        alt="SpaceQuest gameplay screenshot"
        class="project-image"
      />
    </section>

    <section>
      <h3>Overview</h3>
      <p>
        SpaceQuest is a small arcade-style project focused on movement,
        shooting, collision detection, and score progression.
      </p>
    </section>

    <section>
      <h3>Features</h3>
      <ul>
        <li>Player movement and shooting</li>
        <li>Enemy waves and collision handling</li>
        <li>Score + high score tracking</li>
        <li>Keyboard controls</li>
      </ul>
    </section>

    <section>
      <h3>Tech Stack</h3>
      <ul>
        <li>Vue 3 + Vue Router</li>
        <li>Vanilla JavaScript game loop</li>
        <li>HTML5 Canvas</li>
        <li>CSS</li>
      </ul>
    </section>
  </article>
</template>
