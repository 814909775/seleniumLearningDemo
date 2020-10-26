package steps_defination;

import cucumber.api.testng.TestNGCucumberRunner;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

public class OpenChrome  {
    public WebDriver initialChrome(){
        WebDriver webDriver =null;
        String webDriverPath =  "D:\\java\\selenium-java-3.4.0\\chromedriver.exe";
        System.setProperty("webdriver.chrome.driver",webDriverPath);

        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized"); // 启动时自动最大化窗口
        options.addArguments("--disable-popup-blocking"); // 禁用阻止弹出窗口
        options.addArguments("no-sandbox"); // 启动无沙盒模式运行
        //options.addArguments("headless");
        options.addArguments("disable-extensions"); // 禁用扩展

        options.addArguments("no-default-browser-check"); // 默认浏览器检查
        Map<String, Object> prefs = new HashMap();
        prefs.put("credentials_enable_service", false);
        prefs.put("profile.password_manager_enabled", false);//禁止js
        prefs.put("profile.default_content_settings.images", 2);//禁止图片
        prefs.put("profile.default_content_settings.javascript", 2);
        options.setExperimentalOption("prefs", prefs);// 禁用保存密码提示框
        webDriver = new ChromeDriver(options);
        webDriver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        return webDriver;

    }
}
