package com.example.demodemo;

import com.example.demodemo.Dao.ProductRepository;
import com.example.demodemo.Dao.UserRepository;
import com.example.demodemo.Model.Product;
import com.example.demodemo.Model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

import java.math.BigDecimal;
import java.util.Optional;

@SpringBootApplication
public class DemodemoApplication {
	public static void main(String[] args) {
		SpringApplication.run(DemodemoApplication.class, args);


		ApplicationContext applicationContext = SpringApplication.run(DemodemoApplication.class, args);
		ProductRepository productRepository = applicationContext.getBean(ProductRepository.class);
		UserRepository userRepository = applicationContext.getBean(UserRepository.class);


	}

}
