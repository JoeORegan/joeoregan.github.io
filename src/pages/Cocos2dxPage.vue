<template>
  <section class="page-panel">
    <h1>Cocos2D-X Projects</h1>
    <p>Cocos2D-X games, prototypes, and experiments.</p>

    <nav class="subnav" aria-label="Cocos2D-X project pages">
      <RouterLink class="subnav-link" to="/cocos2dx/spacegame">
        Space Game
      </RouterLink>
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
