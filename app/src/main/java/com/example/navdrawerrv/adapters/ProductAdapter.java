package com.example.navdrawerrv.adapters;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.navdrawerrv.R;
import com.example.navdrawerrv.bo.Product;

import java.util.List;

public class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.ProductViewHolder> {

    private Context ctx;
    private List<Product> lstProducts;

    public ProductAdapter(Context ctx, List<Product> lstProducts) {
        this.ctx = ctx;
        this.lstProducts = lstProducts;
    }

    @NonNull
    @Override
    public ProductViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(ctx);
        View view = inflater.inflate(R.layout.product_item, parent, false);
        return new ProductViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ProductViewHolder holder, int position) {
        Product prodObj = lstProducts.get(position);
        holder.productName.setText(prodObj.getName());
        holder.productPrice.setText("Rs. " + String.valueOf(prodObj.getPrice()));
        Glide.with(ctx).load(prodObj.getBaseImage().getImageUrl()).placeholder(R.drawable.icon).into(holder.productImage);
//        Glide.with(ctx).load(R.drawable.icon).into(holder.productImage);
    }

    @Override
    public int getItemCount() {
        return lstProducts.size();
    }

    public class ProductViewHolder extends RecyclerView.ViewHolder {

        ImageView productImage;
        TextView productName, productPrice;

        public ProductViewHolder(@NonNull View itemView) {
            super(itemView);
            productImage = itemView.findViewById(R.id.productImage);
            productName = itemView.findViewById(R.id.productName);
            productPrice = itemView.findViewById(R.id.productPrice);
        }
    }
}
