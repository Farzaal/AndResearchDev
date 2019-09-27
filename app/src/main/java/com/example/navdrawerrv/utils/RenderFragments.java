package com.example.navdrawerrv.utils;

import android.content.Context;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentTransaction;
import com.example.navdrawerrv.R;

public class RenderFragments {

    public static void displayFragment(Context ctx, Fragment fragment, DrawerLayout drawerLayout) {

        if (fragment != null) {
            FragmentTransaction ft = ((AppCompatActivity)ctx).getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.content_frame, fragment);
            ft.commit();
        }
        drawerLayout.closeDrawer(GravityCompat.START);
    }
}
