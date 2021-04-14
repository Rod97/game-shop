package com.gameshop.dao;

import com.gameshop.model.User;

public interface UserDAO {
	//possible change to String return type to verify success/failure of registration
	public void registerNewUser(User user)	;
}
