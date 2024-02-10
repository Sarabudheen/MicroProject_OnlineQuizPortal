package com.quiz.attemptquiz;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class AttemptSubmitQuizRunner {

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
	public void testAttemptSubmitQuiz() {
		
		driver.findElement(By.name("getStart")).click();

		WebElement userNameField = driver.findElement(By.name("userName"));
		userNameField.sendKeys("Dom");

		WebElement passwordField = driver.findElement(By.name("password"));
		passwordField.sendKeys("11964");

		WebElement loginButton = driver.findElement(By.name("loginButton"));
		loginButton.click();
		
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,2500)");
		
		driver.findElement(By.xpath("//button[@id='attemptQuiz']/span[2]")).click();
		driver.findElement(By.xpath("//input[@id='mat-radio-5-input']")).click();
		driver.findElement(By.xpath("//input[@id='mat-radio-10-input']")).click();
		driver.findElement(By.xpath("//input[@id='mat-radio-15-input']")).click();
		driver.findElement(By.xpath("//input[@id='mat-radio-20-input']")).click();
		driver.findElement(By.xpath("//input[@id='mat-radio-25-input']")).click();
		driver.findElement(By.xpath("//span[contains(.,'Submit')]")).click();
		driver.findElement(By.xpath("//button[2]/span[2]"));
		
		
	}
	
	public static void main(String[] args) {
		
		AttemptSubmitQuizRunner attempt = new AttemptSubmitQuizRunner();
		attempt.loadGoolgePage();
		attempt.testAttemptSubmitQuiz();
		
		

	}

}
