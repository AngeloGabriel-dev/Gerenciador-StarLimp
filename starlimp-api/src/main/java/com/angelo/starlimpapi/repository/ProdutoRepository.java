package com.angelo.starlimpapi.repository;

import com.angelo.starlimpapi.entity.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}