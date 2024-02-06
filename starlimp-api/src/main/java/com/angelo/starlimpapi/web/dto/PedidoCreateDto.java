package com.angelo.starlimpapi.web.dto;

import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

@Getter @Setter @ToString @NoArgsConstructor @AllArgsConstructor
public class PedidoCreateDto {
    private String nomeCliente;
    private String produtos;
    private String qtdeProdutos;
    private LocalDateTime data;
    private double custoTotal;
    private String confirmacaoProdutos;
}
