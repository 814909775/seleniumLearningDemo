package steps_defination;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import java.util.Set;

public class aa {
    public static void main(String[] args) {
        WebDriver webDriver;
        webDriver = new OpenChrome().initialChrome();
        webDriver.navigate().to("http://www.baidu.com");
        ((JavascriptExecutor)webDriver).executeScript("window.open ('http://www.bilibili.com','newwindow','height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no') ");
        String current = webDriver.getWindowHandle();
        System.out.println(current);
        Set<String> set = webDriver.getWindowHandles();
        for(String a:set){
            if(current.equals(a)){
                continue;
            }else{
                webDriver.switchTo().window(a);
                System.out.println(webDriver.getCurrentUrl());
            }

        }

    }
}
