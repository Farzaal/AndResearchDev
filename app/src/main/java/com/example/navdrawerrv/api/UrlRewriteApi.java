package com.example.navdrawerrv.api;

import com.example.navdrawerrv.services.MenuService;
import com.example.navdrawerrv.services.UrlRewriteService;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class UrlRewriteApi {

    public static final String customUrl = "https://custom.yayvo.com:3333/api/v1/";

    public static UrlRewriteService urlRewriteService= null;

    public static UrlRewriteService getService() {

        if(urlRewriteService == null) {
            Retrofit retrofit = new Retrofit.Builder()
                    .baseUrl(customUrl)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
            urlRewriteService = retrofit.create(UrlRewriteService.class);
        }
        return urlRewriteService;
    }
}
