package com.angelo.starlimpapi.web.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PedidoResponseDto {
    private String nomeCliente;
    private String produtos;
    private String qtdeProdutos;
    private LocalDateTime data;
    private double custoTotal;
    private long id;
    private String confirmacaoProdutos;
}
