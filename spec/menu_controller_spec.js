const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

    beforeEach(() => {
        this.menu = new MenuController();
    });

    describe("#getContactCount()", () => {

        it("should return 0 when no contacts are in the book", () => {
        });

        it("should return 1 when there is exactly one contact in the book", () => {
            this.menu.contacts.push("Bob");
            expect(this.menu.getContactCount()).toBe(1)
        });
    });

    describe("#remindMe()", () => {

        it("should return a string containing the text 'Learning is a life-long pursuit'", () => {
        })
    })
});