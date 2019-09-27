package com.example.navdrawerrv.services;

import com.example.navdrawerrv.bo.ProductListing;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Url;

public interface ProductListingService {

    @GET
    Call<ProductListing> getProducts(@Url String url);

}
