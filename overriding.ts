// method overriding
class BasePage {
  navigate(): void {
    console.log("Navigating to base page");
  }
}

class LoginPage extends BasePage {
  override navigate(): void {
    console.log("Navigating to login page");
  }
}