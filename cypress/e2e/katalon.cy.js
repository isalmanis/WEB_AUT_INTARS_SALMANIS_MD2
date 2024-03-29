import HomePage from "../components/home.page";
import ProfilePage from "../components/profile.page";
import SideMenu from "../components/side.menu";
import HistoryPage from "../components/history.page";
import AppointmentPage from "../components/appointment.page";

describe('Katalon', () => {
    context('Appointments', () => {
        beforeEach(() => {
            cy.visit(Cypress.env('siteBaseUrl'));
            HomePage.makeAppointmentBtn.click();
            ProfilePage.demoUsernameField.then((input) => {
                ProfilePage.usernameInput.type(input.val().toString());
            })
            ProfilePage.demoPasswordField.then((input) => {
                ProfilePage.passwordInput.type(input.val().toString());
            })
            ProfilePage.loginBtn.click();
        })

        it('Make an appointment', () => {
            const testValues = {
                facility: "Seoul CURA Healthcare Center",
                readmission: "Yes",
                program: "Medicaid",
                dateValue: 30,
                comment: "CURA Healthcare Service",
            };

            HomePage.selectFacility.select(HomePage.facilityOptions.seoulCura);
            HomePage.applyForHospitalReadmissionCheck.check();
            HomePage.healthcareProgramsRadio.check(HomePage.programOptions.medicaid);
            HomePage.visitDateInput.click();
            HomePage.datePickerCurrentMonthDays.contains(testValues.dateValue.toString()).click();
            HomePage.commentInput.type(testValues.comment);
            HomePage.submitAppointmentBtn.click();

            AppointmentPage.FacilityConfirmationField.should('contain.text', testValues.facility);
            AppointmentPage.HospitalReadmissionConfirmationField.should('contain.text', testValues.readmission);
            AppointmentPage.HealthCareProgramConfirmationField.should('contain.text', testValues.program);
            AppointmentPage.VisitDateConfirmationField.should('contain.text', testValues.dateValue.toString());
            AppointmentPage.CommentConfirmationField.should('contain.text', testValues.comment);
        });

        it('Appointment history empty', () => {
            const testValues = {
                noAppointment: "No appointment"
            };

            SideMenu.menuBtn.click();
            SideMenu.sideMenu.should('have.class', SideMenu.menuActiveClass);
            SideMenu.historyMenuItem.click();
            HistoryPage.historyEntriesRow.should('contain.text', testValues.noAppointment);
        });
    })
})