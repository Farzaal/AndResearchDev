package com.example.navdrawerrv;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.navdrawerrv.adapters.MenuAdapter;
import com.example.navdrawerrv.api.MainMenuApi;
import com.example.navdrawerrv.bo.MainMenu;
import com.example.navdrawerrv.fragments.HomePage;
import com.example.navdrawerrv.utils.RenderFragments;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    private DrawerLayout mDrawerLayout;
    private RecyclerView list;
    private MenuAdapter recyclerAdapter;
    List<MainMenu> listMenu = new ArrayList<>();
    Fragment fragment = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        mDrawerLayout = (DrawerLayout) findViewById(R.id.drawerLayout);
        list = (RecyclerView) findViewById(R.id.list);
        getData();

        ActionBarDrawerToggle mDrawerToggle = new ActionBarDrawerToggle(this, mDrawerLayout, toolbar, R.string.app_name, R.string.app_name);
        mDrawerLayout.addDrawerListener(mDrawerToggle);
        mDrawerToggle.syncState();
    }

    private void getData() {

        String url = MainMenuApi.customUrl + "main-menu";
        Call<List<MainMenu>> menuList = MainMenuApi.getService().getProducts(url);
        menuList.enqueue(new Callback<List<MainMenu>>() {
            @Override
            public void onResponse(Call<List<MainMenu>> call, Response<List<MainMenu>> response) {
                List<MainMenu> listMenu = response.body();
                LinearLayoutManager layoutManager = new LinearLayoutManager(MainActivity.this);
                list.setLayoutManager(layoutManager);
                recyclerAdapter = new MenuAdapter(MainActivity.this, listMenu, mDrawerLayout);
                list.setAdapter(recyclerAdapter);
//                list.setHasFixedSize(true); // Improves Performance
                recyclerAdapter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Call<List<MainMenu>> call, Throwable t) {
                t.printStackTrace();
                Toast.makeText(MainActivity.this, "Something Went Wrong", Toast.LENGTH_LONG).show();
            }
        });
    }
}
