package com.angelo.starlimpapi.web.dto.mapper;

import com.angelo.starlimpapi.entity.Produto;
import com.angelo.starlimpapi.web.dto.ProdutoCreateDto;
import com.angelo.starlimpapi.web.dto.ProdutoResponseDto;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.stream.Collectors;

public class ProdutoMapper {
    public static Produto toProduto(ProdutoCreateDto createDto){
        return new ModelMapper().map(createDto, Produto.class);
    }
    public static ProdutoResponseDto toDto(Produto produto){
        ModelMapper mapper = new ModelMapper();
        return mapper.map(produto, ProdutoResponseDto.class);
    }
    public static List<ProdutoResponseDto>toListDto(List<Produto> produtos){
        return produtos.stream().map(produto -> toDto(produto)).collect(Collectors.toList());
    }
}
