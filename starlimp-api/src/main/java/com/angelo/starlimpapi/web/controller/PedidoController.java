package com.angelo.starlimpapi.web.controller;

import com.angelo.starlimpapi.entity.Pedido;
import com.angelo.starlimpapi.web.dto.PedidoCreateDto;
import com.angelo.starlimpapi.web.dto.PedidoResponseDto;
import jakarta.validation.Valid;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.angelo.starlimpapi.service.PedidoService;

import java.time.LocalDateTime;
import java.util.List;

import static com.angelo.starlimpapi.web.dto.mapper.PedidoMapper.*;


@Getter @Setter @RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/pedidos")
@CrossOrigin(origins = "http://localhost:3000")
public class PedidoController {
    private final PedidoService pedidoService;

    @GetMapping("/{id}")
    public ResponseEntity<PedidoResponseDto> getById(@PathVariable Long id){
        Pedido pedido = pedidoService.buscaPorId(id);
        return ResponseEntity.ok(toDto(pedido));
    }

    @PostMapping
    public ResponseEntity<PedidoResponseDto> create(@Valid @RequestBody PedidoCreateDto createDto){
        Pedido pedido = pedidoService.salvar(toPedido(createDto));
        return ResponseEntity.status(HttpStatus.CREATED).body(toDto(pedido));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<PedidoResponseDto>> getAll(){
        List<Pedido> pedidos = pedidoService.buscarTodos();
        return ResponseEntity.ok(toListDto(pedidos));
    }

    @PatchMapping("/{id}")
    public ResponseEntity<PedidoResponseDto> updateById(@PathVariable Long id, @Valid @RequestBody PedidoCreateDto createDto){
        Pedido pedido = pedidoService.atualizarPorId(
                                    id,
                                    createDto.getNomeCliente(),
                                    createDto.getProdutos(),
                                    createDto.getQtdeProdutos(),
                                    LocalDateTime.now(),
                                    createDto.getCustoTotal(),
                                    createDto.getConfirmacaoProdutos()
                                    );
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        pedidoService.deletar(id);
    }
}
