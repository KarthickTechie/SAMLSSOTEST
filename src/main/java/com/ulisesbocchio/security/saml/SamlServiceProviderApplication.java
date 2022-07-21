package com.ulisesbocchio.security.saml;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.Map;

/**
 * @author Ulises Bocchio
 */
@SpringBootApplication
public class SamlServiceProviderApplication extends SpringBootServletInitializer {
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder){
        return builder.sources(SamlServiceProviderApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(SamlServiceProviderApplication.class, args);
    }

//    @RequestMapping("/")
//    public ResponseEntity<Void> redirect(@RequestParam Map<String,String> input){
//        System.out.println("request param ...."+input);
//        return ResponseEntity.status(HttpStatus.FOUND).location(URI.create("http://192.168.0.140:8080/tafesso/app/dashboard")).build();
//    }
}
