package com.angelo.starlimpapi.web.dto;

import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class ProdutoResponseDto {
    private long id;
    private String nome;
    private int quantidade;
    private double preco;
}
