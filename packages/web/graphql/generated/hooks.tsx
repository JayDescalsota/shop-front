/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateAppointmentInput = {
  assignedMechanic?: string | null | undefined;
  bay?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerName: string;
  customerPhone?: string | null | undefined;
  description?: string | null | undefined;
  endTime?: string | null | undefined;
  notes?: string | null | undefined;
  scheduledDate: string;
  serviceType: string;
  shopId?: string | null | undefined;
  startTime: string;
  tenantId: string | number;
  vehicleMake: string;
  vehicleModel: string;
  vehiclePlate?: string | null | undefined;
  vehicleYear?: number | null | undefined;
};

export type CreateCustomerInput = {
  address?: string | null | undefined;
  city?: string | null | undefined;
  email?: string | null | undefined;
  name: string;
  notes?: string | null | undefined;
  phone?: string | null | undefined;
  state?: string | null | undefined;
  tenantId: string | number;
  zip?: string | null | undefined;
};

export type CreatePartBatchInput = {
  partId: string | number;
  quantity: number;
  unitCost: number;
};

export type CreateShopPartInput = {
  description?: string | null | undefined;
  locationId?: string | null | undefined;
  makeId?: string | null | undefined;
  modelId?: string | null | undefined;
  name: string;
  quantity?: number | null | undefined;
  sku?: string | null | undefined;
  tenantId: string | number;
  unitPrice?: number | null | undefined;
  year?: number | null | undefined;
};

export type CreateShopServiceInput = {
  category?: string | null | undefined;
  code?: string | null | undefined;
  estimatedHours?: number | null | undefined;
  name: string;
  serviceTypeId: string | number;
  system?: string | null | undefined;
  tenantId: string | number;
};

export type CreateShopToolInput = {
  description?: string | null | undefined;
  name: string;
  quantity?: number | null | undefined;
  status?: string | null | undefined;
  tenantId: string | number;
};

export type CreateStaffAssignmentInput = {
  appointmentId: string | number;
  notes?: string | null | undefined;
  role: string;
  staffId: string | number;
  staffName: string;
  tenantId: string | number;
};

export type CreateStaffInput = {
  address?: string | null | undefined;
  assignedVehicleId?: string | number | null | undefined;
  dateOfBirth?: string | null | undefined;
  email?: string | null | undefined;
  emergencyContact?: string | null | undefined;
  emergencyPhone?: string | null | undefined;
  hireDate?: string | null | undefined;
  licenseClass?: string | null | undefined;
  licenseExpiry?: string | null | undefined;
  licenseNumber?: string | null | undefined;
  name: string;
  notes?: string | null | undefined;
  phone?: string | null | undefined;
  role?: string | null | undefined;
  status?: string | null | undefined;
  tenantId: string | number;
};

export type CreateVehicleInput = {
  color?: string | null | undefined;
  currentMileage?: number | null | undefined;
  customerId?: string | number | null | undefined;
  engineType?: string | null | undefined;
  fuelType?: string | null | undefined;
  licensePlate?: string | null | undefined;
  make: string;
  model: string;
  notes?: string | null | undefined;
  ownerId: string | number;
  purchaseDate?: string | null | undefined;
  purchasePrice?: number | null | undefined;
  repairStatus?: string | null | undefined;
  status?: string | null | undefined;
  tenantId: string | number;
  transmission?: string | null | undefined;
  vin?: string | null | undefined;
  year?: number | null | undefined;
};

export type UpdateAppointmentInput = {
  assignedMechanic?: string | null | undefined;
  bay?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerName?: string | null | undefined;
  customerPhone?: string | null | undefined;
  description?: string | null | undefined;
  notes?: string | null | undefined;
  serviceType?: string | null | undefined;
  status?: string | null | undefined;
  vehicleMake?: string | null | undefined;
  vehicleModel?: string | null | undefined;
  vehiclePlate?: string | null | undefined;
  vehicleYear?: number | null | undefined;
};

export type UpdateCustomerInput = {
  address?: string | null | undefined;
  city?: string | null | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  notes?: string | null | undefined;
  phone?: string | null | undefined;
  state?: string | null | undefined;
  status?: string | null | undefined;
  zip?: string | null | undefined;
};

export type UpdateShopPartInput = {
  description?: string | null | undefined;
  locationId?: string | null | undefined;
  makeId?: string | null | undefined;
  modelId?: string | null | undefined;
  name?: string | null | undefined;
  quantity?: number | null | undefined;
  sku?: string | null | undefined;
  unitPrice?: number | null | undefined;
  year?: number | null | undefined;
};

export type UpdateShopToolInput = {
  description?: string | null | undefined;
  name?: string | null | undefined;
  quantity?: number | null | undefined;
  status?: string | null | undefined;
};

export type UpdateStaffAssignmentInput = {
  notes?: string | null | undefined;
  status?: string | null | undefined;
  totalMinutes?: number | null | undefined;
};

export type UpdateStaffInput = {
  address?: string | null | undefined;
  assignedVehicleId?: string | number | null | undefined;
  dateOfBirth?: string | null | undefined;
  email?: string | null | undefined;
  emergencyContact?: string | null | undefined;
  emergencyPhone?: string | null | undefined;
  hireDate?: string | null | undefined;
  licenseClass?: string | null | undefined;
  licenseExpiry?: string | null | undefined;
  licenseNumber?: string | null | undefined;
  name?: string | null | undefined;
  notes?: string | null | undefined;
  phone?: string | null | undefined;
  role?: string | null | undefined;
  status?: string | null | undefined;
};

export type UpdateVehicleInput = {
  color?: string | null | undefined;
  currentMileage?: number | null | undefined;
  licensePlate?: string | null | undefined;
  make?: string | null | undefined;
  model?: string | null | undefined;
  notes?: string | null | undefined;
  repairStatus?: string | null | undefined;
  status?: string | null | undefined;
  vin?: string | null | undefined;
  year?: number | null | undefined;
};

export type VehicleMakesQueryVariables = Exact<{ [key: string]: never; }>;


export type VehicleMakesQuery = { vehicleMakes: Array<{ id: string, name: string, slug: string }> };

export type VehicleModelsQueryVariables = Exact<{
  makeId: string | number;
}>;


export type VehicleModelsQuery = { vehicleModels: Array<{ id: string, name: string, slug: string, yearStart: number | null, yearEnd: number | null, vehicleType: string | null }> };

export type ServiceTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServiceTypesQuery = { serviceTypes: Array<{ id: string, name: string, code: string, category: string, system: string, estimatedHours: number | null, isActive: boolean }> };

export type PartNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type PartNamesQuery = { partNames: Array<{ id: string, name: string, category: string | null }> };

export type StorageLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type StorageLocationsQuery = { storageLocations: Array<{ id: string, name: string, code: string }> };

export type AppointmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AppointmentsQuery = { appointments: { total: number, items: Array<{ id: string, customerName: string, customerPhone: string | null, customerEmail: string | null, vehicleMake: string, vehicleModel: string, vehicleYear: number | null, vehiclePlate: string | null, serviceType: string, description: string | null, scheduledDate: string, startTime: string, endTime: string | null, status: string, assignedMechanic: string | null, bay: string | null, notes: string | null, shopId: string | null }> } };

export type CustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomersQuery = { customers: { total: number, items: Array<{ id: string, name: string, email: string | null, phone: string | null, address: string | null, city: string | null, state: string | null, zip: string | null, notes: string | null, totalVehicles: number, totalVisits: number, totalSpent: number, lastVisit: string | null, status: string, createdAt: string, updatedAt: string }> } };

export type CreateCustomerMutationVariables = Exact<{
  input: CreateCustomerInput;
}>;


export type CreateCustomerMutation = { createCustomer: { id: string, name: string, email: string | null, phone: string | null, status: string } };

export type UpdateCustomerMutationVariables = Exact<{
  id: string | number;
  input: UpdateCustomerInput;
}>;


export type UpdateCustomerMutation = { updateCustomer: { id: string, name: string, email: string | null, phone: string | null, status: string } };

export type DeleteCustomerMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteCustomerMutation = { deleteCustomer: boolean };

export type VehiclesQueryVariables = Exact<{ [key: string]: never; }>;


export type VehiclesQuery = { vehicles: { total: number, items: Array<{ id: string, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null, customerId: string | null, notes: string | null, status: string, repairStatus: string }> } };

export type VehicleQueryVariables = Exact<{
  id: string | number;
}>;


export type VehicleQuery = { vehicle: { id: string, tenantId: string, customerId: string | null, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null, notes: string | null, status: string, repairStatus: string, createdAt: string, updatedAt: string } | null };

export type CreateVehicleMutationVariables = Exact<{
  input: CreateVehicleInput;
}>;


export type CreateVehicleMutation = { createVehicle: { id: string, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null, status: string, repairStatus: string } };

export type UpdateVehicleMutationVariables = Exact<{
  id: string | number;
  input: UpdateVehicleInput;
}>;


export type UpdateVehicleMutation = { updateVehicle: { id: string, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null, customerId: string | null, status: string, repairStatus: string } };

export type DeleteVehicleMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteVehicleMutation = { deleteVehicle: boolean };

export type CreateAppointmentMutationVariables = Exact<{
  input: CreateAppointmentInput;
}>;


export type CreateAppointmentMutation = { createAppointment: { id: string, customerName: string, vehicleMake: string, vehicleModel: string, serviceType: string, scheduledDate: string, startTime: string, endTime: string | null, status: string, shopId: string | null, bay: string | null, assignedMechanic: string | null } };

export type StaffAssignmentsQueryVariables = Exact<{
  appointmentId: string | number;
}>;


export type StaffAssignmentsQuery = { staffAssignments: Array<{ id: string, appointmentId: string, staffId: string, staffName: string, role: string, status: string, assignedAt: string, startedAt: string | null, completedAt: string | null, totalMinutes: number | null, notes: string | null }> };

export type CreateStaffAssignmentMutationVariables = Exact<{
  input: CreateStaffAssignmentInput;
}>;


export type CreateStaffAssignmentMutation = { createStaffAssignment: { id: string, appointmentId: string, staffId: string, staffName: string, role: string, status: string, assignedAt: string, notes: string | null } };

export type UpdateStaffAssignmentMutationVariables = Exact<{
  id: string | number;
  input: UpdateStaffAssignmentInput;
}>;


export type UpdateStaffAssignmentMutation = { updateStaffAssignment: { id: string, status: string, totalMinutes: number | null } };

export type DeleteStaffAssignmentMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteStaffAssignmentMutation = { deleteStaffAssignment: boolean };

export type ReassignStaffAssignmentMutationVariables = Exact<{
  id: string | number;
  targetAppointmentId: string | number;
}>;


export type ReassignStaffAssignmentMutation = { reassignStaffAssignment: { id: string, appointmentId: string, status: string } };

export type StartStaffAssignmentMutationVariables = Exact<{
  id: string | number;
}>;


export type StartStaffAssignmentMutation = { startStaffAssignment: { id: string, status: string, startedAt: string | null } };

export type CompleteStaffAssignmentMutationVariables = Exact<{
  id: string | number;
  totalMinutes: number;
}>;


export type CompleteStaffAssignmentMutation = { completeStaffAssignment: { id: string, status: string, completedAt: string | null, totalMinutes: number | null } };

export type StaffActiveAssignmentsQueryVariables = Exact<{
  staffId: string | number;
}>;


export type StaffActiveAssignmentsQuery = { staffActiveAssignments: Array<{ id: string, appointmentId: string, staffName: string, role: string, status: string, assignedAt: string }> };

export type UpdateAppointmentMutationVariables = Exact<{
  id: string | number;
  input: UpdateAppointmentInput;
}>;


export type UpdateAppointmentMutation = { updateAppointment: { id: string, customerName: string, customerPhone: string | null, customerEmail: string | null, vehicleMake: string, vehicleModel: string, vehicleYear: number | null, vehiclePlate: string | null, serviceType: string, description: string | null, scheduledDate: string, startTime: string, endTime: string | null, status: string, assignedMechanic: string | null, bay: string | null, notes: string | null, shopId: string | null } };

export type ShopServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopServicesQuery = { shopServices: { total: number, items: Array<{ id: string, name: string, code: string | null, system: string | null, category: string | null, estimatedHours: number | null, isActive: boolean }> } };

export type CreateShopServiceMutationVariables = Exact<{
  input: CreateShopServiceInput;
}>;


export type CreateShopServiceMutation = { createShopService: { id: string, name: string } };

export type DeleteShopServiceMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteShopServiceMutation = { deleteShopService: boolean };

export type ShopPartsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopPartsQuery = { shopParts: { total: number, items: Array<{ id: string, name: string, sku: string | null, description: string | null, quantity: number, unitPrice: number | null, makeId: string | null, modelId: string | null, year: number | null, locationId: string | null, batches: Array<{ id: string, quantity: number, unitCost: number }> }> } };

export type CreateShopPartMutationVariables = Exact<{
  input: CreateShopPartInput;
}>;


export type CreateShopPartMutation = { createShopPart: { id: string, name: string } };

export type UpdateShopPartMutationVariables = Exact<{
  id: string | number;
  input: UpdateShopPartInput;
}>;


export type UpdateShopPartMutation = { updateShopPart: { id: string, name: string, sku: string | null, description: string | null, quantity: number, unitPrice: number | null } };

export type DeleteShopPartMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteShopPartMutation = { deleteShopPart: boolean };

export type AddPartBatchMutationVariables = Exact<{
  input: CreatePartBatchInput;
}>;


export type AddPartBatchMutation = { addPartBatch: { id: string, partId: string, quantity: number, unitCost: number } };

export type DeletePartBatchMutationVariables = Exact<{
  id: string | number;
}>;


export type DeletePartBatchMutation = { deletePartBatch: boolean };

export type ShopToolsQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopToolsQuery = { shopTools: { total: number, items: Array<{ id: string, name: string, description: string | null, quantity: number, status: string }> } };

export type CreateShopToolMutationVariables = Exact<{
  input: CreateShopToolInput;
}>;


export type CreateShopToolMutation = { createShopTool: { id: string, name: string } };

export type UpdateShopToolMutationVariables = Exact<{
  id: string | number;
  input: UpdateShopToolInput;
}>;


export type UpdateShopToolMutation = { updateShopTool: { id: string, name: string, description: string | null, quantity: number, status: string } };

export type DeleteShopToolMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteShopToolMutation = { deleteShopTool: boolean };

export type StaffListQueryVariables = Exact<{ [key: string]: never; }>;


export type StaffListQuery = { staffList: { total: number, items: Array<{ id: string, tenantId: string, name: string, email: string | null, phone: string | null, role: string, licenseNumber: string | null, licenseClass: string | null, licenseExpiry: string | null, dateOfBirth: string | null, address: string | null, emergencyContact: string | null, emergencyPhone: string | null, status: string, assignedVehicleId: string | null, notes: string | null, hireDate: string | null, createdAt: string, updatedAt: string }> } };

export type StaffDetailQueryVariables = Exact<{
  id: string | number;
}>;


export type StaffDetailQuery = { staff: { id: string, tenantId: string, name: string, email: string | null, phone: string | null, role: string, licenseNumber: string | null, licenseClass: string | null, licenseExpiry: string | null, dateOfBirth: string | null, address: string | null, emergencyContact: string | null, emergencyPhone: string | null, status: string, assignedVehicleId: string | null, notes: string | null, hireDate: string | null, createdAt: string, updatedAt: string } | null };

export type CreateStaffMutationVariables = Exact<{
  input: CreateStaffInput;
}>;


export type CreateStaffMutation = { createStaff: { id: string, name: string, status: string, createdAt: string } };

export type UpdateStaffMutationVariables = Exact<{
  id: string | number;
  input: UpdateStaffInput;
}>;


export type UpdateStaffMutation = { updateStaff: { id: string, name: string, status: string, updatedAt: string } };

export type DeleteStaffMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteStaffMutation = { deleteStaff: boolean };


export const VehicleMakesDocument = gql`
    query VehicleMakes {
  vehicleMakes {
    id
    name
    slug
  }
}
    `;

/**
 * __useVehicleMakesQuery__
 *
 * To run a query within a React component, call `useVehicleMakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleMakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleMakesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehicleMakesQuery(baseOptions?: Apollo.QueryHookOptions<VehicleMakesQuery, VehicleMakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleMakesQuery, VehicleMakesQueryVariables>(VehicleMakesDocument, options);
      }
export function useVehicleMakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleMakesQuery, VehicleMakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleMakesQuery, VehicleMakesQueryVariables>(VehicleMakesDocument, options);
        }
// @ts-ignore
export function useVehicleMakesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<VehicleMakesQuery, VehicleMakesQueryVariables>): Apollo.UseSuspenseQueryResult<VehicleMakesQuery, VehicleMakesQueryVariables>;
export function useVehicleMakesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleMakesQuery, VehicleMakesQueryVariables>): Apollo.UseSuspenseQueryResult<VehicleMakesQuery | undefined, VehicleMakesQueryVariables>;
export function useVehicleMakesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleMakesQuery, VehicleMakesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VehicleMakesQuery, VehicleMakesQueryVariables>(VehicleMakesDocument, options);
        }
export type VehicleMakesQueryHookResult = ReturnType<typeof useVehicleMakesQuery>;
export type VehicleMakesLazyQueryHookResult = ReturnType<typeof useVehicleMakesLazyQuery>;
export type VehicleMakesSuspenseQueryHookResult = ReturnType<typeof useVehicleMakesSuspenseQuery>;
export type VehicleMakesQueryResult = Apollo.QueryResult<VehicleMakesQuery, VehicleMakesQueryVariables>;
export const VehicleModelsDocument = gql`
    query VehicleModels($makeId: ID!) {
  vehicleModels(makeId: $makeId) {
    id
    name
    slug
    yearStart
    yearEnd
    vehicleType
  }
}
    `;

/**
 * __useVehicleModelsQuery__
 *
 * To run a query within a React component, call `useVehicleModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleModelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleModelsQuery({
 *   variables: {
 *      makeId: // value for 'makeId'
 *   },
 * });
 */
export function useVehicleModelsQuery(baseOptions: Apollo.QueryHookOptions<VehicleModelsQuery, VehicleModelsQueryVariables> & ({ variables: VehicleModelsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleModelsQuery, VehicleModelsQueryVariables>(VehicleModelsDocument, options);
      }
export function useVehicleModelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleModelsQuery, VehicleModelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleModelsQuery, VehicleModelsQueryVariables>(VehicleModelsDocument, options);
        }
// @ts-ignore
export function useVehicleModelsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<VehicleModelsQuery, VehicleModelsQueryVariables>): Apollo.UseSuspenseQueryResult<VehicleModelsQuery, VehicleModelsQueryVariables>;
export function useVehicleModelsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleModelsQuery, VehicleModelsQueryVariables>): Apollo.UseSuspenseQueryResult<VehicleModelsQuery | undefined, VehicleModelsQueryVariables>;
export function useVehicleModelsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleModelsQuery, VehicleModelsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VehicleModelsQuery, VehicleModelsQueryVariables>(VehicleModelsDocument, options);
        }
export type VehicleModelsQueryHookResult = ReturnType<typeof useVehicleModelsQuery>;
export type VehicleModelsLazyQueryHookResult = ReturnType<typeof useVehicleModelsLazyQuery>;
export type VehicleModelsSuspenseQueryHookResult = ReturnType<typeof useVehicleModelsSuspenseQuery>;
export type VehicleModelsQueryResult = Apollo.QueryResult<VehicleModelsQuery, VehicleModelsQueryVariables>;
export const ServiceTypesDocument = gql`
    query ServiceTypes {
  serviceTypes {
    id
    name
    code
    category
    system
    estimatedHours
    isActive
  }
}
    `;

/**
 * __useServiceTypesQuery__
 *
 * To run a query within a React component, call `useServiceTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useServiceTypesQuery(baseOptions?: Apollo.QueryHookOptions<ServiceTypesQuery, ServiceTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServiceTypesQuery, ServiceTypesQueryVariables>(ServiceTypesDocument, options);
      }
export function useServiceTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceTypesQuery, ServiceTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServiceTypesQuery, ServiceTypesQueryVariables>(ServiceTypesDocument, options);
        }
// @ts-ignore
export function useServiceTypesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ServiceTypesQuery, ServiceTypesQueryVariables>): Apollo.UseSuspenseQueryResult<ServiceTypesQuery, ServiceTypesQueryVariables>;
export function useServiceTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ServiceTypesQuery, ServiceTypesQueryVariables>): Apollo.UseSuspenseQueryResult<ServiceTypesQuery | undefined, ServiceTypesQueryVariables>;
export function useServiceTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ServiceTypesQuery, ServiceTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ServiceTypesQuery, ServiceTypesQueryVariables>(ServiceTypesDocument, options);
        }
export type ServiceTypesQueryHookResult = ReturnType<typeof useServiceTypesQuery>;
export type ServiceTypesLazyQueryHookResult = ReturnType<typeof useServiceTypesLazyQuery>;
export type ServiceTypesSuspenseQueryHookResult = ReturnType<typeof useServiceTypesSuspenseQuery>;
export type ServiceTypesQueryResult = Apollo.QueryResult<ServiceTypesQuery, ServiceTypesQueryVariables>;
export const PartNamesDocument = gql`
    query PartNames {
  partNames {
    id
    name
    category
  }
}
    `;

/**
 * __usePartNamesQuery__
 *
 * To run a query within a React component, call `usePartNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartNamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartNamesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePartNamesQuery(baseOptions?: Apollo.QueryHookOptions<PartNamesQuery, PartNamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PartNamesQuery, PartNamesQueryVariables>(PartNamesDocument, options);
      }
export function usePartNamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartNamesQuery, PartNamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PartNamesQuery, PartNamesQueryVariables>(PartNamesDocument, options);
        }
// @ts-ignore
export function usePartNamesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PartNamesQuery, PartNamesQueryVariables>): Apollo.UseSuspenseQueryResult<PartNamesQuery, PartNamesQueryVariables>;
export function usePartNamesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PartNamesQuery, PartNamesQueryVariables>): Apollo.UseSuspenseQueryResult<PartNamesQuery | undefined, PartNamesQueryVariables>;
export function usePartNamesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PartNamesQuery, PartNamesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PartNamesQuery, PartNamesQueryVariables>(PartNamesDocument, options);
        }
export type PartNamesQueryHookResult = ReturnType<typeof usePartNamesQuery>;
export type PartNamesLazyQueryHookResult = ReturnType<typeof usePartNamesLazyQuery>;
export type PartNamesSuspenseQueryHookResult = ReturnType<typeof usePartNamesSuspenseQuery>;
export type PartNamesQueryResult = Apollo.QueryResult<PartNamesQuery, PartNamesQueryVariables>;
export const StorageLocationsDocument = gql`
    query StorageLocations {
  storageLocations {
    id
    name
    code
  }
}
    `;

/**
 * __useStorageLocationsQuery__
 *
 * To run a query within a React component, call `useStorageLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStorageLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStorageLocationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStorageLocationsQuery(baseOptions?: Apollo.QueryHookOptions<StorageLocationsQuery, StorageLocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StorageLocationsQuery, StorageLocationsQueryVariables>(StorageLocationsDocument, options);
      }
export function useStorageLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StorageLocationsQuery, StorageLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StorageLocationsQuery, StorageLocationsQueryVariables>(StorageLocationsDocument, options);
        }
// @ts-ignore
export function useStorageLocationsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StorageLocationsQuery, StorageLocationsQueryVariables>): Apollo.UseSuspenseQueryResult<StorageLocationsQuery, StorageLocationsQueryVariables>;
export function useStorageLocationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StorageLocationsQuery, StorageLocationsQueryVariables>): Apollo.UseSuspenseQueryResult<StorageLocationsQuery | undefined, StorageLocationsQueryVariables>;
export function useStorageLocationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StorageLocationsQuery, StorageLocationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StorageLocationsQuery, StorageLocationsQueryVariables>(StorageLocationsDocument, options);
        }
export type StorageLocationsQueryHookResult = ReturnType<typeof useStorageLocationsQuery>;
export type StorageLocationsLazyQueryHookResult = ReturnType<typeof useStorageLocationsLazyQuery>;
export type StorageLocationsSuspenseQueryHookResult = ReturnType<typeof useStorageLocationsSuspenseQuery>;
export type StorageLocationsQueryResult = Apollo.QueryResult<StorageLocationsQuery, StorageLocationsQueryVariables>;
export const AppointmentsDocument = gql`
    query Appointments {
  appointments {
    items {
      id
      customerName
      customerPhone
      customerEmail
      vehicleMake
      vehicleModel
      vehicleYear
      vehiclePlate
      serviceType
      description
      scheduledDate
      startTime
      endTime
      status
      assignedMechanic
      bay
      notes
      shopId
    }
    total
  }
}
    `;

/**
 * __useAppointmentsQuery__
 *
 * To run a query within a React component, call `useAppointmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppointmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppointmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppointmentsQuery(baseOptions?: Apollo.QueryHookOptions<AppointmentsQuery, AppointmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppointmentsQuery, AppointmentsQueryVariables>(AppointmentsDocument, options);
      }
export function useAppointmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppointmentsQuery, AppointmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppointmentsQuery, AppointmentsQueryVariables>(AppointmentsDocument, options);
        }
// @ts-ignore
export function useAppointmentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AppointmentsQuery, AppointmentsQueryVariables>): Apollo.UseSuspenseQueryResult<AppointmentsQuery, AppointmentsQueryVariables>;
export function useAppointmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AppointmentsQuery, AppointmentsQueryVariables>): Apollo.UseSuspenseQueryResult<AppointmentsQuery | undefined, AppointmentsQueryVariables>;
export function useAppointmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AppointmentsQuery, AppointmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AppointmentsQuery, AppointmentsQueryVariables>(AppointmentsDocument, options);
        }
export type AppointmentsQueryHookResult = ReturnType<typeof useAppointmentsQuery>;
export type AppointmentsLazyQueryHookResult = ReturnType<typeof useAppointmentsLazyQuery>;
export type AppointmentsSuspenseQueryHookResult = ReturnType<typeof useAppointmentsSuspenseQuery>;
export type AppointmentsQueryResult = Apollo.QueryResult<AppointmentsQuery, AppointmentsQueryVariables>;
export const CustomersDocument = gql`
    query Customers {
  customers {
    items {
      id
      name
      email
      phone
      address
      city
      state
      zip
      notes
      totalVehicles
      totalVisits
      totalSpent
      lastVisit
      status
      createdAt
      updatedAt
    }
    total
  }
}
    `;

/**
 * __useCustomersQuery__
 *
 * To run a query within a React component, call `useCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomersQuery(baseOptions?: Apollo.QueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, options);
      }
export function useCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, options);
        }
// @ts-ignore
export function useCustomersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CustomersQuery, CustomersQueryVariables>): Apollo.UseSuspenseQueryResult<CustomersQuery, CustomersQueryVariables>;
export function useCustomersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CustomersQuery, CustomersQueryVariables>): Apollo.UseSuspenseQueryResult<CustomersQuery | undefined, CustomersQueryVariables>;
export function useCustomersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CustomersQuery, CustomersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CustomersQuery, CustomersQueryVariables>(CustomersDocument, options);
        }
export type CustomersQueryHookResult = ReturnType<typeof useCustomersQuery>;
export type CustomersLazyQueryHookResult = ReturnType<typeof useCustomersLazyQuery>;
export type CustomersSuspenseQueryHookResult = ReturnType<typeof useCustomersSuspenseQuery>;
export type CustomersQueryResult = Apollo.QueryResult<CustomersQuery, CustomersQueryVariables>;
export const CreateCustomerDocument = gql`
    mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    name
    email
    phone
    status
  }
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const UpdateCustomerDocument = gql`
    mutation UpdateCustomer($id: ID!, $input: UpdateCustomerInput!) {
  updateCustomer(id: $id, input: $input) {
    id
    name
    email
    phone
    status
  }
}
    `;
export type UpdateCustomerMutationFn = Apollo.MutationFunction<UpdateCustomerMutation, UpdateCustomerMutationVariables>;

/**
 * __useUpdateCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCustomerMutation, { data, loading, error }] = useUpdateCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, options);
      }
export type UpdateCustomerMutationHookResult = ReturnType<typeof useUpdateCustomerMutation>;
export type UpdateCustomerMutationResult = Apollo.MutationResult<UpdateCustomerMutation>;
export type UpdateCustomerMutationOptions = Apollo.BaseMutationOptions<UpdateCustomerMutation, UpdateCustomerMutationVariables>;
export const DeleteCustomerDocument = gql`
    mutation DeleteCustomer($id: ID!) {
  deleteCustomer(id: $id)
}
    `;
export type DeleteCustomerMutationFn = Apollo.MutationFunction<DeleteCustomerMutation, DeleteCustomerMutationVariables>;

/**
 * __useDeleteCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCustomerMutation, { data, loading, error }] = useDeleteCustomerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCustomerMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, options);
      }
export type DeleteCustomerMutationHookResult = ReturnType<typeof useDeleteCustomerMutation>;
export type DeleteCustomerMutationResult = Apollo.MutationResult<DeleteCustomerMutation>;
export type DeleteCustomerMutationOptions = Apollo.BaseMutationOptions<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const VehiclesDocument = gql`
    query Vehicles {
  vehicles {
    items {
      id
      make
      model
      year
      vin
      licensePlate
      color
      customerId
      notes
      status
      repairStatus
    }
    total
  }
}
    `;

/**
 * __useVehiclesQuery__
 *
 * To run a query within a React component, call `useVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehiclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useVehiclesQuery(baseOptions?: Apollo.QueryHookOptions<VehiclesQuery, VehiclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehiclesQuery, VehiclesQueryVariables>(VehiclesDocument, options);
      }
export function useVehiclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehiclesQuery, VehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehiclesQuery, VehiclesQueryVariables>(VehiclesDocument, options);
        }
// @ts-ignore
export function useVehiclesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<VehiclesQuery, VehiclesQueryVariables>): Apollo.UseSuspenseQueryResult<VehiclesQuery, VehiclesQueryVariables>;
export function useVehiclesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehiclesQuery, VehiclesQueryVariables>): Apollo.UseSuspenseQueryResult<VehiclesQuery | undefined, VehiclesQueryVariables>;
export function useVehiclesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehiclesQuery, VehiclesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VehiclesQuery, VehiclesQueryVariables>(VehiclesDocument, options);
        }
export type VehiclesQueryHookResult = ReturnType<typeof useVehiclesQuery>;
export type VehiclesLazyQueryHookResult = ReturnType<typeof useVehiclesLazyQuery>;
export type VehiclesSuspenseQueryHookResult = ReturnType<typeof useVehiclesSuspenseQuery>;
export type VehiclesQueryResult = Apollo.QueryResult<VehiclesQuery, VehiclesQueryVariables>;
export const VehicleDocument = gql`
    query Vehicle($id: ID!) {
  vehicle(id: $id) {
    id
    tenantId
    customerId
    make
    model
    year
    vin
    licensePlate
    color
    notes
    status
    repairStatus
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useVehicleQuery__
 *
 * To run a query within a React component, call `useVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVehicleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVehicleQuery(baseOptions: Apollo.QueryHookOptions<VehicleQuery, VehicleQueryVariables> & ({ variables: VehicleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, options);
      }
export function useVehicleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VehicleQuery, VehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, options);
        }
// @ts-ignore
export function useVehicleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<VehicleQuery, VehicleQueryVariables>): Apollo.UseSuspenseQueryResult<VehicleQuery, VehicleQueryVariables>;
export function useVehicleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleQuery, VehicleQueryVariables>): Apollo.UseSuspenseQueryResult<VehicleQuery | undefined, VehicleQueryVariables>;
export function useVehicleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VehicleQuery, VehicleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VehicleQuery, VehicleQueryVariables>(VehicleDocument, options);
        }
export type VehicleQueryHookResult = ReturnType<typeof useVehicleQuery>;
export type VehicleLazyQueryHookResult = ReturnType<typeof useVehicleLazyQuery>;
export type VehicleSuspenseQueryHookResult = ReturnType<typeof useVehicleSuspenseQuery>;
export type VehicleQueryResult = Apollo.QueryResult<VehicleQuery, VehicleQueryVariables>;
export const CreateVehicleDocument = gql`
    mutation CreateVehicle($input: CreateVehicleInput!) {
  createVehicle(input: $input) {
    id
    make
    model
    year
    vin
    licensePlate
    color
    status
    repairStatus
  }
}
    `;
export type CreateVehicleMutationFn = Apollo.MutationFunction<CreateVehicleMutation, CreateVehicleMutationVariables>;

/**
 * __useCreateVehicleMutation__
 *
 * To run a mutation, you first call `useCreateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVehicleMutation, { data, loading, error }] = useCreateVehicleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<CreateVehicleMutation, CreateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVehicleMutation, CreateVehicleMutationVariables>(CreateVehicleDocument, options);
      }
export type CreateVehicleMutationHookResult = ReturnType<typeof useCreateVehicleMutation>;
export type CreateVehicleMutationResult = Apollo.MutationResult<CreateVehicleMutation>;
export type CreateVehicleMutationOptions = Apollo.BaseMutationOptions<CreateVehicleMutation, CreateVehicleMutationVariables>;
export const UpdateVehicleDocument = gql`
    mutation UpdateVehicle($id: ID!, $input: UpdateVehicleInput!) {
  updateVehicle(id: $id, input: $input) {
    id
    make
    model
    year
    vin
    licensePlate
    color
    customerId
    status
    repairStatus
  }
}
    `;
export type UpdateVehicleMutationFn = Apollo.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;

/**
 * __useUpdateVehicleMutation__
 *
 * To run a mutation, you first call `useUpdateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehicleMutation, { data, loading, error }] = useUpdateVehicleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, options);
      }
export type UpdateVehicleMutationHookResult = ReturnType<typeof useUpdateVehicleMutation>;
export type UpdateVehicleMutationResult = Apollo.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = Apollo.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export const DeleteVehicleDocument = gql`
    mutation DeleteVehicle($id: ID!) {
  deleteVehicle(id: $id)
}
    `;
export type DeleteVehicleMutationFn = Apollo.MutationFunction<DeleteVehicleMutation, DeleteVehicleMutationVariables>;

/**
 * __useDeleteVehicleMutation__
 *
 * To run a mutation, you first call `useDeleteVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVehicleMutation, { data, loading, error }] = useDeleteVehicleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVehicleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVehicleMutation, DeleteVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVehicleMutation, DeleteVehicleMutationVariables>(DeleteVehicleDocument, options);
      }
export type DeleteVehicleMutationHookResult = ReturnType<typeof useDeleteVehicleMutation>;
export type DeleteVehicleMutationResult = Apollo.MutationResult<DeleteVehicleMutation>;
export type DeleteVehicleMutationOptions = Apollo.BaseMutationOptions<DeleteVehicleMutation, DeleteVehicleMutationVariables>;
export const CreateAppointmentDocument = gql`
    mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
    id
    customerName
    vehicleMake
    vehicleModel
    serviceType
    scheduledDate
    startTime
    endTime
    status
    shopId
    bay
    assignedMechanic
  }
}
    `;
export type CreateAppointmentMutationFn = Apollo.MutationFunction<CreateAppointmentMutation, CreateAppointmentMutationVariables>;

/**
 * __useCreateAppointmentMutation__
 *
 * To run a mutation, you first call `useCreateAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAppointmentMutation, { data, loading, error }] = useCreateAppointmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAppointmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAppointmentMutation, CreateAppointmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAppointmentMutation, CreateAppointmentMutationVariables>(CreateAppointmentDocument, options);
      }
export type CreateAppointmentMutationHookResult = ReturnType<typeof useCreateAppointmentMutation>;
export type CreateAppointmentMutationResult = Apollo.MutationResult<CreateAppointmentMutation>;
export type CreateAppointmentMutationOptions = Apollo.BaseMutationOptions<CreateAppointmentMutation, CreateAppointmentMutationVariables>;
export const StaffAssignmentsDocument = gql`
    query StaffAssignments($appointmentId: ID!) {
  staffAssignments(appointmentId: $appointmentId) {
    id
    appointmentId
    staffId
    staffName
    role
    status
    assignedAt
    startedAt
    completedAt
    totalMinutes
    notes
  }
}
    `;

/**
 * __useStaffAssignmentsQuery__
 *
 * To run a query within a React component, call `useStaffAssignmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffAssignmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffAssignmentsQuery({
 *   variables: {
 *      appointmentId: // value for 'appointmentId'
 *   },
 * });
 */
export function useStaffAssignmentsQuery(baseOptions: Apollo.QueryHookOptions<StaffAssignmentsQuery, StaffAssignmentsQueryVariables> & ({ variables: StaffAssignmentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>(StaffAssignmentsDocument, options);
      }
export function useStaffAssignmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>(StaffAssignmentsDocument, options);
        }
// @ts-ignore
export function useStaffAssignmentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>): Apollo.UseSuspenseQueryResult<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>;
export function useStaffAssignmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>): Apollo.UseSuspenseQueryResult<StaffAssignmentsQuery | undefined, StaffAssignmentsQueryVariables>;
export function useStaffAssignmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>(StaffAssignmentsDocument, options);
        }
export type StaffAssignmentsQueryHookResult = ReturnType<typeof useStaffAssignmentsQuery>;
export type StaffAssignmentsLazyQueryHookResult = ReturnType<typeof useStaffAssignmentsLazyQuery>;
export type StaffAssignmentsSuspenseQueryHookResult = ReturnType<typeof useStaffAssignmentsSuspenseQuery>;
export type StaffAssignmentsQueryResult = Apollo.QueryResult<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>;
export const CreateStaffAssignmentDocument = gql`
    mutation CreateStaffAssignment($input: CreateStaffAssignmentInput!) {
  createStaffAssignment(input: $input) {
    id
    appointmentId
    staffId
    staffName
    role
    status
    assignedAt
    notes
  }
}
    `;
export type CreateStaffAssignmentMutationFn = Apollo.MutationFunction<CreateStaffAssignmentMutation, CreateStaffAssignmentMutationVariables>;

/**
 * __useCreateStaffAssignmentMutation__
 *
 * To run a mutation, you first call `useCreateStaffAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStaffAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStaffAssignmentMutation, { data, loading, error }] = useCreateStaffAssignmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStaffAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStaffAssignmentMutation, CreateStaffAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStaffAssignmentMutation, CreateStaffAssignmentMutationVariables>(CreateStaffAssignmentDocument, options);
      }
export type CreateStaffAssignmentMutationHookResult = ReturnType<typeof useCreateStaffAssignmentMutation>;
export type CreateStaffAssignmentMutationResult = Apollo.MutationResult<CreateStaffAssignmentMutation>;
export type CreateStaffAssignmentMutationOptions = Apollo.BaseMutationOptions<CreateStaffAssignmentMutation, CreateStaffAssignmentMutationVariables>;
export const UpdateStaffAssignmentDocument = gql`
    mutation UpdateStaffAssignment($id: ID!, $input: UpdateStaffAssignmentInput!) {
  updateStaffAssignment(id: $id, input: $input) {
    id
    status
    totalMinutes
  }
}
    `;
export type UpdateStaffAssignmentMutationFn = Apollo.MutationFunction<UpdateStaffAssignmentMutation, UpdateStaffAssignmentMutationVariables>;

/**
 * __useUpdateStaffAssignmentMutation__
 *
 * To run a mutation, you first call `useUpdateStaffAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffAssignmentMutation, { data, loading, error }] = useUpdateStaffAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStaffAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStaffAssignmentMutation, UpdateStaffAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStaffAssignmentMutation, UpdateStaffAssignmentMutationVariables>(UpdateStaffAssignmentDocument, options);
      }
export type UpdateStaffAssignmentMutationHookResult = ReturnType<typeof useUpdateStaffAssignmentMutation>;
export type UpdateStaffAssignmentMutationResult = Apollo.MutationResult<UpdateStaffAssignmentMutation>;
export type UpdateStaffAssignmentMutationOptions = Apollo.BaseMutationOptions<UpdateStaffAssignmentMutation, UpdateStaffAssignmentMutationVariables>;
export const DeleteStaffAssignmentDocument = gql`
    mutation DeleteStaffAssignment($id: ID!) {
  deleteStaffAssignment(id: $id)
}
    `;
export type DeleteStaffAssignmentMutationFn = Apollo.MutationFunction<DeleteStaffAssignmentMutation, DeleteStaffAssignmentMutationVariables>;

/**
 * __useDeleteStaffAssignmentMutation__
 *
 * To run a mutation, you first call `useDeleteStaffAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStaffAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStaffAssignmentMutation, { data, loading, error }] = useDeleteStaffAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStaffAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStaffAssignmentMutation, DeleteStaffAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStaffAssignmentMutation, DeleteStaffAssignmentMutationVariables>(DeleteStaffAssignmentDocument, options);
      }
export type DeleteStaffAssignmentMutationHookResult = ReturnType<typeof useDeleteStaffAssignmentMutation>;
export type DeleteStaffAssignmentMutationResult = Apollo.MutationResult<DeleteStaffAssignmentMutation>;
export type DeleteStaffAssignmentMutationOptions = Apollo.BaseMutationOptions<DeleteStaffAssignmentMutation, DeleteStaffAssignmentMutationVariables>;
export const ReassignStaffAssignmentDocument = gql`
    mutation ReassignStaffAssignment($id: ID!, $targetAppointmentId: ID!) {
  reassignStaffAssignment(id: $id, targetAppointmentId: $targetAppointmentId) {
    id
    appointmentId
    status
  }
}
    `;
export type ReassignStaffAssignmentMutationFn = Apollo.MutationFunction<ReassignStaffAssignmentMutation, ReassignStaffAssignmentMutationVariables>;

/**
 * __useReassignStaffAssignmentMutation__
 *
 * To run a mutation, you first call `useReassignStaffAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReassignStaffAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reassignStaffAssignmentMutation, { data, loading, error }] = useReassignStaffAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      targetAppointmentId: // value for 'targetAppointmentId'
 *   },
 * });
 */
export function useReassignStaffAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<ReassignStaffAssignmentMutation, ReassignStaffAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReassignStaffAssignmentMutation, ReassignStaffAssignmentMutationVariables>(ReassignStaffAssignmentDocument, options);
      }
export type ReassignStaffAssignmentMutationHookResult = ReturnType<typeof useReassignStaffAssignmentMutation>;
export type ReassignStaffAssignmentMutationResult = Apollo.MutationResult<ReassignStaffAssignmentMutation>;
export type ReassignStaffAssignmentMutationOptions = Apollo.BaseMutationOptions<ReassignStaffAssignmentMutation, ReassignStaffAssignmentMutationVariables>;
export const StartStaffAssignmentDocument = gql`
    mutation StartStaffAssignment($id: ID!) {
  startStaffAssignment(id: $id) {
    id
    status
    startedAt
  }
}
    `;
export type StartStaffAssignmentMutationFn = Apollo.MutationFunction<StartStaffAssignmentMutation, StartStaffAssignmentMutationVariables>;

/**
 * __useStartStaffAssignmentMutation__
 *
 * To run a mutation, you first call `useStartStaffAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartStaffAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startStaffAssignmentMutation, { data, loading, error }] = useStartStaffAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStartStaffAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<StartStaffAssignmentMutation, StartStaffAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartStaffAssignmentMutation, StartStaffAssignmentMutationVariables>(StartStaffAssignmentDocument, options);
      }
export type StartStaffAssignmentMutationHookResult = ReturnType<typeof useStartStaffAssignmentMutation>;
export type StartStaffAssignmentMutationResult = Apollo.MutationResult<StartStaffAssignmentMutation>;
export type StartStaffAssignmentMutationOptions = Apollo.BaseMutationOptions<StartStaffAssignmentMutation, StartStaffAssignmentMutationVariables>;
export const CompleteStaffAssignmentDocument = gql`
    mutation CompleteStaffAssignment($id: ID!, $totalMinutes: Int!) {
  completeStaffAssignment(id: $id, totalMinutes: $totalMinutes) {
    id
    status
    completedAt
    totalMinutes
  }
}
    `;
export type CompleteStaffAssignmentMutationFn = Apollo.MutationFunction<CompleteStaffAssignmentMutation, CompleteStaffAssignmentMutationVariables>;

/**
 * __useCompleteStaffAssignmentMutation__
 *
 * To run a mutation, you first call `useCompleteStaffAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteStaffAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeStaffAssignmentMutation, { data, loading, error }] = useCompleteStaffAssignmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      totalMinutes: // value for 'totalMinutes'
 *   },
 * });
 */
export function useCompleteStaffAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<CompleteStaffAssignmentMutation, CompleteStaffAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteStaffAssignmentMutation, CompleteStaffAssignmentMutationVariables>(CompleteStaffAssignmentDocument, options);
      }
export type CompleteStaffAssignmentMutationHookResult = ReturnType<typeof useCompleteStaffAssignmentMutation>;
export type CompleteStaffAssignmentMutationResult = Apollo.MutationResult<CompleteStaffAssignmentMutation>;
export type CompleteStaffAssignmentMutationOptions = Apollo.BaseMutationOptions<CompleteStaffAssignmentMutation, CompleteStaffAssignmentMutationVariables>;
export const StaffActiveAssignmentsDocument = gql`
    query StaffActiveAssignments($staffId: ID!) {
  staffActiveAssignments(staffId: $staffId) {
    id
    appointmentId
    staffName
    role
    status
    assignedAt
  }
}
    `;

/**
 * __useStaffActiveAssignmentsQuery__
 *
 * To run a query within a React component, call `useStaffActiveAssignmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffActiveAssignmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffActiveAssignmentsQuery({
 *   variables: {
 *      staffId: // value for 'staffId'
 *   },
 * });
 */
export function useStaffActiveAssignmentsQuery(baseOptions: Apollo.QueryHookOptions<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables> & ({ variables: StaffActiveAssignmentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>(StaffActiveAssignmentsDocument, options);
      }
export function useStaffActiveAssignmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>(StaffActiveAssignmentsDocument, options);
        }
// @ts-ignore
export function useStaffActiveAssignmentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>): Apollo.UseSuspenseQueryResult<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>;
export function useStaffActiveAssignmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>): Apollo.UseSuspenseQueryResult<StaffActiveAssignmentsQuery | undefined, StaffActiveAssignmentsQueryVariables>;
export function useStaffActiveAssignmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>(StaffActiveAssignmentsDocument, options);
        }
export type StaffActiveAssignmentsQueryHookResult = ReturnType<typeof useStaffActiveAssignmentsQuery>;
export type StaffActiveAssignmentsLazyQueryHookResult = ReturnType<typeof useStaffActiveAssignmentsLazyQuery>;
export type StaffActiveAssignmentsSuspenseQueryHookResult = ReturnType<typeof useStaffActiveAssignmentsSuspenseQuery>;
export type StaffActiveAssignmentsQueryResult = Apollo.QueryResult<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>;
export const UpdateAppointmentDocument = gql`
    mutation UpdateAppointment($id: ID!, $input: UpdateAppointmentInput!) {
  updateAppointment(id: $id, input: $input) {
    id
    customerName
    customerPhone
    customerEmail
    vehicleMake
    vehicleModel
    vehicleYear
    vehiclePlate
    serviceType
    description
    scheduledDate
    startTime
    endTime
    status
    assignedMechanic
    bay
    notes
    shopId
  }
}
    `;
export type UpdateAppointmentMutationFn = Apollo.MutationFunction<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>;

/**
 * __useUpdateAppointmentMutation__
 *
 * To run a mutation, you first call `useUpdateAppointmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppointmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAppointmentMutation, { data, loading, error }] = useUpdateAppointmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAppointmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>(UpdateAppointmentDocument, options);
      }
export type UpdateAppointmentMutationHookResult = ReturnType<typeof useUpdateAppointmentMutation>;
export type UpdateAppointmentMutationResult = Apollo.MutationResult<UpdateAppointmentMutation>;
export type UpdateAppointmentMutationOptions = Apollo.BaseMutationOptions<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>;
export const ShopServicesDocument = gql`
    query ShopServices {
  shopServices {
    items {
      id
      name
      code
      system
      category
      estimatedHours
      isActive
    }
    total
  }
}
    `;

/**
 * __useShopServicesQuery__
 *
 * To run a query within a React component, call `useShopServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopServicesQuery(baseOptions?: Apollo.QueryHookOptions<ShopServicesQuery, ShopServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopServicesQuery, ShopServicesQueryVariables>(ShopServicesDocument, options);
      }
export function useShopServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopServicesQuery, ShopServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopServicesQuery, ShopServicesQueryVariables>(ShopServicesDocument, options);
        }
// @ts-ignore
export function useShopServicesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShopServicesQuery, ShopServicesQueryVariables>): Apollo.UseSuspenseQueryResult<ShopServicesQuery, ShopServicesQueryVariables>;
export function useShopServicesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopServicesQuery, ShopServicesQueryVariables>): Apollo.UseSuspenseQueryResult<ShopServicesQuery | undefined, ShopServicesQueryVariables>;
export function useShopServicesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopServicesQuery, ShopServicesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShopServicesQuery, ShopServicesQueryVariables>(ShopServicesDocument, options);
        }
export type ShopServicesQueryHookResult = ReturnType<typeof useShopServicesQuery>;
export type ShopServicesLazyQueryHookResult = ReturnType<typeof useShopServicesLazyQuery>;
export type ShopServicesSuspenseQueryHookResult = ReturnType<typeof useShopServicesSuspenseQuery>;
export type ShopServicesQueryResult = Apollo.QueryResult<ShopServicesQuery, ShopServicesQueryVariables>;
export const CreateShopServiceDocument = gql`
    mutation CreateShopService($input: CreateShopServiceInput!) {
  createShopService(input: $input) {
    id
    name
  }
}
    `;
export type CreateShopServiceMutationFn = Apollo.MutationFunction<CreateShopServiceMutation, CreateShopServiceMutationVariables>;

/**
 * __useCreateShopServiceMutation__
 *
 * To run a mutation, you first call `useCreateShopServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopServiceMutation, { data, loading, error }] = useCreateShopServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShopServiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateShopServiceMutation, CreateShopServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShopServiceMutation, CreateShopServiceMutationVariables>(CreateShopServiceDocument, options);
      }
export type CreateShopServiceMutationHookResult = ReturnType<typeof useCreateShopServiceMutation>;
export type CreateShopServiceMutationResult = Apollo.MutationResult<CreateShopServiceMutation>;
export type CreateShopServiceMutationOptions = Apollo.BaseMutationOptions<CreateShopServiceMutation, CreateShopServiceMutationVariables>;
export const DeleteShopServiceDocument = gql`
    mutation DeleteShopService($id: ID!) {
  deleteShopService(id: $id)
}
    `;
export type DeleteShopServiceMutationFn = Apollo.MutationFunction<DeleteShopServiceMutation, DeleteShopServiceMutationVariables>;

/**
 * __useDeleteShopServiceMutation__
 *
 * To run a mutation, you first call `useDeleteShopServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShopServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShopServiceMutation, { data, loading, error }] = useDeleteShopServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShopServiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShopServiceMutation, DeleteShopServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShopServiceMutation, DeleteShopServiceMutationVariables>(DeleteShopServiceDocument, options);
      }
export type DeleteShopServiceMutationHookResult = ReturnType<typeof useDeleteShopServiceMutation>;
export type DeleteShopServiceMutationResult = Apollo.MutationResult<DeleteShopServiceMutation>;
export type DeleteShopServiceMutationOptions = Apollo.BaseMutationOptions<DeleteShopServiceMutation, DeleteShopServiceMutationVariables>;
export const ShopPartsDocument = gql`
    query ShopParts {
  shopParts {
    items {
      id
      name
      sku
      description
      quantity
      unitPrice
      makeId
      modelId
      year
      locationId
      batches {
        id
        quantity
        unitCost
      }
    }
    total
  }
}
    `;

/**
 * __useShopPartsQuery__
 *
 * To run a query within a React component, call `useShopPartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopPartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopPartsQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopPartsQuery(baseOptions?: Apollo.QueryHookOptions<ShopPartsQuery, ShopPartsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopPartsQuery, ShopPartsQueryVariables>(ShopPartsDocument, options);
      }
export function useShopPartsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopPartsQuery, ShopPartsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopPartsQuery, ShopPartsQueryVariables>(ShopPartsDocument, options);
        }
// @ts-ignore
export function useShopPartsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShopPartsQuery, ShopPartsQueryVariables>): Apollo.UseSuspenseQueryResult<ShopPartsQuery, ShopPartsQueryVariables>;
export function useShopPartsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopPartsQuery, ShopPartsQueryVariables>): Apollo.UseSuspenseQueryResult<ShopPartsQuery | undefined, ShopPartsQueryVariables>;
export function useShopPartsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopPartsQuery, ShopPartsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShopPartsQuery, ShopPartsQueryVariables>(ShopPartsDocument, options);
        }
export type ShopPartsQueryHookResult = ReturnType<typeof useShopPartsQuery>;
export type ShopPartsLazyQueryHookResult = ReturnType<typeof useShopPartsLazyQuery>;
export type ShopPartsSuspenseQueryHookResult = ReturnType<typeof useShopPartsSuspenseQuery>;
export type ShopPartsQueryResult = Apollo.QueryResult<ShopPartsQuery, ShopPartsQueryVariables>;
export const CreateShopPartDocument = gql`
    mutation CreateShopPart($input: CreateShopPartInput!) {
  createShopPart(input: $input) {
    id
    name
  }
}
    `;
export type CreateShopPartMutationFn = Apollo.MutationFunction<CreateShopPartMutation, CreateShopPartMutationVariables>;

/**
 * __useCreateShopPartMutation__
 *
 * To run a mutation, you first call `useCreateShopPartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopPartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopPartMutation, { data, loading, error }] = useCreateShopPartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShopPartMutation(baseOptions?: Apollo.MutationHookOptions<CreateShopPartMutation, CreateShopPartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShopPartMutation, CreateShopPartMutationVariables>(CreateShopPartDocument, options);
      }
export type CreateShopPartMutationHookResult = ReturnType<typeof useCreateShopPartMutation>;
export type CreateShopPartMutationResult = Apollo.MutationResult<CreateShopPartMutation>;
export type CreateShopPartMutationOptions = Apollo.BaseMutationOptions<CreateShopPartMutation, CreateShopPartMutationVariables>;
export const UpdateShopPartDocument = gql`
    mutation UpdateShopPart($id: ID!, $input: UpdateShopPartInput!) {
  updateShopPart(id: $id, input: $input) {
    id
    name
    sku
    description
    quantity
    unitPrice
  }
}
    `;
export type UpdateShopPartMutationFn = Apollo.MutationFunction<UpdateShopPartMutation, UpdateShopPartMutationVariables>;

/**
 * __useUpdateShopPartMutation__
 *
 * To run a mutation, you first call `useUpdateShopPartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShopPartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShopPartMutation, { data, loading, error }] = useUpdateShopPartMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateShopPartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShopPartMutation, UpdateShopPartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShopPartMutation, UpdateShopPartMutationVariables>(UpdateShopPartDocument, options);
      }
export type UpdateShopPartMutationHookResult = ReturnType<typeof useUpdateShopPartMutation>;
export type UpdateShopPartMutationResult = Apollo.MutationResult<UpdateShopPartMutation>;
export type UpdateShopPartMutationOptions = Apollo.BaseMutationOptions<UpdateShopPartMutation, UpdateShopPartMutationVariables>;
export const DeleteShopPartDocument = gql`
    mutation DeleteShopPart($id: ID!) {
  deleteShopPart(id: $id)
}
    `;
export type DeleteShopPartMutationFn = Apollo.MutationFunction<DeleteShopPartMutation, DeleteShopPartMutationVariables>;

/**
 * __useDeleteShopPartMutation__
 *
 * To run a mutation, you first call `useDeleteShopPartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShopPartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShopPartMutation, { data, loading, error }] = useDeleteShopPartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShopPartMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShopPartMutation, DeleteShopPartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShopPartMutation, DeleteShopPartMutationVariables>(DeleteShopPartDocument, options);
      }
export type DeleteShopPartMutationHookResult = ReturnType<typeof useDeleteShopPartMutation>;
export type DeleteShopPartMutationResult = Apollo.MutationResult<DeleteShopPartMutation>;
export type DeleteShopPartMutationOptions = Apollo.BaseMutationOptions<DeleteShopPartMutation, DeleteShopPartMutationVariables>;
export const AddPartBatchDocument = gql`
    mutation AddPartBatch($input: CreatePartBatchInput!) {
  addPartBatch(input: $input) {
    id
    partId
    quantity
    unitCost
  }
}
    `;
export type AddPartBatchMutationFn = Apollo.MutationFunction<AddPartBatchMutation, AddPartBatchMutationVariables>;

/**
 * __useAddPartBatchMutation__
 *
 * To run a mutation, you first call `useAddPartBatchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPartBatchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPartBatchMutation, { data, loading, error }] = useAddPartBatchMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPartBatchMutation(baseOptions?: Apollo.MutationHookOptions<AddPartBatchMutation, AddPartBatchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPartBatchMutation, AddPartBatchMutationVariables>(AddPartBatchDocument, options);
      }
export type AddPartBatchMutationHookResult = ReturnType<typeof useAddPartBatchMutation>;
export type AddPartBatchMutationResult = Apollo.MutationResult<AddPartBatchMutation>;
export type AddPartBatchMutationOptions = Apollo.BaseMutationOptions<AddPartBatchMutation, AddPartBatchMutationVariables>;
export const DeletePartBatchDocument = gql`
    mutation DeletePartBatch($id: ID!) {
  deletePartBatch(id: $id)
}
    `;
export type DeletePartBatchMutationFn = Apollo.MutationFunction<DeletePartBatchMutation, DeletePartBatchMutationVariables>;

/**
 * __useDeletePartBatchMutation__
 *
 * To run a mutation, you first call `useDeletePartBatchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePartBatchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePartBatchMutation, { data, loading, error }] = useDeletePartBatchMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePartBatchMutation(baseOptions?: Apollo.MutationHookOptions<DeletePartBatchMutation, DeletePartBatchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePartBatchMutation, DeletePartBatchMutationVariables>(DeletePartBatchDocument, options);
      }
export type DeletePartBatchMutationHookResult = ReturnType<typeof useDeletePartBatchMutation>;
export type DeletePartBatchMutationResult = Apollo.MutationResult<DeletePartBatchMutation>;
export type DeletePartBatchMutationOptions = Apollo.BaseMutationOptions<DeletePartBatchMutation, DeletePartBatchMutationVariables>;
export const ShopToolsDocument = gql`
    query ShopTools {
  shopTools {
    items {
      id
      name
      description
      quantity
      status
    }
    total
  }
}
    `;

/**
 * __useShopToolsQuery__
 *
 * To run a query within a React component, call `useShopToolsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopToolsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopToolsQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopToolsQuery(baseOptions?: Apollo.QueryHookOptions<ShopToolsQuery, ShopToolsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopToolsQuery, ShopToolsQueryVariables>(ShopToolsDocument, options);
      }
export function useShopToolsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopToolsQuery, ShopToolsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopToolsQuery, ShopToolsQueryVariables>(ShopToolsDocument, options);
        }
// @ts-ignore
export function useShopToolsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ShopToolsQuery, ShopToolsQueryVariables>): Apollo.UseSuspenseQueryResult<ShopToolsQuery, ShopToolsQueryVariables>;
export function useShopToolsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopToolsQuery, ShopToolsQueryVariables>): Apollo.UseSuspenseQueryResult<ShopToolsQuery | undefined, ShopToolsQueryVariables>;
export function useShopToolsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopToolsQuery, ShopToolsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShopToolsQuery, ShopToolsQueryVariables>(ShopToolsDocument, options);
        }
export type ShopToolsQueryHookResult = ReturnType<typeof useShopToolsQuery>;
export type ShopToolsLazyQueryHookResult = ReturnType<typeof useShopToolsLazyQuery>;
export type ShopToolsSuspenseQueryHookResult = ReturnType<typeof useShopToolsSuspenseQuery>;
export type ShopToolsQueryResult = Apollo.QueryResult<ShopToolsQuery, ShopToolsQueryVariables>;
export const CreateShopToolDocument = gql`
    mutation CreateShopTool($input: CreateShopToolInput!) {
  createShopTool(input: $input) {
    id
    name
  }
}
    `;
export type CreateShopToolMutationFn = Apollo.MutationFunction<CreateShopToolMutation, CreateShopToolMutationVariables>;

/**
 * __useCreateShopToolMutation__
 *
 * To run a mutation, you first call `useCreateShopToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopToolMutation, { data, loading, error }] = useCreateShopToolMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShopToolMutation(baseOptions?: Apollo.MutationHookOptions<CreateShopToolMutation, CreateShopToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShopToolMutation, CreateShopToolMutationVariables>(CreateShopToolDocument, options);
      }
export type CreateShopToolMutationHookResult = ReturnType<typeof useCreateShopToolMutation>;
export type CreateShopToolMutationResult = Apollo.MutationResult<CreateShopToolMutation>;
export type CreateShopToolMutationOptions = Apollo.BaseMutationOptions<CreateShopToolMutation, CreateShopToolMutationVariables>;
export const UpdateShopToolDocument = gql`
    mutation UpdateShopTool($id: ID!, $input: UpdateShopToolInput!) {
  updateShopTool(id: $id, input: $input) {
    id
    name
    description
    quantity
    status
  }
}
    `;
export type UpdateShopToolMutationFn = Apollo.MutationFunction<UpdateShopToolMutation, UpdateShopToolMutationVariables>;

/**
 * __useUpdateShopToolMutation__
 *
 * To run a mutation, you first call `useUpdateShopToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShopToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShopToolMutation, { data, loading, error }] = useUpdateShopToolMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateShopToolMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShopToolMutation, UpdateShopToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShopToolMutation, UpdateShopToolMutationVariables>(UpdateShopToolDocument, options);
      }
export type UpdateShopToolMutationHookResult = ReturnType<typeof useUpdateShopToolMutation>;
export type UpdateShopToolMutationResult = Apollo.MutationResult<UpdateShopToolMutation>;
export type UpdateShopToolMutationOptions = Apollo.BaseMutationOptions<UpdateShopToolMutation, UpdateShopToolMutationVariables>;
export const DeleteShopToolDocument = gql`
    mutation DeleteShopTool($id: ID!) {
  deleteShopTool(id: $id)
}
    `;
export type DeleteShopToolMutationFn = Apollo.MutationFunction<DeleteShopToolMutation, DeleteShopToolMutationVariables>;

/**
 * __useDeleteShopToolMutation__
 *
 * To run a mutation, you first call `useDeleteShopToolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShopToolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShopToolMutation, { data, loading, error }] = useDeleteShopToolMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShopToolMutation(baseOptions?: Apollo.MutationHookOptions<DeleteShopToolMutation, DeleteShopToolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteShopToolMutation, DeleteShopToolMutationVariables>(DeleteShopToolDocument, options);
      }
export type DeleteShopToolMutationHookResult = ReturnType<typeof useDeleteShopToolMutation>;
export type DeleteShopToolMutationResult = Apollo.MutationResult<DeleteShopToolMutation>;
export type DeleteShopToolMutationOptions = Apollo.BaseMutationOptions<DeleteShopToolMutation, DeleteShopToolMutationVariables>;
export const StaffListDocument = gql`
    query StaffList {
  staffList {
    items {
      id
      tenantId
      name
      email
      phone
      role
      licenseNumber
      licenseClass
      licenseExpiry
      dateOfBirth
      address
      emergencyContact
      emergencyPhone
      status
      assignedVehicleId
      notes
      hireDate
      createdAt
      updatedAt
    }
    total
  }
}
    `;

/**
 * __useStaffListQuery__
 *
 * To run a query within a React component, call `useStaffListQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffListQuery({
 *   variables: {
 *   },
 * });
 */
export function useStaffListQuery(baseOptions?: Apollo.QueryHookOptions<StaffListQuery, StaffListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffListQuery, StaffListQueryVariables>(StaffListDocument, options);
      }
export function useStaffListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffListQuery, StaffListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffListQuery, StaffListQueryVariables>(StaffListDocument, options);
        }
// @ts-ignore
export function useStaffListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StaffListQuery, StaffListQueryVariables>): Apollo.UseSuspenseQueryResult<StaffListQuery, StaffListQueryVariables>;
export function useStaffListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffListQuery, StaffListQueryVariables>): Apollo.UseSuspenseQueryResult<StaffListQuery | undefined, StaffListQueryVariables>;
export function useStaffListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffListQuery, StaffListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StaffListQuery, StaffListQueryVariables>(StaffListDocument, options);
        }
export type StaffListQueryHookResult = ReturnType<typeof useStaffListQuery>;
export type StaffListLazyQueryHookResult = ReturnType<typeof useStaffListLazyQuery>;
export type StaffListSuspenseQueryHookResult = ReturnType<typeof useStaffListSuspenseQuery>;
export type StaffListQueryResult = Apollo.QueryResult<StaffListQuery, StaffListQueryVariables>;
export const StaffDetailDocument = gql`
    query StaffDetail($id: ID!) {
  staff(id: $id) {
    id
    tenantId
    name
    email
    phone
    role
    licenseNumber
    licenseClass
    licenseExpiry
    dateOfBirth
    address
    emergencyContact
    emergencyPhone
    status
    assignedVehicleId
    notes
    hireDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useStaffDetailQuery__
 *
 * To run a query within a React component, call `useStaffDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useStaffDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStaffDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStaffDetailQuery(baseOptions: Apollo.QueryHookOptions<StaffDetailQuery, StaffDetailQueryVariables> & ({ variables: StaffDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StaffDetailQuery, StaffDetailQueryVariables>(StaffDetailDocument, options);
      }
export function useStaffDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StaffDetailQuery, StaffDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StaffDetailQuery, StaffDetailQueryVariables>(StaffDetailDocument, options);
        }
// @ts-ignore
export function useStaffDetailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<StaffDetailQuery, StaffDetailQueryVariables>): Apollo.UseSuspenseQueryResult<StaffDetailQuery, StaffDetailQueryVariables>;
export function useStaffDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffDetailQuery, StaffDetailQueryVariables>): Apollo.UseSuspenseQueryResult<StaffDetailQuery | undefined, StaffDetailQueryVariables>;
export function useStaffDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StaffDetailQuery, StaffDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StaffDetailQuery, StaffDetailQueryVariables>(StaffDetailDocument, options);
        }
export type StaffDetailQueryHookResult = ReturnType<typeof useStaffDetailQuery>;
export type StaffDetailLazyQueryHookResult = ReturnType<typeof useStaffDetailLazyQuery>;
export type StaffDetailSuspenseQueryHookResult = ReturnType<typeof useStaffDetailSuspenseQuery>;
export type StaffDetailQueryResult = Apollo.QueryResult<StaffDetailQuery, StaffDetailQueryVariables>;
export const CreateStaffDocument = gql`
    mutation CreateStaff($input: CreateStaffInput!) {
  createStaff(input: $input) {
    id
    name
    status
    createdAt
  }
}
    `;
export type CreateStaffMutationFn = Apollo.MutationFunction<CreateStaffMutation, CreateStaffMutationVariables>;

/**
 * __useCreateStaffMutation__
 *
 * To run a mutation, you first call `useCreateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStaffMutation, { data, loading, error }] = useCreateStaffMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStaffMutation(baseOptions?: Apollo.MutationHookOptions<CreateStaffMutation, CreateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, options);
      }
export type CreateStaffMutationHookResult = ReturnType<typeof useCreateStaffMutation>;
export type CreateStaffMutationResult = Apollo.MutationResult<CreateStaffMutation>;
export type CreateStaffMutationOptions = Apollo.BaseMutationOptions<CreateStaffMutation, CreateStaffMutationVariables>;
export const UpdateStaffDocument = gql`
    mutation UpdateStaff($id: ID!, $input: UpdateStaffInput!) {
  updateStaff(id: $id, input: $input) {
    id
    name
    status
    updatedAt
  }
}
    `;
export type UpdateStaffMutationFn = Apollo.MutationFunction<UpdateStaffMutation, UpdateStaffMutationVariables>;

/**
 * __useUpdateStaffMutation__
 *
 * To run a mutation, you first call `useUpdateStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStaffMutation, { data, loading, error }] = useUpdateStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateStaffMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStaffMutation, UpdateStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, options);
      }
export type UpdateStaffMutationHookResult = ReturnType<typeof useUpdateStaffMutation>;
export type UpdateStaffMutationResult = Apollo.MutationResult<UpdateStaffMutation>;
export type UpdateStaffMutationOptions = Apollo.BaseMutationOptions<UpdateStaffMutation, UpdateStaffMutationVariables>;
export const DeleteStaffDocument = gql`
    mutation DeleteStaff($id: ID!) {
  deleteStaff(id: $id)
}
    `;
export type DeleteStaffMutationFn = Apollo.MutationFunction<DeleteStaffMutation, DeleteStaffMutationVariables>;

/**
 * __useDeleteStaffMutation__
 *
 * To run a mutation, you first call `useDeleteStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStaffMutation, { data, loading, error }] = useDeleteStaffMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStaffMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStaffMutation, DeleteStaffMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStaffMutation, DeleteStaffMutationVariables>(DeleteStaffDocument, options);
      }
export type DeleteStaffMutationHookResult = ReturnType<typeof useDeleteStaffMutation>;
export type DeleteStaffMutationResult = Apollo.MutationResult<DeleteStaffMutation>;
export type DeleteStaffMutationOptions = Apollo.BaseMutationOptions<DeleteStaffMutation, DeleteStaffMutationVariables>;