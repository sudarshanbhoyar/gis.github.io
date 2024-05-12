var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ind_dem_mod1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ind_dem_mod1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ind_dem_mod1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [7580857.323022, 747546.356973, 10853650.221432, 4245720.660442]
                            })
                        });
var format_STATE_2 = new ol.format.GeoJSON();
var features_STATE_2 = format_STATE_2.readFeatures(json_STATE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STATE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STATE_2.addFeatures(features_STATE_2);
var lyr_STATE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STATE_2, 
                style: style_STATE_2,
                popuplayertitle: "STATE",
                interactive: true,
                title: '<img src="styles/legend/STATE_2.png" /> STATE'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ind_dem_mod1_1.setVisible(true);lyr_STATE_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ind_dem_mod1_1,lyr_STATE_2];
lyr_STATE_2.set('fieldAliases', {'STATE': 'STATE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_STATE_2.set('fieldImages', {'STATE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_STATE_2.set('fieldLabels', {'STATE': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_STATE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});