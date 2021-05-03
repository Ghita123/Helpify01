import React from "react"

import { addCircleToMap, addDraggableMarker, setUpClickListener } from "./mapMethods"





export const MapWithMarker = ({ positionHook }) => {

    const [position, setPosition] = positionHook;
    // Create a reference to the HTML element we want to put the map on
    const mapRef = React.useRef(null);

    /**
     * Create the map instance
     * While `useEffect` could also be used here, `useLayoutEffect` will render
     * the map sooner
     */
    React.useLayoutEffect(() => {
        // `mapRef.current` will be `undefined` when this hook first runs; edge case that
        if (!mapRef.current) return;
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "yjaflxNQndwZgmO2rlM--Z6J8KTXunjBrEtH81Fzq14"
        });
        const defaultLayers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: { lat: 35.6475, lng: -5.7886 },
            zoom: 5,
            pixelRatio: window.devicePixelRatio || 1
        });

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));


        addDraggableMarker(hMap, behavior, positionHook)


        const ui = H.ui.UI.createDefault(hMap, defaultLayers);

        // This will act as a cleanup to run once this hook runs again.
        // This includes when the component un-mounts
        return () => {
            hMap.dispose();
        };
    }, [mapRef]); // This will run this hook every time this ref is updated

    return <div className="  rounded-lg  md:w-4/5 w-96" ref={mapRef} style={{ height: "500px" }} />;
};