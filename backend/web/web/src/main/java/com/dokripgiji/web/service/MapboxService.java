package com.dokripgiji.web.service;

import com.dokripgiji.web.controller.dto.AddressRequestDto;
import com.dokripgiji.web.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
@RequiredArgsConstructor
public class MapboxService {

    public void MapboxFilter(AddressRequestDto requestDto) {

        String MapboxURL="https://api.mapbox.com/isochrone/v1";
        String profile="/mapbox/walking";
        String coordinates="/"+ requestDto.getLongitude() +","+ requestDto.getLatitude();
        String contours_minutes="?contours_meters="+requestDto.getN();
        String token = "{credential}";

        String apiURL = MapboxURL+profile+coordinates+contours_minutes+"&access_token="+token;

        System.out.println(apiURL);

        try {
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setRequestMethod("GET");
            int responseCode = con.getResponseCode();
            BufferedReader br;
            if(responseCode==200) { // 정상 호출
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {  // 에러 발생
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();
            System.out.println(response.toString());

//            JSONObject jObject = new JSONObject(response);
//            JSONObject features = jObject.getJSONObject("features");
//            JSONObject properties = jObject.getJSONObject("properties");
//
//            String fill = properties.getString("fill");
//
//            System.out.println("fill = " + fill);


        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
