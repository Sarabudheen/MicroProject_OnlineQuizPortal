package com.quiz.viewresult;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ViewResultRunner {

	WebDriver driver;

	@BeforeClass
	public void initializeDriver() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}

	// To Open Google.com in a Chrome browser
	@Test
	public void loadGoolgePage() {
		driver.navigate().to("http://localhost:4200/");
	}

	@Test
	public void testViewResult() {

		driver.findElement(By.name("getStart")).click();

		driver.findElement(By.name("userName")).sendKeys("Dom");

		driver.findElement(By.name("password")).sendKeys("11964");

		driver.findElement(By.name("loginButton")).click();
		
		driver.findElement(By.xpath(".//button/span[2]"));
		
		

		

	}

	public static void main(String[] args) {
		
		ViewResultRunner viewResult = new ViewResultRunner();
		viewResult.loadGoolgePage();
		viewResult.testViewResult();
		

	}

}
