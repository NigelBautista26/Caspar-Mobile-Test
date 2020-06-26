// const wdio = require("webdriverio")
const train = require('../../components/training')
const login = require("../../components/login")

describe("Test The Application...", () => {
    beforeEach(() => { 
        driver.launchApp() 
        login.login()
        train.goToTrainingExercise()
    })
    it("Start an exercise…...", () => {
        train.startTrainingExercise()
    })
    it("Skip an exercise…...", () => {
        train.skipTrainingExercise()
    })
    afterEach(() => { 
        driver.closeApp()
    })

})
