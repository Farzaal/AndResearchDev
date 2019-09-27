
package com.example.navdrawerrv.bo;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class UrlRewrite {

    @SerializedName("_id")
    @Expose
    private String id;
    @SerializedName("item_id")
    @Expose
    private Integer itemId;
    @SerializedName("type")
    @Expose
    private String type;
    @SerializedName("url")
    @Expose
    private String url;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getItemId() {
        return itemId;
    }

    public void setItemId(Integer itemId) {
        this.itemId = itemId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
