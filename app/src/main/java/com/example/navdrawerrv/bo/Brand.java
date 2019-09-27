
package com.example.navdrawerrv.bo;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Brand {

    @SerializedName("_id")
    @Expose
    private String id;
    @SerializedName("id")
    @Expose
    private int replaceId;
    @SerializedName("attribute_id")
    @Expose
    private int attributeId;
    @SerializedName("option_id_yayvo")
    @Expose
    private int optionIdYayvo;
    @SerializedName("option_value")
    @Expose
    private String optionValue;
    @SerializedName("created_at")
    @Expose
    private Object createdAt;
    @SerializedName("updated_at")
    @Expose
    private Object updatedAt;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getReplaceId() {
        return replaceId;
    }

    public void setReplaceId(int replaceId) {
        this.replaceId = replaceId;
    }

    public int getAttributeId() {
        return attributeId;
    }

    public void setAttributeId(int attributeId) {
        this.attributeId = attributeId;
    }

    public int getOptionIdYayvo() {
        return optionIdYayvo;
    }

    public void setOptionIdYayvo(int optionIdYayvo) {
        this.optionIdYayvo = optionIdYayvo;
    }

    public String getOptionValue() {
        return optionValue;
    }

    public void setOptionValue(String optionValue) {
        this.optionValue = optionValue;
    }

    public Object getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Object createdAt) {
        this.createdAt = createdAt;
    }

    public Object getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Object updatedAt) {
        this.updatedAt = updatedAt;
    }

}
