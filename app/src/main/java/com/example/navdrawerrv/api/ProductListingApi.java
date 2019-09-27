package com.example.navdrawerrv.api;

import com.example.navdrawerrv.services.ProductListingService;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ProductListingApi {

    public static final String customUrl = "https://custom.yayvo.com:3333/api/v1/";

    public static ProductListingService photoService = null;

    public static ProductListingService getService() {

        if(photoService == null) {
            Retrofit retrofit = new Retrofit.Builder()
                    .baseUrl(customUrl)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
            photoService = retrofit.create(ProductListingService.class);
        }
        return photoService;
    }
}
