const wdio = require("webdriverio")
const train = require('../../components/train')
const login = require("../../components/login")

describe("Test The Application", () => {
    before(() => {
		login.login()
	})
    beforeEach(() => { 
        train.goToTrainingExercise()
    })
    it("Start an exercise…...", () => {
        train.startTrainingExercise()
    })

})