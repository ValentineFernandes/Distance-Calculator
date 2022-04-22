<template>
  <section class="map" ref="map"></section>
</template>
<script>
import { EventBus } from "@/EventBus";
import axios from "axios";
export default {
  data() {
    return {
      map: null
    };
  },
  mounted() {
    const directionsService = new google.maps.DirectionsService();

    EventBus.$on("routes-data", routes => {
      this.map = new google.maps.Map(this.$refs["map"], {
        center: new google.maps.LatLng(45.4215296, -75.6971931),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      routes.forEach(({ origin, destination, distance, duration, color }) => {
        directionsService.route(
          {
            origin: origin.address,
            destination: destination.address,
            travelMode: "DRIVING"
          },
          (response, status) => {
            if (status === "OK") {
              const directionsRenderer = new google.maps.DirectionsRenderer({
                suppressMarkers: true,
                directions: response,
                map: this.map,
                polylineOptions: {
                  strokeColor: color,
                  strokeWeight: 8
                }
              });

              this.createInfoWindowWith(origin, "marker alternate", color);
              this.createInfoWindowWith(destination, "flag checkered", color);

              const overviewPath = response.routes[0].overview_path;
              const middleIndex = parseInt(overviewPath.length / 2);
              const middleLoc = overviewPath[middleIndex];

              const distanceDurationLabel = new google.maps.InfoWindow({
                content: `<div style="background-color:${color};padding:5px;"><i class="icon car"></i> ${distance.text} - ${duration.text}</div>`,
                position: new google.maps.LatLng(
                  middleLoc.lat(),
                  middleLoc.lng()
                )
              });
              distanceDurationLabel.open(this.map, null);

              this.createPolylineWith(
                [
                  { lat: origin.lat, lng: origin.lng },
                  { lat: overviewPath[0].lat(), lng: overviewPath[0].lng() }
                ],
                color
              );

              this.createPolylineWith(
                [
                  { lat: destination.lat, lng: destination.lng },
                  {
                    lat: overviewPath[overviewPath.length - 1].lat(),
                    lng: overviewPath[overviewPath.length - 1].lng()
                  }
                ],
                color
              );
            }
          }
        );
      });
    });
  },
  methods: {
    createInfoWindowWith(location, icon, color) {
      const infoWindow = new google.maps.InfoWindow({
        content: `<div style="background-color:${color};padding:5px;"><i class="${icon} icon"></i> ${location.address}</div>`,
        position: new google.maps.LatLng(location.lat, location.lng)
      });

      infoWindow.open(this.map, null);
    },
    createPolylineWith(path, color) {
      new google.maps.Polyline({
        path: path,
        strokeColor: color,
        strokeOpacity: 1,
        strokeWeight: 8,
        map: this.map
      });
    }
  }
};
</script>  
<style >
.map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.gm-style-iw button {
  display: none !important;
}

.gm-style .gm-style-iw-c {
  padding: 0px !important;
}

.gm-style-iw-d {
  overflow: hidden !important;
}
</style>
