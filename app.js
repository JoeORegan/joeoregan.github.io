const { createApp } = Vue;

createApp({
    components: {
        SiteFooter: window.SiteFooter
    },
    data() {
        return {
            menuItems: [
                { name: "Home", url: "./index.html", title: "Home" },
                { name: "Unity", url: "./unity.html", title: "Unity projects" },
                { name: "JavaScript", url: "./javascript.html", title: "JavaScript projects" },
                { name: "Angular", url: "./angular.html", title: "Angular projects" },
                { name: "Cocos2D-X", url: "./cocos2dx.html", title: "Cocos2D-X projects" },
                { name: "SDL", url: "./sdl.html", title: "SDL projects" },
                { name: "RayLib", url: "./raylib.html", title: "RayLib projects" },
                { name: "About", url: "./about.html", title: "About" }
            ]
        };
    },
    computed: {
        currentPage() {
            const path = window.location.pathname;
            const file = path.substring(path.lastIndexOf("/") + 1);
            return file || "index.html";
        }
    },
    methods: {
        isActive(item) {
            return item.url.replace("./", "") === this.currentPage;
        }
    }
}).mount("#app");