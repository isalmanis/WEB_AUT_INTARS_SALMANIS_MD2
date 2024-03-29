class SideMenu {
    static menuActiveClass = 'active';

    static get menuBtn() {
        return cy.get('a#menu-toggle');
    }

    static get sideMenu() {
        return cy.get('nav#sidebar-wrapper');
    }

    static get allSideMenuItems() {
        return cy.get('ul.sidebar-nav>li>a');
    }

    static get homeMenuItem() {
        return SideMenu.allSideMenuItems.contains('Home');
    }

    static get historyMenuItem() {
        return SideMenu.allSideMenuItems.contains('History');
    }

    static get profileMenuItem() {
        return SideMenu.allSideMenuItems.contains('Profile');
    }

    static get logoutMenuItem() {
        return SideMenu.allSideMenuItems.contains('Logout');
    }
}

export default SideMenu;