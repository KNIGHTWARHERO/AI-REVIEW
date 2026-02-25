package com.prapti.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class AIService {

    private final WebClient webClient;

    @Value("${gemini.api.key}")
    private String apiKey;

    public AIService(WebClient.Builder builder) {
        this.webClient = builder
                .baseUrl("https://generativelanguage.googleapis.com")
                .build();
    }

    public String reviewCode(String language, String code) {

        String prompt = """
                Review the following %s code:

                %s

                1. Find bugs
                2. Suggest improvements
                3. Rate readability (1-10)
                4. Estimate time complexity
                """.formatted(language, code);

        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of(
                                "parts", new Object[]{
                                        Map.of("text", prompt)
                                }
                        )
                }
        );

        try {
            Map response = webClient.post()
                    .uri("/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey)
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            if (response != null && response.containsKey("candidates")) {
                var candidates = (java.util.List<Map<String, Object>>) response.get("candidates");
                var content = (Map<String, Object>) candidates.get(0).get("content");
                var parts = (java.util.List<Map<String, Object>>) content.get("parts");
                return parts.get(0).get("text").toString();
            }

            return "No response from Gemini.";

        } catch (Exception e) {
            e.printStackTrace();
            return "Error: " + e.getMessage();
        }
    }
}