<template>
  <section class="page-panel">
    <h1>Joe O'Regan Games</h1>
    <p>Game dev projects by platform and framework.</p>
  </section>

  <section class="project-strip">
    <div class="project-strip__content">
      <h2>Antibody</h2>
      <p>
        Antibody JS is an action shooter where you navigate inside the body,
        fight enemy cells, protect blood cells, and survive increasingly intense
        waves. It's a JavaScript port of my third-year C++ game project.
      </p>
      <RouterLink class="project-strip__link" to="/javascript/antibody">
        View Antibody JS page →
      </RouterLink>
      <br />
      <a
        class="project-strip__link"
        href="https://joeoregan.github.io/JS-Antibody/"
        target="_blank"
        rel="noopener"
      >
        Play Antibody JS ↗
      </a>
      <br />
      <a
        class="project-strip__link"
        href="https://github.com/JoeORegan/JS-Antibody"
        target="_blank"
        rel="noopener"
      >
        Source Code ↗
      </a>
    </div>

    <div class="project-strip__media">
      <img
        src="/images/antibody/cover.png"
        alt="Antibody JS cover art"
        class="project-strip__image"
      />
    </div>
  </section>

  <section class="project-strip">
    <div class="project-strip__content">
      <h2>Space Quest</h2>
      <p>
        Arcade-style JavaScript space shooter focused on movement, collisions,
        waves, and score progression.
      </p>
      <RouterLink class="project-strip__link" to="/javascript/spacequest">
        View Space Quest page →
      </RouterLink>
      <br />
      <a
        class="project-strip__link"
        href="https://joeoregan.github.io/JS-SpaceQuest/"
        target="_blank"
        rel="noopener"
      >
        Play Space Quest ↗
      </a>
      <br />
      <a
        class="project-strip__link"
        href="https://github.com/JoeORegan/JS-SpaceQuest"
        target="_blank"
        rel="noopener"
      >
        Source Code ↗
      </a>
    </div>

    <div class="project-strip__media">
      <img
        src="/images/spacequest/cover.png"
        alt="Space Quest cover art"
        class="project-strip__image"
      />
    </div>
  </section>

  <section class="project-strip">
    <div class="project-strip__content">
      <h2>Flappy Bird</h2>
      <p>
        JavaScript remake of Flappy Bird with canvas gameplay, score tracking,
        and classic one-button controls.
      </p>

      <RouterLink class="project-strip__link" to="/javascript/flappybird">
        View Flappy Bird page →
      </RouterLink>
      <br />
      <div class="project-strip__links">
        <a
          class="project-strip__link"
          href="https://joeoregan.github.io/JS-FlappyBird/"
          target="_blank"
          rel="noopener"
        >
          Play Flappy Bird ↗
        </a>
        <br />
        <a
          class="project-strip__link"
          href="https://github.com/JoeORegan/JS-FlappyBird"
          target="_blank"
          rel="noopener"
        >
          Source Code ↗
        </a>
      </div>
    </div>

    <div class="project-strip__media">
      <img
        src="/images/flappybird/cover.png"
        alt="Flappy Bird gameplay cover"
        class="project-strip__image"
      />
    </div>
  </section>
</template>
