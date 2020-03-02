package com.aa;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class aa {
    private Object String;

    @Test
    public void aaa() throws SQLException {
        String sql = "insert into TestSelect values(?,?,?,?)";
        WebDriver webDriver =null;
        String webDriverPath =  "D:\\java\\selenium-java-3.4.0\\chromedriver.exe";
        System.setProperty("webdriver.chrome.driver",webDriverPath);
        webDriver = new ChromeDriver();
        webDriver.get("file:///E:/software-test-data/selenium_html/test1.html");
        String database = "E:\\aa.db";
        Connection connection = DriverManager.getConnection("jdbc:sqlite:"+database);
        PreparedStatement preparedStatement = connection.prepareStatement(sql);
        WebElement table = webDriver.findElement(By.tagName("table"));
        List<WebElement> rows=table.findElements(By.tagName("tr"));
        for(WebElement w: rows){
            List<WebElement> column = w.findElements(By.tagName("td"));
            List<String> cellText= new ArrayList<String>();
            for(WebElement c:column){
                cellText.add(c.getText());
            }
            String[] a = (String[]) cellText.toArray(new String[cellText.size()]);
            for(int i=0;i<4;i++){
                preparedStatement.setString(i+1,a[i]);
            }
            preparedStatement.execute();
        }

    }

}
