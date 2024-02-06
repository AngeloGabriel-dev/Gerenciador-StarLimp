package com.angelo.starlimpapi.service;


import com.angelo.starlimpapi.entity.Pedido;
import com.angelo.starlimpapi.repository.PedidoRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PedidoService {
    private final PedidoRepository pedidoRepository;

    @Transactional
    public Pedido salvar(Pedido pedido){

        return pedidoRepository.save(pedido);
    }

    @Transactional(readOnly = true)
    public Pedido buscaPorId(long id){
        return pedidoRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("Pedido não encontrado!")
        );
    }

    @Transactional(readOnly = true)
    public List<Pedido> buscarTodos(){
        return pedidoRepository.findAll();
    }

    @Transactional
    public void deletar(long id){
        pedidoRepository.deleteById(id);
    }

    @Transactional
    public Pedido atualizarPorId(long id, String nome, String produtos, String qtdes, LocalDateTime data, double custoTotal, String confirmacaoProdutos){
        Pedido pdd = buscaPorId(id);
        pdd.setNomeCliente(nome);
        pdd.setProdutos(produtos);
        pdd.setData(data);
        pdd.setCustoTotal(custoTotal);
        pdd.setQtdeProdutos(qtdes);
        pdd.setConfirmacaoProdutos(confirmacaoProdutos);

        return pdd;

    }
}
