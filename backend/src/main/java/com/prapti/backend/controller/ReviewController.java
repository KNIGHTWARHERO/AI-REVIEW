package com.prapti.backend.controller;

import com.prapti.backend.dto.CodeReviewRequest;
import com.prapti.backend.dto.CodeReviewResponse;
import com.prapti.backend.service.AIService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/review")
@CrossOrigin(origins = "*")
public class ReviewController {

    private final AIService aiService;

    public ReviewController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping
    public ResponseEntity<CodeReviewResponse> reviewCode(
            @RequestBody CodeReviewRequest request) {

        String feedback = aiService.reviewCode(
                request.getLanguage(),
                request.getCode()
        );

        return ResponseEntity.ok(new CodeReviewResponse(feedback));
    }
}