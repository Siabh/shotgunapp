package com.emac.gipsi.shotgun.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.emac.gipsi.shotgun.services", "com.emac.gipsi.shotgun.controllers",
		"com.emac.gipsi.shotgun.services.impl", "com.emac.gipsi.shotgun.repositories" })
@EntityScan(basePackages = { "com.emac.gipsi.shotgun.model" })
@EnableJpaRepositories("com.emac.gipsi.shotgun.repositories")

public class ShotgunMain {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("application-configuration.xml");
		SpringApplication.run(ShotgunMain.class, args);
	}
}
