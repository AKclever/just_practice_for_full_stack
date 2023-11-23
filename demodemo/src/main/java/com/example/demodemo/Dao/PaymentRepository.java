package com.example.demodemo.Dao;

import com.example.demodemo.Model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    // additional custom query methods if needed
}