import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import UnityPage from "./pages/UnityPage.vue";
import JavaScriptPage from "./pages/JavaScriptPage.vue";
import SpaceQuestPage from "./pages/javascript/SpaceQuestPage.vue";
import AntibodyPage from "./pages/javascript/AntibodyPage.vue";
import FlappyBirdPage from "./pages/javascript/FlappyBirdPage.vue";
import SpaceGamePage from "./pages/javascript/SpaceGamePage.vue";
import NinjaGamePage from "./pages/javascript/NinjaGamePage.vue";
import TetrisPage from "./pages/angular/TetrisPage.vue";
import AngularPage from "./pages/AngularPage.vue";
import Cocos2dxPage from "./pages/Cocos2dxPage.vue";
import Cocos2dxSpaceGamePage from "./pages/cocos2dx/SpaceGamePage.vue";
import Cocos2dxNinjaGamePage from "./pages/cocos2dx/NinjaGamePage.vue";
import SdlPage from "./pages/SdlPage.vue";
import SdlAntibodyPage from "./pages/sdl/AntibodyPage.vue";
import RaylibPage from "./pages/RaylibPage.vue";
import AboutPage from "./pages/AboutPage.vue";

const routes = [
    { path: "/", name: "home", component: HomePage, meta: { title: "Home" } },
    { path: "/unity", name: "unity", component: UnityPage, meta: { title: "Unity" } },

    {
        path: "/javascript",
        name: "javascript",
        component: JavaScriptPage,
        meta: { title: "JavaScript" },
        children: [
            {
                path: "antibody",
                name: "javascript-antibody",
                component: AntibodyPage,
                meta: { title: "Antibody" }
            },
            {
                path: "spacequest",
                name: "javascript-spacequest",
                component: SpaceQuestPage,
                meta: { title: "SpaceQuest" }
            },
            {
                path: "flappybird",
                name: "javascript-flappybird",
                component: FlappyBirdPage,
                meta: { title: "Flappy Bird" }
            },
            {
                path: "tetris",
                name: "javascript-tetris",
                component: TetrisPage,
                meta: { title: "Tetris" }
            },
            {
                path: "spacegame",
                name: "javascript-spacegame",
                component: SpaceGamePage,
                meta: { title: "Space Game" }
            },
            {
                path: "ninjagame",
                name: "javascript-ninjagame",
                component: NinjaGamePage,
                meta: { title: "Ninja Game" }
            }
        ]
    },

    {
        path: "/angular",
        name: "angular",
        component: AngularPage,
        meta: { title: "Angular" },
        children: [
            {
                path: "tetris",
                name: "angular-tetris",
                component: TetrisPage,
                meta: { title: "Tetris" }
            }
        ]
    },

    {
        path: "/cocos2dx",
        name: "cocos2dx",
        component: Cocos2dxPage,
        meta: { title: "Cocos2D-X" },
        children: [
            {
                path: "spacegame",
                name: "cocos2dx-spacegame",
                component: Cocos2dxSpaceGamePage,
                meta: { title: "Cocos2D-X Space Game" }
            },
            {
                path: "ninjagame",
                name: "cocos2dx-ninjagame",
                component: Cocos2dxNinjaGamePage,
                meta: { title: "Cocos2D-X Ninja Game" }
            }
        ]
    },
    {
        path: "/sdl",
        name: "sdl",
        component: SdlPage,
        meta: { title: "SDL" },
        children: [
            {
                path: "antibody",
                name: "sdl-antibody",
                component: SdlAntibodyPage,
                meta: { title: "Antibody (SDL2)" }
            }
        ]
    },

    { path: "/raylib", name: "raylib", component: RaylibPage, meta: { title: "Raylib" } },
    { path: "/about", name: "about", component: AboutPage, meta: { title: "About" } }
];

const router = createRouter({
    history: createWebHashHistory("/"),
    routes
});

router.afterEach((to) => {
    document.title = to.meta?.title ? `${to.meta.title} | Joe Games` : "Joe Games";
});

export default router;