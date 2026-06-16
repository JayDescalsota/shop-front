'use client';

import VehicleList from '@/components/VehicleList';

export default function Vehicles() {
  return (
    <VehicleList
      title="Vehicles"
      description="Track customer vehicles and service history"
      showOwner
      linkToDetail
      detailPrefix="/repair/vehicles/"
      showAddAppointment
    />
  );
}
