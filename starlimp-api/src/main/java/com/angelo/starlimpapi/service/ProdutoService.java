package com.angelo.starlimpapi.service;

import com.angelo.starlimpapi.entity.Produto;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.angelo.starlimpapi.repository.ProdutoRepository;
import java.util.List;


@RequiredArgsConstructor
@Service
public class ProdutoService {
    private final ProdutoRepository produtoRepository;

    @Transactional
    public Produto salvar(Produto produto){
        return produtoRepository.save(produto);
    }
    @Transactional(readOnly = true)
    public Produto buscaPorId(Long id){
        return produtoRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Produto não encontrado!")
        );
    }
    @Transactional(readOnly = true)
    public List<Produto> buscarTodos(){
        return produtoRepository.findAll();
    }
    @Transactional
    public Produto atualizarPorId(Long id, String nome, int qtd, double prc){
        Produto pdt = buscaPorId(id);
        pdt.setNome(nome);
        pdt.setQuantidade(qtd);
        pdt.setPreco(prc);
        return pdt;
    }
    @Transactional
    public void deletar(Long id){
        produtoRepository.deleteById(id);
    }
}
