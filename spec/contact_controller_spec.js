const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

    beforeEach((done) => {
        this.book = new ContactController();

        sequelize.sync({force: true}).then((res) => {
            done();
        })
        .catch((err) => {
            done();
        });
    });

    it("should be defined", () => {
        expect(ContactController).toBeDefined();
    });
});
