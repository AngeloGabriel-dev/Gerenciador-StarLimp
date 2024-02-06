package com.angelo.starlimpapi.config;

import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

import java.util.TimeZone;

public class SpringTimezoneConfig {
    @PostConstruct
    public void timeZoneConfig(){ TimeZone.setDefault(TimeZone.getTimeZone("America/Sao_Paulo"));}
}
