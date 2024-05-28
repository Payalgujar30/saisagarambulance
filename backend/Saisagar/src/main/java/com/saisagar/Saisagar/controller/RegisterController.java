package com.saisagar.Saisagar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saisagar.Saisagar.model.Register;
import com.saisagar.Saisagar.repository.RegisterRepository;

@RestController
@RequestMapping("/saisagar/")
public class RegisterController {
   @Autowired
   @Qualifier("regRepo")
   RegisterRepository  regRepo;
   @GetMapping("/register")
   public String register()
   {
	   return "Register page";
   }
   @PostMapping("/register")
   public Register handlepost(@RequestBody Register r)
   {
	   return regRepo.save(r);
   }
   @GetMapping("/register/{emailid}/{password}")
   public Register login(@PathVariable("emailid") String emailid,@PathVariable("password") String password)
   {
	   return regRepo.findByEmailIdAndPassword(emailid, password);
   }


}

