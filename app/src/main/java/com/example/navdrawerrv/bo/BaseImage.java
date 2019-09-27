
package com.example.navdrawerrv.bo;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class BaseImage {

    @SerializedName("_id")
    @Expose
    private String id;
    @SerializedName("product_id")
    @Expose
    private String productId;
    @SerializedName("parent_id")
    @Expose
    private Object parentId;
    @SerializedName("lft")
    @Expose
    private int lft;
    @SerializedName("rgt")
    @Expose
    private int rgt;
    @SerializedName("depth")
    @Expose
    private int depth;
    @SerializedName("type")
    @Expose
    private String type;
    @SerializedName("has_thumbnail")
    @Expose
    private int hasThumbnail;
    @SerializedName("meta")
    @Expose
    private String meta;
    @SerializedName("filename")
    @Expose
    private String filename;
    @SerializedName("alias")
    @Expose
    private String alias;
    @SerializedName("public_resource_url")
    @Expose
    private String publicResourceUrl;
    @SerializedName("imagetype")
    @Expose
    private String imagetype;
    @SerializedName("updateflag")
    @Expose
    private int updateflag;
    @SerializedName("is_new")
    @Expose
    private Object isNew;
    @SerializedName("is_delete")
    @Expose
    private int isDelete;
    @SerializedName("updated_at")
    @Expose
    private String updatedAt;
    @SerializedName("created_at")
    @Expose
    private String createdAt;
    @SerializedName("image_url")
    @Expose
    private String imageUrl;
    @SerializedName("image_small_url")
    @Expose
    private String imageSmallUrl;
    @SerializedName("image_thumb_url")
    @Expose
    private String imageThumbUrl;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public Object getParentId() {
        return parentId;
    }

    public void setParentId(Object parentId) {
        this.parentId = parentId;
    }

    public int getLft() {
        return lft;
    }

    public void setLft(int lft) {
        this.lft = lft;
    }

    public int getRgt() {
        return rgt;
    }

    public void setRgt(int rgt) {
        this.rgt = rgt;
    }

    public int getDepth() {
        return depth;
    }

    public void setDepth(int depth) {
        this.depth = depth;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getHasThumbnail() {
        return hasThumbnail;
    }

    public void setHasThumbnail(int hasThumbnail) {
        this.hasThumbnail = hasThumbnail;
    }

    public String getMeta() {
        return meta;
    }

    public void setMeta(String meta) {
        this.meta = meta;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getPublicResourceUrl() {
        return publicResourceUrl;
    }

    public void setPublicResourceUrl(String publicResourceUrl) {
        this.publicResourceUrl = publicResourceUrl;
    }

    public String getImagetype() {
        return imagetype;
    }

    public void setImagetype(String imagetype) {
        this.imagetype = imagetype;
    }

    public int getUpdateflag() {
        return updateflag;
    }

    public void setUpdateflag(int updateflag) {
        this.updateflag = updateflag;
    }

    public Object getIsNew() {
        return isNew;
    }

    public void setIsNew(Object isNew) {
        this.isNew = isNew;
    }

    public int getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(int isDelete) {
        this.isDelete = isDelete;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageSmallUrl() {
        return imageSmallUrl;
    }

    public void setImageSmallUrl(String imageSmallUrl) {
        this.imageSmallUrl = imageSmallUrl;
    }

    public String getImageThumbUrl() {
        return imageThumbUrl;
    }

    public void setImageThumbUrl(String imageThumbUrl) {
        this.imageThumbUrl = imageThumbUrl;
    }

}
