class ProfilePage
{
    static get demoUsernameField() {
        return cy.get('input[type=text][aria-describedby=demo_username_label]');
    }

    static get demoPasswordField() {
        return cy.get('input[type=text][aria-describedby=demo_password_label]');

    }

    static get usernameInput() {
        return cy.get('input[type=text]#txt-username');
    }

    static get passwordInput() {
        return cy.get('input[type=password]#txt-password');
    }

    static get loginBtn() {
        return cy.get('button#btn-login');
    }
}

export default ProfilePage;