package com.example.navdrawerrv.api;

import com.example.navdrawerrv.services.MenuService;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainMenuApi {

    public static final String customUrl = "https://custom.yayvo.com:3333/api/v1/";

    public static MenuService menuService = null;

    public static MenuService getService() {

        if(menuService == null) {
            Retrofit retrofit = new Retrofit.Builder()
                    .baseUrl(customUrl)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
            menuService = retrofit.create(MenuService.class);
        }
        return menuService;
    }
}
