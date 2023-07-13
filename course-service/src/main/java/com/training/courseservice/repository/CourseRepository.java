package com.training.courseservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.training.courseservice.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long>{

}
