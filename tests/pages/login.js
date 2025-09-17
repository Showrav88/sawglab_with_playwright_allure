import LogingnObject  from "../pageObjects/loginObject";    

export default class Login {
    constructor(page) {
        this.page = page;
        this.locate = new LogingnObject(page);
 }

 async clickUsernameField() {

    await this.locate.usernameFlied.click();
    await this.locate.usernameFlied.fill('locked_out_user');
    // await this.waitfor(1000);
}
async clickPasswordField() {

    await this.locate.passwordFlied.click(); 
    await this.locate.passwordFlied.fill('secret_sauce');
    // await this.waitfor(1000);
}
async clickLoginButton() {

    await this.locate.loginButton.click();
}
}
