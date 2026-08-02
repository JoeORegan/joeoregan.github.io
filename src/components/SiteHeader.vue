<template>
  <header class="topbar">
    <nav class="topnav container" aria-label="Primary">
      <RouterLink
        v-for="item in menuItems"
        :key="item.name"
        :to="item.to"
        class="nav-link"
        :title="item.title"
      >
        {{ item.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
const menuItems = [
  { name: "Home", to: "/", title: "Home" },
  { name: "Unity", to: "/unity", title: "Unity projects" },
  { name: "JavaScript", to: "/javascript", title: "JavaScript projects" },
  { name: "Angular", to: "/angular", title: "Angular projects" },
  { name: "Cocos2D-X", to: "/cocos2dx", title: "Cocos2D-X projects" },
  { name: "SDL", to: "/sdl", title: "SDL projects" },
  { name: "RayLib", to: "/raylib", title: "RayLib projects" },
  { name: "About", to: "/about", title: "About" },
];
</script>
