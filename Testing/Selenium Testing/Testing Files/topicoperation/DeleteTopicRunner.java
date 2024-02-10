package com.quiz.topicoperation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class DeleteTopicRunner {
	
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
	public void testDeleteTopics() {

//		driver.findElement(By.name("getStart")).click();
//
//		driver.findElement(By.name("userName")).sendKeys("sk");
//
//		driver.findElement(By.name("password")).sendKeys("300");
//
//		driver.findElement(By.name("loginButton")).click();
//		
//		driver.findElement(By.xpath(".//mat-grid-tile[2]/div/mat-card/mat-card-actions/button/span[2]")).click();
//		
//		driver.findElement(By.xpath(".//div/button/span[1]")).click();
	
		
	}

	public static void main(String[] args) {
		
		DeleteTopicRunner deleteTopic = new DeleteTopicRunner();
		deleteTopic.loadGoolgePage();
		deleteTopic.testDeleteTopics();

	}

}
