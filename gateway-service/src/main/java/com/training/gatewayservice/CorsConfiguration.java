package com.training.gatewayservice;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfiguration extends org.springframework.web.cors.CorsConfiguration{
	
	@Bean
	public CorsWebFilter corsWebFilter() {
		final CorsConfiguration corsConfig = new CorsConfiguration();
		
		corsConfig.setAllowedOrigins(Collections.singletonList("*"));
		corsConfig.setAllowedMethods(Arrays.asList("GET", "POST"));
		corsConfig.addAllowedHeader("*");
		
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", corsConfig);
		return new CorsWebFilter(source);
		
		
	}

}
