package com.gameshop.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gameshop.spring.model.Items;
import com.gameshop.spring.model.Platform;

public interface ItemRepository extends JpaRepository<Items, Long> {

	

}
