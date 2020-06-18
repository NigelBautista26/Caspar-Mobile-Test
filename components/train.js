require('chai/register-expect')  // Using Expect style
const home = require('./home')

const trainingSectionExpectedTexts = require('../fixtures/trainingSectionExpectedTexts.json')

class Train {
    /* Define Elements */
    get imReadyButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/ready_button"]')}
    get yesButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/yes_button"]')}
    get startButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/start_button"]')}
    get ToolsNeededToCompleteTraining() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/subtitle_you_will_need"]')}
    get setsTitle() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/set_title_text"]')}
    get repsTitle() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/repetition_title_text"]')}
    get toolsTitle() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/title_tools"]')}
    get exerciseName() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/exercise_title_text"]')}
    get instructionButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/instruction_button"]')}
    get settingsButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/settings_button"]')}
    get skipButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/skip_button"]')}
    get getReady() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/get_ready_text"]')}
    get settingsButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/settings_button"]')}
    get areYouSureToSkipMessage() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/subheader"]')}
    get finalSkipButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/skip"]')}


    goToTrainingExercise() {
      home.goToTrainingSection()
      expect(this.ToolsNeededToCompleteTraining.getText()).to.equal(trainingSectionExpectedTexts.ToolsNeededToCompleteTrainingTextValue)
      this.imReadyButton.click()
      this.yesButton.click()
      expect(this.setsTitle.getText()).to.equal(trainingSectionExpectedTexts.setsTitleTextValue)
      expect(this.repsTitle.getText()).to.equal(trainingSectionExpectedTexts.repsTitleTextValue)
      expect(this.toolsTitle.getText()).to.equal(trainingSectionExpectedTexts.toolsTitleTextValue)
      expect(this.exerciseName.getText()).to.include(trainingSectionExpectedTexts.exerciseNameTextValue)
    }
    startTrainingExercise() {
      this.startButton.click()
      expect(this.getReady.getText()).to.equal(trainingSectionExpectedTexts.getReadyTextValue)
    }
    skipTrainingExercise() {
      this.skipButton.click()
      expect(this.areYouSureToSkipMessage.getText()).to.equal(trainingSectionExpectedTexts.areYouSureToSkipMessageTextValue)
      this.finalSkipButton.click()
    }
    
  }
  module.exports = new Train()