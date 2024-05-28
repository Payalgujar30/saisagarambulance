package com.saisagar.Saisagar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saisagar.Saisagar.model.Feedback;
import com.saisagar.Saisagar.repository.FeedbackRepository;
@RestController
@RequestMapping("/saisagar/")
public class FeedbackController {
	
	   @Autowired
	   @Qualifier("feedRepo")
	   FeedbackRepository  feedRepo;
	   @GetMapping("/feedback")
	   public String Feedback()
	   {
		   return "Feedback page";
	   }
	   @PostMapping("/feedback")
	   public Feedback savefeedback(@RequestBody Feedback f)
	   {
		   return feedRepo.save(f);
	   }
	   


}
