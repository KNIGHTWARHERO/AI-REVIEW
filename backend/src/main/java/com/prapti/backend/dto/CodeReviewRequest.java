package com.prapti.backend.dto;

import lombok.Data;

@Data
public class CodeReviewRequest {
    private String language;
    private String code;
}