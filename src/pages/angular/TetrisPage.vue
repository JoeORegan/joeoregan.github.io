<template>
  <article class="page-panel project-page">
    <header class="project-header">
      <h2>Angular Tetris</h2>
      <p class="project-subtitle">
        Angular + TypeScript implementation of Tetris with canvas gameplay,
        score/high-score tracking, and classic keyboard controls.
      </p>
    </header>

    <section class="project-meta">
      <p><strong>Status:</strong> Active</p>
      <p>
        <strong>Links: </strong>
        <a
          href="https://joeoregan.github.io/Angular-Tetris/"
          target="_blank"
          rel="noopener"
          >Live Demo</a
        >
        ·
        <a
          href="https://github.com/JoeORegan/Angular-Tetris"
          target="_blank"
          rel="noopener"
          >Source Code</a
        >
      </p>
    </section>

    <section class="project-video-wrap">
      <h3>Gameplay</h3>
      <div class="video-frame">
        <iframe
          src="https://www.youtube.com/embed/xD_03mSvV3s"
          title="Angular Tetris Trailer"
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
        src="@/assets/tetris/cover.jpg"
        alt="Angular Tetris gameplay screenshot"
        class="project-image"
      />
    </section>

    <section>
      <h3>Overview</h3>
      <p>
        Angular Tetris is an arcade-style project focused on tetromino movement,
        rotation, placement, line clears, and score progression.
      </p>
    </section>

    <section>
      <h3>Features</h3>
      <ul>
        <li>Tetromino movement, rotation, and placement</li>
        <li>Line clear detection and collision handling</li>
        <li>Score and high-score tracking</li>
        <li>Keyboard controls and game state updates</li>
      </ul>
    </section>

    <section>
      <h3>Tech Stack</h3>
      <ul>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>HTML5 Canvas</li>
        <li>CSS</li>
      </ul>
    </section>
  </article>
</template>
