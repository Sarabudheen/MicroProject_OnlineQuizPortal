package com.quiz.logintest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AdminLoginRunner {

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
	public void testLoginFormSubmission() {
		
		driver.findElement(By.name("getStart")).click();

		WebElement userNameField = driver.findElement(By.name("userName"));
		userNameField.sendKeys("sk");

		WebElement passwordField = driver.findElement(By.name("password"));
		passwordField.sendKeys("300");

		// Submit the form for Insert operation
		WebElement loginButton = driver.findElement(By.name("loginButton"));
		loginButton.click();
	}
	

//	@AfterTest
//	public void close() {
//		driver.quit();
//	}
	
	public static void main(String[] args) {
		
		AdminLoginRunner adminLogin = new AdminLoginRunner();
		adminLogin.loadGoolgePage();
		adminLogin.testLoginFormSubmission();
		

	}
}



