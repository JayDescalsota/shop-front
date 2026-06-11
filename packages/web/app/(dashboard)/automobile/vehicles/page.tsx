'use client';

import { useMemo } from 'react';
import { useCustomersQuery } from '@/graphql/generated/hooks';
import VehicleList from '@/components/VehicleList';

export default function AutomobileVehicles() {
  const { data: custData } = useCustomersQuery();

  const currentEmail = typeof window !== 'undefined' ? (() => { try { const t = localStorage.getItem('token'); return t ? JSON.parse(atob(t.split('.')[1])).email || '' : ''; } catch { return ''; } })() : '';
  const defaultCustomerId = useMemo(() => {
    if (!currentEmail || !custData?.customers?.items) return '';
    return custData.customers.items.find((c) => c.email === currentEmail)?.id || '';
  }, [currentEmail, custData]);

  return (
    <VehicleList
      title="Vehicles"
      description="Manage fleet vehicles"
      showOwner={false}
      hideOwnerModal
      showSendToShop
      linkToDetail
      detailPrefix="/automobile/vehicles/"
      defaultCustomerId={defaultCustomerId}
    />
  );
}
