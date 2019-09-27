
package com.example.navdrawerrv.bo;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Product {

    @SerializedName("_id")
    @Expose
    private String id;
    @SerializedName("attribute_set_id")
    @Expose
    private int attributeSetId;
    @SerializedName("universal_sku_id")
    @Expose
    private int universalSkuId;
    @SerializedName("vendor_id")
    @Expose
    private int vendorId;
    @SerializedName("sku")
    @Expose
    private String sku;
    @SerializedName("mode_of_fullfillment")
    @Expose
    private int modeOfFullfillment;
    @SerializedName("magento_productid")
    @Expose
    private String magentoProductid;
    @SerializedName("create_by")
    @Expose
    private int createBy;
    @SerializedName("update_by")
    @Expose
    private Object updateBy;
    @SerializedName("productupdateflag")
    @Expose
    private int productupdateflag;
    @SerializedName("created_at")
    @Expose
    private String createdAt;
    @SerializedName("updated_at")
    @Expose
    private String updatedAt;
    @SerializedName("is_disable")
    @Expose
    private int isDisable;
    @SerializedName("magento_sku")
    @Expose
    private String magentoSku;
    @SerializedName("out_of_stock")
    @Expose
    private int outOfStock;
    @SerializedName("category_id")
    @Expose
    private int categoryId;
    @SerializedName("attribute_option_brand_id")
    @Expose
    private int attributeOptionBrandId;
    @SerializedName("cost")
    @Expose
    private int cost;
    @SerializedName("description")
    @Expose
    private String description;
    @SerializedName("dropship_qty")
    @Expose
    private int dropshipQty;
    @SerializedName("name")
    @Expose
    private String name;
    @SerializedName("pending_app_qc")
    @Expose
    private int pendingAppQc;
    @SerializedName("pending_app_vm")
    @Expose
    private int pendingAppVm;
    @SerializedName("price")
    @Expose
    private int price;
    @SerializedName("product_position")
    @Expose
    private int productPosition;
    @SerializedName("pushtomagento")
    @Expose
    private int pushtomagento;
    @SerializedName("short_description")
    @Expose
    private String shortDescription;
    @SerializedName("special_from_date")
    @Expose
    private Object specialFromDate;
    @SerializedName("special_price")
    @Expose
    private int specialPrice;
    @SerializedName("special_to_date")
    @Expose
    private Object specialToDate;
    @SerializedName("type_qc")
    @Expose
    private String typeQc;
    @SerializedName("type_vm")
    @Expose
    private String typeVm;
    @SerializedName("url")
    @Expose
    private String url;
    @SerializedName("discount")
    @Expose
    private String discount;
    @SerializedName("unitPrice")
    @Expose
    private int unitPrice;
    @SerializedName("in_stock")
    @Expose
    private boolean inStock;
    @SerializedName("baseImage")
    @Expose
    private BaseImage baseImage;
    @SerializedName("brand")
    @Expose
    private Brand brand;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getAttributeSetId() {
        return attributeSetId;
    }

    public void setAttributeSetId(int attributeSetId) {
        this.attributeSetId = attributeSetId;
    }

    public int getUniversalSkuId() {
        return universalSkuId;
    }

    public void setUniversalSkuId(int universalSkuId) {
        this.universalSkuId = universalSkuId;
    }

    public int getVendorId() {
        return vendorId;
    }

    public void setVendorId(int vendorId) {
        this.vendorId = vendorId;
    }

    public String getSku() {
        return sku;
    }

    public void setSku(String sku) {
        this.sku = sku;
    }

    public int getModeOfFullfillment() {
        return modeOfFullfillment;
    }

    public void setModeOfFullfillment(int modeOfFullfillment) {
        this.modeOfFullfillment = modeOfFullfillment;
    }

    public String getMagentoProductid() {
        return magentoProductid;
    }

    public void setMagentoProductid(String magentoProductid) {
        this.magentoProductid = magentoProductid;
    }

    public int getCreateBy() {
        return createBy;
    }

    public void setCreateBy(int createBy) {
        this.createBy = createBy;
    }

    public Object getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(Object updateBy) {
        this.updateBy = updateBy;
    }

    public int getProductupdateflag() {
        return productupdateflag;
    }

    public void setProductupdateflag(int productupdateflag) {
        this.productupdateflag = productupdateflag;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public int getIsDisable() {
        return isDisable;
    }

    public void setIsDisable(int isDisable) {
        this.isDisable = isDisable;
    }

    public String getMagentoSku() {
        return magentoSku;
    }

    public void setMagentoSku(String magentoSku) {
        this.magentoSku = magentoSku;
    }

    public int getOutOfStock() {
        return outOfStock;
    }

    public void setOutOfStock(int outOfStock) {
        this.outOfStock = outOfStock;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public int getAttributeOptionBrandId() {
        return attributeOptionBrandId;
    }

    public void setAttributeOptionBrandId(int attributeOptionBrandId) {
        this.attributeOptionBrandId = attributeOptionBrandId;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getDropshipQty() {
        return dropshipQty;
    }

    public void setDropshipQty(int dropshipQty) {
        this.dropshipQty = dropshipQty;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPendingAppQc() {
        return pendingAppQc;
    }

    public void setPendingAppQc(int pendingAppQc) {
        this.pendingAppQc = pendingAppQc;
    }

    public int getPendingAppVm() {
        return pendingAppVm;
    }

    public void setPendingAppVm(int pendingAppVm) {
        this.pendingAppVm = pendingAppVm;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getProductPosition() {
        return productPosition;
    }

    public void setProductPosition(int productPosition) {
        this.productPosition = productPosition;
    }

    public int getPushtomagento() {
        return pushtomagento;
    }

    public void setPushtomagento(int pushtomagento) {
        this.pushtomagento = pushtomagento;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    public Object getSpecialFromDate() {
        return specialFromDate;
    }

    public void setSpecialFromDate(Object specialFromDate) {
        this.specialFromDate = specialFromDate;
    }

    public int getSpecialPrice() {
        return specialPrice;
    }

    public void setSpecialPrice(int specialPrice) {
        this.specialPrice = specialPrice;
    }

    public Object getSpecialToDate() {
        return specialToDate;
    }

    public void setSpecialToDate(Object specialToDate) {
        this.specialToDate = specialToDate;
    }

    public String getTypeQc() {
        return typeQc;
    }

    public void setTypeQc(String typeQc) {
        this.typeQc = typeQc;
    }

    public String getTypeVm() {
        return typeVm;
    }

    public void setTypeVm(String typeVm) {
        this.typeVm = typeVm;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public int getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(int unitPrice) {
        this.unitPrice = unitPrice;
    }

    public boolean isInStock() {
        return inStock;
    }

    public void setInStock(boolean inStock) {
        this.inStock = inStock;
    }

    public BaseImage getBaseImage() {
        return baseImage;
    }

    public void setBaseImage(BaseImage baseImage) {
        this.baseImage = baseImage;
    }

    public Brand getBrand() {
        return brand;
    }

    public void setBrand(Brand brand) {
        this.brand = brand;
    }

}
