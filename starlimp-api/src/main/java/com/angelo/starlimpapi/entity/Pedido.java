package com.angelo.starlimpapi.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter @Setter @NoArgsConstructor
@Entity
@Table(name="pedidos")
public class Pedido implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="pedido_id")
    private long id;

    @Column(name="nome_cliente")
    private String nomeCliente;

    @Column(name="data_pedido")
    private LocalDateTime data;

    @Column(name="produtos_pedido")
    private String produtos;

    @Column(name="qtde_produtos")
    private String qtdeProdutos;

    @Column(name="custo_total")
    private double custoTotal;

    @Column(name="confirmacao_produtos")
    private String confirmacaoProdutos;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pedido pedido = (Pedido) o;
        return id == pedido.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Pedido{" +
                "id=" + id +
                '}';
    }
}
