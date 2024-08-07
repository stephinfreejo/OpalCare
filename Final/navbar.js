document.addEventListener('DOMContentLoaded', function () {
    const navItems = [
        { name: 'Home', href: 'index.html' },
        { name: 'Plans for you', href: 'plans.html' },
        { name: 'More', href: 'areawise.html' },
        { name: 'About us', href: 'about.html' },

    ];

    const navbarNav = document.querySelector('.navbar-nav');
    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';
        if (item.name === 'More') {
            // Create a dropdown menu
            li.className = 'nav-item dropdown';
            const a = document.createElement('a');
            a.className = 'nav-link dropdown-toggle';
            a.href = '#';
            a.role = 'button';
            a.dataset.bsToggle = 'dropdown';
            a.ariaExpanded = 'false';
            a.textContent = item.name;
            const ul = document.createElement('ul');
            ul.className = 'dropdown-menu';
            const dropdownItems = [
                { name: 'Hospitals', href: 'areawise.html' },
                { name: 'Latest Studies and News', href: 'home.html' },
                { name: 'Lifestyle Diseases', href: 'life.html' },
                { name: 'Vaccinations info', href: 'vacc.html' },
                { name: 'Contact us', href: 'contact.html' }


            ];
            dropdownItems.forEach(dropdownItem => {
                const dropdownLi = document.createElement('li');
                const dropdownA = document.createElement('a');
                dropdownA.className = 'dropdown-item';
                dropdownA.href = dropdownItem.href;
                dropdownA.textContent = dropdownItem.name;
                dropdownLi.appendChild(dropdownA);
                ul.appendChild(dropdownLi);
            });
            li.appendChild(a);
            li.appendChild(ul);
        } else {
            const a = document.createElement('a');
            a.className = 'nav-link';
            a.href = item.href;
            a.textContent = item.name;
            li.appendChild(a);
        }
        navbarNav.appendChild(li);
    });
});