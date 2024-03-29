class HistoryPage
{
    static get historyContainer() {
        return cy.get('section#history');
    }

    static get historyEntriesRow() {
        return HistoryPage.historyContainer.get('div.container>div.row');
    }
}

export default HistoryPage;