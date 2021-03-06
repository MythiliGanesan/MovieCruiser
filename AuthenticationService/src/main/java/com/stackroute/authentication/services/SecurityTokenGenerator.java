package com.stackroute.authentication.services;

import java.util.Map;

import com.stackroute.authentication.model.User;

public interface SecurityTokenGenerator {

	Map<String, String> generateToken(User user);
}
