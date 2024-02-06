package com.angelo.starlimpapi.web.controller;

import com.angelo.starlimpapi.entity.Produto;
import com.angelo.starlimpapi.service.ProdutoService;
import com.angelo.starlimpapi.web.dto.ProdutoCreateDto;
import com.angelo.starlimpapi.web.dto.ProdutoResponseDto;
import com.angelo.starlimpapi.web.dto.mapper.ProdutoMapper;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Getter @Setter @RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/produtos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {
    private final ProdutoService produtoService;

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoResponseDto> getById(@PathVariable Long id){
        Produto produto = produtoService.buscaPorId(id);
        return ResponseEntity.ok(ProdutoMapper.toDto(produto));
    }
    @PostMapping
    public ResponseEntity<ProdutoResponseDto> create(@Valid @RequestBody ProdutoCreateDto createDto){
        Produto produto = produtoService.salvar(ProdutoMapper.toProduto(createDto));

        return ResponseEntity.status(HttpStatus.CREATED).body(ProdutoMapper.toDto(produto));
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<ProdutoResponseDto>> getAll(){
        List<Produto> produtos = produtoService.buscarTodos();
        return ResponseEntity.ok(ProdutoMapper.toListDto(produtos));
    }
    @PatchMapping("/{id}")
    public ResponseEntity<Void> updateProduct(@PathVariable Long id, @Valid @RequestBody ProdutoCreateDto dto){
        Produto pdt = produtoService.atualizarPorId(id, dto.getNome(), dto.getQuantidade(), dto.getPreco());
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        produtoService.deletar(id);
    }
}
