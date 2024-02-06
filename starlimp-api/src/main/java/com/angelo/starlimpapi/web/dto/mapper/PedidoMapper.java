package com.angelo.starlimpapi.web.dto.mapper;

import com.angelo.starlimpapi.entity.Pedido;
import com.angelo.starlimpapi.web.dto.PedidoCreateDto;
import com.angelo.starlimpapi.web.dto.PedidoResponseDto;
import org.modelmapper.ModelMapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

public class PedidoMapper {
    public static Pedido toPedido(PedidoCreateDto createDto){
        createDto.setData(LocalDateTime.now());
        return new ModelMapper().map(createDto, Pedido.class);
    }

    public static PedidoResponseDto toDto(Pedido pedido){
        ModelMapper mapper = new ModelMapper();
        return mapper.map(pedido, PedidoResponseDto.class);
    }

    public static List<PedidoResponseDto> toListDto(List<Pedido> pedidos){
        return pedidos.stream().map(pedido -> toDto(pedido)).collect(Collectors.toList());
    }
}
