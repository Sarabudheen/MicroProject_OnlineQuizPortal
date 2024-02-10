package com.quiz.quizoperations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class ViewAllQuizzesRunner {

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
		
		driver.findElement(By.name("quizButton")).click();
		

	}

	public static void main(String[] args) {
		ViewAllQuizzesRunner viewQuiz = new ViewAllQuizzesRunner();
		viewQuiz.initializeDriver();
		viewQuiz.loadGoolgePage();
		viewQuiz.testUserUpdate();

	}

}
