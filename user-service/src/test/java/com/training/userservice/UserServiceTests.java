/*
 * package com.training.userservice;
 * 
 * import org.junit.jupiter.api.BeforeEach; import
 * org.junit.jupiter.api.DisplayName; import org.junit.jupiter.api.Test; import
 * org.junit.jupiter.api.extension.ExtendWith; import org.mockito.InjectMocks;
 * import org.mockito.Mock; import org.mockito.junit.jupiter.MockitoExtension;
 * import org.mockito.BDDMockito.*; import com.training.userservice.model.User;
 * import com.training.userservice.repository.UserRepository; import
 * com.training.userservice.service.UserServiceImpl;
 * 
 * @ExtendWith(MockitoExtension.class) public class UserServiceTests {
 * 
 * @Mock private UserRepository userRepository;
 * 
 * @InjectMocks private UserServiceImpl userService;
 * 
 * private User user;
 * 
 * @BeforeEach public void setup() { user = User.builder() .userId(1001)
 * .firstName("TEST") .lastName("TESTER") .age(50) .build(); }
 * 
 * @DisplayName("JUnit for save user method")
 * 
 * @Test public void getUserObject_whenSaveUser_thenReturnUserObject() {
 * given(userRepository.save(user)). }
 * 
 * }
 */