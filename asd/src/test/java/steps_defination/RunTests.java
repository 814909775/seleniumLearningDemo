package steps_defination;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features={"src/test/java/resources/Test1.feature","src/test/java/resources/Test2.feature"},  //写到具体文件就执行具体feature文件，写到文件夹就依次执行所有文件
        glue={"steps_defination"}  ,//定义的代码路径
        format={"pretty","html:target/cucumber"}
        //tags={"@2","@1"}
        //tags={"@1,@2"}//表示执行含有@1或者@2的scenario，结果为两者并集
        //tags={"~@1"}//表示执行除@1之外的test case

)

public class RunTests extends AbstractTestNGCucumberTests {
}
