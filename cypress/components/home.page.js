class HomePage
{
    static get makeAppointmentBtn() {
        return cy.get('a#btn-make-appointment');
    }

    static get selectFacility() {
        return cy.get('select#combo_facility');
    }

    static facilityOptions = {
        tokyoCura: "Tokyo CURA Healthcare Center",
        honkongCura: "Hongkong CURA Healthcare Center",
        seoulCura: "Seoul CURA Healthcare Center",
    };

    static get applyForHospitalReadmissionCheck() {
        return cy.get('input[type=checkbox]#chk_hospotal_readmission');
    }

    static programOptions = {
        medicare: "Medicare",
        medicaid: "Medicaid",
        none: "None",
    };

    static get healthcareProgramsRadio() {
        return cy.get('input[type=radio][name=programs]');
    }

    static get visitDateInput() {
        return cy.get('input[type=text]#txt_visit_date');
    }

    static get datePickerDaysTable() {
        return cy.get('div.datepicker-days>table>tbody');
    }

    static get datePickerCurrentMonthDays() {
        return HomePage.datePickerDaysTable.get('td.day');
    }

    static get commentInput() {
        return cy.get('textarea#txt_comment');
    }

    static get submitAppointmentBtn() {
        return cy.get('button#btn-book-appointment');
    }
}

export default HomePage;