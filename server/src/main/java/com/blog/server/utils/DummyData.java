package com.blog.server.utils;

import com.blog.server.model.Post;
import com.blog.server.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Component
public class DummyData {

    @Autowired
    PostRepository postRepository;

    // @PostConstruct
    public void savePosts(){

        List<Post> postList = new ArrayList<>();
        Post post1 = new Post();
        post1.setAuthor("Bruno Alexandre");
        post1.setDate(LocalDate.now());
        post1.setTitle("Docker");
        post1.setImg_url("https://images.unsplash.com/photo-1595587637401-83ff822bd63e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=777&q=80");
        post1.setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

        Post post2 = new Post();
        post2.setAuthor("Michelli Brito");
        post2.setDate(LocalDate.now());
        post2.setTitle("API REST");
        post2.setImg_url("https://images.unsplash.com/photo-1516554646385-7642248096d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
        post2.setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");

        postList.add(post1);
        postList.add(post2);

        for(Post post: postList){
            Post postSaved = postRepository.save(post);
            System.out.println(postSaved.getId());
        }
    }
}
