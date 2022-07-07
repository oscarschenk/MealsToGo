import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compant-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return (
    <>
      <CompactRestaurantInfo isMap restaurant={restaurant} />
    </>
  );
};
