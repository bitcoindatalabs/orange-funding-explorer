document.addEventListener('DOMContentLoaded', () => {
    if (typeof BitcoinLabsApp !== 'undefined') {
        BitcoinLabsApp.init({
            isApp: true,
            appName: 'orange-funding-explorer',
            appHomeUrl: 'index.html',
            navLinks: [
                { name: 'Grantees', url: 'index.html' },
                { name: 'Sponsors', url: 'funders.html' },
                { name: 'Ecosystem Overview', url: 'dashboard.html' }
            ],
            footerLinks: [],
            suiteLinks: [
                { name: 'orange-funding-explorer', url: 'https://bitcoindatalabs.github.io/orange-funding-explorer/', icon: 'fas fa-search-dollar' },
                { name: 'orange-ecosystem-map', url: 'https://bitcoindatalabs.github.io/orange-ecosystem-map/', icon: 'fas fa-project-diagram' }
            ]
        });
    }
});
