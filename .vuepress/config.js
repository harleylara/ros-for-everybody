const getSidebar = require("./get_sidebar.js");

module.exports = {
    title: "ROS for Everybody",
    base: "/ros-for-everybody",
    locales: {
        "/en/": {
            lang: "en-US",
            title: "ROS for Everybody",
            description: "Collection of notes related to ROS.",
        },
        "/es/": {
            lang: "es-ES",
            title: "ROS para Todos",
            description: "Colección de notas relacionadas con ROS.",
        },
    },
    plugins: [
        "@vuepress/active-header-links",
        "@vuepress/back-to-top",
        "@vuepress/medium-zoom",
        "@vuepress/search",
        {
            searchMaxSuggestions: 10,
        },
        "vuepress-plugin-smooth-scroll",
        "vuepress-plugin-table-of-contents",
    ],
    themeConfig: {
        locales: {
            "/en/": {
                selectText: "Languages",
                label: "English",
                ariaLabel: "Languages",
                editLinkText: "Edit this page on GitHub",
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh",
                    },
                },
                algolia: {},
                sidebar: {
                    "/en/": getSidebar.sidebar("en"),
                },
            },
            "/es/": {
                selectText: "Idiomas",
                label: "Español",
                editLinkText: "Editar esta página en GitHub",
                serviceWorker: {
                    updatePopup: {
                        message: "Nuevo contenido disponible.",
                        buttonText: "Actualizar",
                    },
                },
                algolia: {},
                sidebar: {
                    "/es/": getSidebar.sidebar("es"),
                },
            },
        },
    },
};
