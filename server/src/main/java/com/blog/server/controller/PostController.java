package com.blog.server.controller;

import java.util.List;
import java.util.Optional;

import com.blog.server.model.Post;
import com.blog.server.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin
@RestController
@RequestMapping
public class PostController {
    
    @Autowired
    private PostRepository postRepository;

    @GetMapping(value="/posts")
    public List<Post> getAll() {
        return postRepository.findAll();
    }

    @GetMapping(value="/posts/{id}")
    public Optional<Post> getById(@PathVariable long id) {
        return postRepository.findById(id);
    }

    @PostMapping(value="/posts")
    public Post save(@RequestBody Post post) {
        return postRepository.save(post);
    }

    @PutMapping(value="/posts/{id}")
    public ResponseEntity<?> update(@PathVariable("id") long id, @RequestBody Post post) {
        return postRepository.findById(id).map(record -> {

            record.setTitle(post.getTitle());
            record.setAuthor(post.getAuthor());
            record.setDate(post.getDate());
            record.setText(post.getText());;
            
            Post updated = postRepository.save(record);
            return ResponseEntity.ok().body(updated);
         }).orElse(ResponseEntity.notFound().build());
    }  

    @DeleteMapping
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return postRepository.findById(id).map(record -> {
            postRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
    
}
