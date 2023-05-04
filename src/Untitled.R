library("tidyverse")
library("leaflet")
petmap <- Book5

# Define a custom icon
redIcon <- makeIcon(
  iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconWidth = 25, iconHeight = 41,
  iconAnchorX = 12, iconAnchorY = 41,
  popupAnchorX = 1, popupAnchorY = -34
)

petmap %>% 
  leaflet() %>%
  addProviderTiles(providers$OpenStreetMap.Mapnik, group = "OpenStreetMap.Mapnik") %>%
  addProviderTiles(providers$Stamen.TonerLite, group = "Toner Lite") %>%
  addLayersControl(baseGroups = c("Toner Lite", "OpenStreetMap.Mapnik")) %>%
  addMarkers(label = petmap$FoodBank,
             clusterOptions = markerClusterOptions(),
             popup = TRUE,
             icon = redIcon) %>%
  setView(lat = 52.4862 , lng = 1.8904, zoom = 6) 













