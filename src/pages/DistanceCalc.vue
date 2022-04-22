<template>
  <main>
    <OriginDestinationForm />
    <RouteList />
    <DirectionsMapView />
  </main>
</template>

<script>
import OriginDestinationForm from "@/components/OriginDestinationForm";
import RouteList from "@/components/RouteList";
import DirectionsMapView from "@/components/DirectionsMapView";

export default {
  components: { OriginDestinationForm, RouteList, DirectionsMapView },
};
</script>