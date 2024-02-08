package com.quiz.bean;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_schedule")
public class Schedule {
	
	@Id
	@Column(name = "Test_Id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long testId;
	
	@Column(name = "Topic_Name")
	private String topicName;
	
	@Column(name = "Time")
	private Time time;
	
	@Column(name = "Date")
	private Date date;
	
	@Column(name = "Level")
	private String dificulty;

	public Schedule() {
		super();
	}


	public Schedule(long testId, String topicName, Time time, Date date, String dificulty) {
		super();
		this.testId = testId;
		this.topicName = topicName;
		this.time = time;
		this.date = date;
		this.dificulty = dificulty;
	}

	public long getTestId() {
		return testId;
	}

	public void setTestId(long testId) {
		this.testId = testId;
	}

	public String getTopicName() {
		return topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	public Time getTime() {
		return time;
	}

	public void setTime(Time time) {
		this.time = time;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getDificulty() {
		return dificulty;
	}

	public void setDificulty(String dificulty) {
		this.dificulty = dificulty;
	}
	
	

	
}
