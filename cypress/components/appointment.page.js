class AppointmentPage {

    static get AllConfirmationFields() {
        return cy.get('section#summary p');
    }

    static get FacilityConfirmationField() {
        return AppointmentPage.AllConfirmationFields.get('#facility');
    }

    static get HospitalReadmissionConfirmationField() {
        return AppointmentPage.AllConfirmationFields.get('#hospital_readmission');
    }

    static get HealthCareProgramConfirmationField() {
        return AppointmentPage.AllConfirmationFields.get('#program');
    }

    static get VisitDateConfirmationField() {
        return AppointmentPage.AllConfirmationFields.get('#visit_date');
    }

    static get CommentConfirmationField() {
        return AppointmentPage.AllConfirmationFields.get('#comment');
    }
}

export default AppointmentPage;