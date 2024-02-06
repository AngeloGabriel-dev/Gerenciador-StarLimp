package com.angelo.starlimpapi.repository;

import com.angelo.starlimpapi.entity.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}