package com.RailwayUserManagenet.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.RailwayUserManagenet.model.UserSignUp;

/**
 * @author Awari Giriraj
 *This Interface Is Used For Adding MongoRepository Which Acts As A Database
 */
@Repository
public interface UserSignUpRepository extends MongoRepository<UserSignUp, Integer> {

}
