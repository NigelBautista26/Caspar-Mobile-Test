class Home {
    /* Define Elements */
    get goTrainingButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/my_training_arrow"]')}
    
    goToTrainingSection() {
      this.goTrainingButton.click()
    }

  }
  module.exports = new Home()