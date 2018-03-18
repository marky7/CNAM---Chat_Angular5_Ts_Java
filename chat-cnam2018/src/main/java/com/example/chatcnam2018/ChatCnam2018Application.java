package com.example.chatcnam2018;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ChatCnam2018Application {

	public static void main(String[] args) {
		SpringApplication.run(ChatCnam2018Application.class, args);
	}
}
