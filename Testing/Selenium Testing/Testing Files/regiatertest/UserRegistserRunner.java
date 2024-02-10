package com.quiz.regiatertest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.quiz.logintest.UserLoginRunner;

public class UserRegistserRunner {

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
		driver.findElement(By.linkText("Register")).click();

		WebElement fisrtNameField = driver.findElement(By.name("firstName"));
		fisrtNameField.sendKeys("David");

		WebElement lastNameField = driver.findElement(By.name("lastName"));
		lastNameField.sendKeys("billa");

		WebElement emailIdField = driver.findElement(By.name("emailId"));
		emailIdField.sendKeys("billa@gmail.com");

		WebElement phoneNoField = driver.findElement(By.name("phoneNo"));
		phoneNoField.sendKeys("7856453456");

		WebElement userNameField = driver.findElement(By.name("userName"));
		userNameField.sendKeys("Billa");

		WebElement passwordField = driver.findElement(By.name("password"));
		passwordField.sendKeys("11980");

		WebElement registerButton = driver.findElement(By.name("registerButton"));
		registerButton.click();

	}

//	@AfterTest
//	public void close() {
//		driver.quit();
//	}

	public static void main(String[] args) {

		UserRegistserRunner userRegister = new UserRegistserRunner();
		userRegister.loadGoolgePage();
		userRegister.testLoginFormSubmission();

	}
}
