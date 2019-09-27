package com.example.navdrawerrv.utils;

public class Helper {

    public static String[] splitUrlBySlash(String url) {
        String[] temp = {};
        try {
            temp = url.split("/");
        } catch (Exception ex){
            ex.printStackTrace();
        }
        return temp;
    }
}
