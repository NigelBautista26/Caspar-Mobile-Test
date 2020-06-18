const userCredentials = require('../fixtures/loginCredentials.json')

class Login {
    /* Define Elements */
    get emailField() {return $('//android.widget.EditText[@resource-id="com.casparhealth.android.patient:id/email_text"]')}
    get passwordField() {return $('//android.widget.EditText[@resource-id="com.casparhealth.android.patient:id/password_text"]')}
    get loginButton() {return $('//android.widget.Button[@resource-id="com.casparhealth.android.patient:id/login_button"]')}
    get notNowButton() {return $('//android.widget.TextView[@resource-id="com.casparhealth.android.patient:id/btnNotNow"]')}

    login() {
      driver.touchAction([{ action: 'press', x: 1003, y: 116 }, { action: 'moveTo', x: 855, y: 112 }, 'release'])/ // my workaround because the normal tap/press isnt enough to interact with the selector...
      this.emailField.setValue(userCredentials.email)
      this.passwordField.setValue(userCredentials.password)
      this.loginButton.click()
      this.notNowButton.click()
    }
    
  }
  module.exports = new Login()