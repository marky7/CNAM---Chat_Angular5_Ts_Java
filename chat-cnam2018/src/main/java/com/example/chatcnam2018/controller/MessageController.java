package com.example.chatcnam2018.controller;

import com.example.chatcnam2018.exception.ResourceNotFoundException;
import com.example.chatcnam2018.model.Message;
import com.example.chatcnam2018.repository.MessageRepository;
import com.example.chatcnam2018.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chat-cnam-api")
public class MessageController {

	@Autowired
	MessageRepository messageRepository;
	
	@Autowired
	UserRepository userRepository;
		
	@GetMapping("/messages")
	public List<Message> getAllMessages() {
	    return messageRepository.findAll();
	}
	
	@PostMapping("/messages")
	public Message createMessage(@Valid @RequestBody Message message) {
	    return messageRepository.save(message);
	}
	
	@GetMapping("/messages/{id}")
	public Message getMessageById(@PathVariable(value = "id") Long messageId) {
	    return messageRepository.findById(messageId)
	            .orElseThrow(() -> new ResourceNotFoundException("Message", "id", messageId));
	}
	
	@GetMapping("/messages/{envoyeurId}/{destinataireId}")
	public Optional<Message> getMessageByDestinaireEtEnvoyeur(@PathVariable(value = "envoyeurId") Long envoyeurId,
			@PathVariable(value = "destinataireId") Long destinataireId) {	
		return messageRepository.findMessagesByEnvoyeurEtDestinataire(envoyeurId, destinataireId);
	}
}
