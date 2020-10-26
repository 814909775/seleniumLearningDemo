package steps_defination;


import cucumber.api.PendingException;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
 //   @Before("@testsearch")
  //  public void printStart(){
   //     System.out.println("开始");
   // }
    private WebDriver webDriver =null;
    @When("^I open the chrome$")
    public void iOpenTheChrome() {
        webDriver = new OpenChrome().initialChrome();
        webDriver.get("http://www.baidu.com");

    }
    
    @And("^type the \"([^\"]*)\" into the input\\(id = kw\\)$")
    public void typeTheIntoTheInputIdKw(String keyword) throws Throwable {
        webDriver.findElement(By.id("kw")).sendKeys(keyword);

    }

    @And("^click the button id=\"([^\"]*)\"$")
    public void clickTheButtonId(String arg0) throws Throwable {
        webDriver.findElement(By.id((arg0))).click();

    }

    @Then("^I got the page title=\"([^\"]*)\"$")
    public void iGotThePageTitle(String arg0) throws Throwable {
        Thread.sleep(1000);
        Assert.assertEquals(webDriver.getTitle(),arg0);
        webDriver.quit();
    }
    //@After
   // public void printEnd(){
   //     System.out.println("结束");
   // }


    @When("^I aa$")
    public void iAa() {
        System.out.println("I aa");
    }

    @Then("^I bb$")
    public void iBb() {
        System.out.println("I bb");
    }


    @When("^I type by JS$")
    public void iTypeByJS() {
        webDriver = new OpenChrome().initialChrome();
        webDriver.navigate().to("http://www.baidu.com");
        JavascriptExecutor js = (JavascriptExecutor)webDriver;
        js.executeScript("document.getElementById(\"kw\").setAttribute(\"value\",\"selenium\")");
    }

    @Then("^the search result show$")
    public void theSearchResultShow() {
        Assert.assertEquals(webDriver.findElement(By.id("kw")).getAttribute("value"),"selenium");
        webDriver.quit();
    }



    @Then("^aab$")
    public void aab() {
        System.out.println("lalala");
    }

    @When("^inputaa \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void inputaa(String arg0, String arg1, String arg2) throws Throwable {
        System.out.println(arg0+arg2+arg1);
    }

    @Test(dataProvider = "aa")
    public void getResult(int a,int b) {
        Assert.assertEquals(a+b,3);

    }
    @DataProvider
    public Object[][] aa(){
        return new Object[][]{{1,2},{2,4}};
    }

}
