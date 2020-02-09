package com.wds.icezar.controller;

import com.wds.icezar.domain.ContactMessage;
import com.wds.icezar.repo.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/message")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ContactController {

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd-HH:mm:ss");
    @Autowired
    ContactRepository contactRepository;

    @RequestMapping(value="/save", method= RequestMethod.POST)
    public ResponseEntity contactUsMessage(@RequestBody ContactMessage message) {

        LocalDateTime now = LocalDateTime.now();
        message.setMessageDate(now.format(formatter));

        contactRepository.insert(message);

        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value="/wrongPlayId", method= RequestMethod.POST)
    public ResponseEntity wrongPlayLink(@RequestBody ContactMessage message) {

        LocalDateTime now = LocalDateTime.now();
        message.setMessageDate(now.format(formatter));
        contactRepository.insert(message);

        return new ResponseEntity(HttpStatus.OK);
    }
}
