package com.example.navdrawerrv.services;

import com.example.navdrawerrv.bo.MainMenu;
import com.example.navdrawerrv.bo.UrlRewrite;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Url;

public interface UrlRewriteService {

    @GET
    Call<UrlRewrite> UrlRewrite(@Url String url);
}
