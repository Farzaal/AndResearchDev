package com.example.navdrawerrv.adapters;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.navdrawerrv.R;
import com.example.navdrawerrv.bo.MainMenu;
import com.example.navdrawerrv.fragments.CategoryProductListing;
import com.example.navdrawerrv.utils.Helper;
import com.example.navdrawerrv.utils.RenderFragments;

import java.util.List;

public class MenuAdapter extends RecyclerView.Adapter<MenuAdapter.MenuViewHolder> {
    Context context;
    List<MainMenu> lstMenu;
    DrawerLayout mDrawerLayout;

    public MenuAdapter(Context context, List<MainMenu> lstMenu, DrawerLayout mDrawerLayout) {
        this.context = context;
        this.lstMenu = lstMenu;
        this.mDrawerLayout = mDrawerLayout;
    }

    @Override
    public MenuViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(context).inflate(R.layout.menu_item, parent, false);
        return new MenuViewHolder(view);
    }

    @Override
    public void onBindViewHolder(MenuViewHolder holder, int position) {
        final MainMenu menu = lstMenu.get(position);
        Glide.with(context).load(R.drawable.icon).into(holder.menuIcon);
        holder.menuName.setText(menu.getName());

        holder.menuName.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String[] path = Helper.splitUrlBySlash(menu.getUrl());
                menu.setUriString(path[3]);
                mDrawerLayout.closeDrawer(GravityCompat.START);
                Fragment fragment = new CategoryProductListing();
                Bundle bundle = new Bundle();
                bundle.putSerializable("selectedMenu", menu); ;
                fragment.setArguments(bundle);
                RenderFragments.displayFragment(context, fragment, mDrawerLayout);
            }
        });
    }

    @Override
    public int getItemCount() {
        return lstMenu.size();
    }

    public class MenuViewHolder extends RecyclerView.ViewHolder {
        ImageView menuIcon;
        TextView menuName;

        public MenuViewHolder(View itemView) {
            super(itemView);
            menuIcon = (ImageView) itemView.findViewById(R.id.menuIcon);
            menuName = (TextView) itemView.findViewById(R.id.menuName);
        }
    }
}
