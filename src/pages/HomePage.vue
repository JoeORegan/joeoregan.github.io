<template>
  <section class="page-panel">
    <h1>Joe O'Regan Games</h1>
    <p>Game dev projects by platform and framework.</p>
  </section>

  <section class="project-strip">
    <div class="project-strip__content">
      <h2>SpaceQuest</h2>
      <p>
        Arcade-style JavaScript space shooter focused on movement, collisions,
        waves, and score progression.
      </p>
      <RouterLink class="project-strip__link" to="/javascript/spacequest">
        View SpaceQuest page →
      </RouterLink>
      <br />
      <a
        class="project-strip__link"
        href="https://joeoregan.github.io/JS-SpaceQuest/"
        target="_blank"
        rel="noopener"
      >
        Play SpaceQuest ↗
      </a>
    </div>

    <div class="project-strip__media">
      <img
        src="/images/spacequest/cover.png"
        alt="SpaceQuest cover art"
        class="project-strip__image"
      />
    </div>
  </section>
</template>
