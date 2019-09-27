package com.example.navdrawerrv.services;

import com.example.navdrawerrv.bo.MainMenu;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Url;

public interface MenuService {

    @GET
    Call<List<MainMenu>> getProducts(@Url String url);
}
