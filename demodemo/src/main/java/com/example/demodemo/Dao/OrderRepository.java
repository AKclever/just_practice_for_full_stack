package com.example.demodemo.Dao;

import com.example.demodemo.Model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    // additional custom query methods if needed
}