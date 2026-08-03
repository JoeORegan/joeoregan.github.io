<template>
  <section class="page-panel">
    <h1>Angular Projects</h1>
    <p>Angular games, prototypes, and experiments.</p>

    <nav class="subnav" aria-label="Angular project pages">
      <RouterLink class="subnav-link" to="/angular/tetris">Tetris</RouterLink>
    </nav>

    <router-view />
  </section>
</template>

<style scoped>
.subnav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0.75rem 0 1rem;
}

.subnav-link {
  display: inline-block;
  padding: 0.45rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  text-decoration: none;
  color: #c5ced8;
  line-height: 1;
}

.subnav-link:hover {
  color: #f1f5f9;
  background: var(--hover);
}

.subnav-link.router-link-active {
  color: #fff;
  background: var(--active);
  border-color: var(--active);
}
</style>
