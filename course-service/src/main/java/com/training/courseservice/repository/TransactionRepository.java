package com.training.courseservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.training.courseservice.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{

}
