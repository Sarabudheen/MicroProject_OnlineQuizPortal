package com.quiz.useroperations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class UpdateUserRunner {
	

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
	public void testUserUpdate() {

		driver.findElement(By.name("getStart")).click();

		driver.findElement(By.name("userName")).sendKeys("sk");

		driver.findElement(By.name("password")).sendKeys("300");

		driver.findElement(By.name("loginButton")).click();
		
		driver.findElement(By.name("loginButton")).click();
		
		driver.findElement(By.xpath("//button/span[2]")).click();
		
		driver.findElement(By.xpath("//tr[8]/td[8]/button/span[4]")).click();
		
		driver.findElement(By.xpath("//mat-dialog-actions/button[2]/span[2]")).click();
		
		
		
	

	}
	public static void main(String[] args) {
		
		UpdateUserRunner userUpdate = new UpdateUserRunner();
		userUpdate.loadGoolgePage();
		userUpdate.testUserUpdate();
		

	}

}
