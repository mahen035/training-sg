package com.training.courseservice.intercomm;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient("user-service")
public interface UserClient {
	
	@RequestMapping(method=RequestMethod.POST, value="/home/user/find", consumes="application/json")
	String getUserName(@RequestBody int age);

}
