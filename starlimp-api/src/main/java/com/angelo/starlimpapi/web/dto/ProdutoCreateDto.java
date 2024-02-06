package com.angelo.starlimpapi.web.dto;

//import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class ProdutoCreateDto {

    private String nome;

    private int quantidade;

    private double preco;
}
