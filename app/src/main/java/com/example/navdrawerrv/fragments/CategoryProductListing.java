package com.example.navdrawerrv.fragments;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AbsListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.navdrawerrv.MainActivity;
import com.example.navdrawerrv.R;
import com.example.navdrawerrv.adapters.MenuAdapter;
import com.example.navdrawerrv.adapters.ProductAdapter;
import com.example.navdrawerrv.api.MainMenuApi;
import com.example.navdrawerrv.api.ProductListingApi;
import com.example.navdrawerrv.api.UrlRewriteApi;
import com.example.navdrawerrv.bo.MainMenu;
import com.example.navdrawerrv.bo.Product;
import com.example.navdrawerrv.bo.ProductListing;
import com.example.navdrawerrv.bo.UrlRewrite;
import com.github.ybq.android.spinkit.SpinKitView;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CategoryProductListing extends Fragment {

    MainMenu menuObj = null;
    RecyclerView recyclerView;
    String page = "1", lastPage = "", totalProducts = "";
    boolean isScrolling = false;
    ProductAdapter prodAdapter;
    LinearLayoutManager manager;
    int currentItems, totalItems, scrollOutItems;
    SpinKitView progress;
    TextView endResuts;
    List<Product> lstProducts = new ArrayList<>();
    Integer categoryId;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        Bundle bundle = getArguments();
        menuObj = (MainMenu) bundle.getSerializable("selectedMenu");
        View view = inflater.inflate(R.layout.category_product_listing, container, false);
        recyclerView = (RecyclerView) view.findViewById(R.id.recyclerView);
        progress = (SpinKitView) view.findViewById(R.id.spin_kit);
        getCategoryDetails();
        return view;
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        getActivity().setTitle(menuObj.getUriString() + " (" + totalProducts + " Products)");
    }

    public void getCategoryDetails() {

        String url = MainMenuApi.customUrl + "url_rewrite/"+ menuObj.getUriString() +"?id="+ menuObj.getUriString();
        progress.setVisibility(View.VISIBLE);
        Call<UrlRewrite> urlRewriteObj = UrlRewriteApi.getService().UrlRewrite(url);
        urlRewriteObj.enqueue(new Callback<UrlRewrite>() {
            @Override
            public void onResponse(Call<UrlRewrite> call, Response<UrlRewrite> response) {
                UrlRewrite urlObj = response.body();
                Log.d("UrlRewrite", String.valueOf(urlObj.getItemId()));
                categoryId = urlObj.getItemId();
//                progress.setVisibility(View.GONE);
                setrecyclerViewDetails();
            }

            @Override
            public void onFailure(Call<UrlRewrite> call, Throwable t) {
                t.printStackTrace();
                Toast.makeText(getContext(),"Something Went Wrong", Toast.LENGTH_LONG).show();
            }
        });
    }

    private void setrecyclerViewDetails() {
        manager = new LinearLayoutManager(getContext());
        recyclerView.setLayoutManager(manager);
        prodAdapter = new ProductAdapter(getContext(), lstProducts);
        recyclerView.setAdapter(prodAdapter);
        recyclerView.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
                super.onScrollStateChanged(recyclerView, newState);
                if ( newState == AbsListView.OnScrollListener.SCROLL_STATE_TOUCH_SCROLL) {
                    isScrolling = true;
                }
            }

            @Override
            public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
                super.onScrolled(recyclerView, dx, dy);
                currentItems = manager.getChildCount();
                totalItems = manager.getItemCount();
                scrollOutItems = manager.findFirstVisibleItemPosition();

                if(isScrolling && (currentItems + scrollOutItems == totalItems)) {
                    isScrolling = false;
                    if(!page.equalsIgnoreCase(lastPage)) {
                        page = (Integer.parseInt(page)+1)+"";
                        fetchCategoryProducts();
                    }
                }
            }
        });
        fetchCategoryProducts();
    }

    private void fetchCategoryProducts() {

        String url = ProductListingApi.customUrl + "products?category_id="+ categoryId +"&page=" + page + "&order=product_position&dir=asc";
        Log.d("URLS_PAGE", url);
        progress.setVisibility(View.VISIBLE);
        Call<ProductListing> productList = ProductListingApi.getService().getProducts(url);
        productList.enqueue(new Callback<ProductListing>() {
            @Override
            public void onResponse(Call<ProductListing> call, Response<ProductListing> response) {
                ProductListing list = response.body();
                lastPage = String.valueOf(list.getLastPage());
                lstProducts.addAll(list.getData());
                totalProducts = list.getTotal()+ "";
//                prodAdapter = new ProductAdapter(MainActivity.this, lstProducts);
//                recyclerView.setAdapter(prodAdapter); SET ADAPTER AT TOP SO IT DOES NOT SCROLL TO TOP WHEN LOAD MORE
                prodAdapter.notifyDataSetChanged();
                progress.setVisibility(View.GONE);
            }

            @Override
            public void onFailure(Call<ProductListing> call, Throwable t) {
                t.printStackTrace();
                Toast.makeText(getContext(), "Something Went Wrong", Toast.LENGTH_LONG).show();
            }
        });
    }
}
