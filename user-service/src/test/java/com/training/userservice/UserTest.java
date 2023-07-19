/*
 * package com.training.userservice;
 * 
 * import static
 * org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
 * import static
 * org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
 * import static
 * org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
 * 
 * import org.junit.Before; import org.junit.Test; import
 * org.junit.jupiter.api.DisplayName; import
 * org.springframework.beans.factory.annotation.Autowired; import
 * org.springframework.test.web.servlet.MockMvc; import
 * org.springframework.test.web.servlet.setup.MockMvcBuilders; import
 * org.springframework.web.context.WebApplicationContext; public class UserTest
 * extends UserServiceApplicationTests{
 * 
 * @Autowired private WebApplicationContext webApplicationContext;
 * 
 * 
 * private MockMvc mockMvc;
 * 
 * @Before public void setup() { mockMvc =
 * MockMvcBuilders.webAppContextSetup(webApplicationContext).build(); }
 * 
 * @DisplayName("Test User Controller")
 * 
 * @Test public void testUser() throws Exception {
 * mockMvc.perform(get("/home/users")).andExpect(status().isOk())
 * .andExpect(jsonPath("$.firstName").value("arun"));
 * 
 * }
 * 
 * 
 * 
 * }
 */