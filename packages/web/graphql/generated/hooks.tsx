/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { request } from '../../lib/fetcher';
export type AddAppointmentPartInput = {
  appointmentId: string | number;
  partId: string | number;
  quantity: number;
  unitPrice?: number | null | undefined;
};

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

export type AppointmentPartsQueryVariables = Exact<{
  appointmentId: string | number;
}>;


export type AppointmentPartsQuery = { appointmentParts: Array<{ id: string, appointmentId: string, partId: string, partName: string, quantity: number, unitPrice: number, createdAt: string }> };

export type AddAppointmentPartMutationVariables = Exact<{
  input: AddAppointmentPartInput;
}>;


export type AddAppointmentPartMutation = { addAppointmentPart: { id: string, partName: string, quantity: number, unitPrice: number } };

export type DeleteAppointmentPartMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteAppointmentPartMutation = { deleteAppointmentPart: boolean };

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


export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const VehicleMakesDocument = new TypedDocumentString(`
    query VehicleMakes {
  vehicleMakes {
    id
    name
    slug
  }
}
    `);

export const useVehicleMakesQuery = <
      TData = VehicleMakesQuery,
      TError = unknown
    >(
      variables?: VehicleMakesQueryVariables,
      options?: Omit<UseQueryOptions<VehicleMakesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<VehicleMakesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<VehicleMakesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['VehicleMakes'] : ['VehicleMakes', variables],
    queryFn: request<VehicleMakesQuery, VehicleMakesQueryVariables>(VehicleMakesDocument, variables),
    ...options
  }
    )};

useVehicleMakesQuery.getKey = (variables?: VehicleMakesQueryVariables) => variables === undefined ? ['VehicleMakes'] : ['VehicleMakes', variables];


useVehicleMakesQuery.fetcher = (variables?: VehicleMakesQueryVariables, options?: RequestInit['headers']) => request<VehicleMakesQuery, VehicleMakesQueryVariables>(VehicleMakesDocument, variables, options);

export const VehicleModelsDocument = new TypedDocumentString(`
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
    `);

export const useVehicleModelsQuery = <
      TData = VehicleModelsQuery,
      TError = unknown
    >(
      variables: VehicleModelsQueryVariables,
      options?: Omit<UseQueryOptions<VehicleModelsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<VehicleModelsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<VehicleModelsQuery, TError, TData>(
      {
    queryKey: ['VehicleModels', variables],
    queryFn: request<VehicleModelsQuery, VehicleModelsQueryVariables>(VehicleModelsDocument, variables),
    ...options
  }
    )};

useVehicleModelsQuery.getKey = (variables: VehicleModelsQueryVariables) => ['VehicleModels', variables];


useVehicleModelsQuery.fetcher = (variables: VehicleModelsQueryVariables, options?: RequestInit['headers']) => request<VehicleModelsQuery, VehicleModelsQueryVariables>(VehicleModelsDocument, variables, options);

export const ServiceTypesDocument = new TypedDocumentString(`
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
    `);

export const useServiceTypesQuery = <
      TData = ServiceTypesQuery,
      TError = unknown
    >(
      variables?: ServiceTypesQueryVariables,
      options?: Omit<UseQueryOptions<ServiceTypesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ServiceTypesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ServiceTypesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ServiceTypes'] : ['ServiceTypes', variables],
    queryFn: request<ServiceTypesQuery, ServiceTypesQueryVariables>(ServiceTypesDocument, variables),
    ...options
  }
    )};

useServiceTypesQuery.getKey = (variables?: ServiceTypesQueryVariables) => variables === undefined ? ['ServiceTypes'] : ['ServiceTypes', variables];


useServiceTypesQuery.fetcher = (variables?: ServiceTypesQueryVariables, options?: RequestInit['headers']) => request<ServiceTypesQuery, ServiceTypesQueryVariables>(ServiceTypesDocument, variables, options);

export const PartNamesDocument = new TypedDocumentString(`
    query PartNames {
  partNames {
    id
    name
    category
  }
}
    `);

export const usePartNamesQuery = <
      TData = PartNamesQuery,
      TError = unknown
    >(
      variables?: PartNamesQueryVariables,
      options?: Omit<UseQueryOptions<PartNamesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<PartNamesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<PartNamesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['PartNames'] : ['PartNames', variables],
    queryFn: request<PartNamesQuery, PartNamesQueryVariables>(PartNamesDocument, variables),
    ...options
  }
    )};

usePartNamesQuery.getKey = (variables?: PartNamesQueryVariables) => variables === undefined ? ['PartNames'] : ['PartNames', variables];


usePartNamesQuery.fetcher = (variables?: PartNamesQueryVariables, options?: RequestInit['headers']) => request<PartNamesQuery, PartNamesQueryVariables>(PartNamesDocument, variables, options);

export const StorageLocationsDocument = new TypedDocumentString(`
    query StorageLocations {
  storageLocations {
    id
    name
    code
  }
}
    `);

export const useStorageLocationsQuery = <
      TData = StorageLocationsQuery,
      TError = unknown
    >(
      variables?: StorageLocationsQueryVariables,
      options?: Omit<UseQueryOptions<StorageLocationsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StorageLocationsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StorageLocationsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['StorageLocations'] : ['StorageLocations', variables],
    queryFn: request<StorageLocationsQuery, StorageLocationsQueryVariables>(StorageLocationsDocument, variables),
    ...options
  }
    )};

useStorageLocationsQuery.getKey = (variables?: StorageLocationsQueryVariables) => variables === undefined ? ['StorageLocations'] : ['StorageLocations', variables];


useStorageLocationsQuery.fetcher = (variables?: StorageLocationsQueryVariables, options?: RequestInit['headers']) => request<StorageLocationsQuery, StorageLocationsQueryVariables>(StorageLocationsDocument, variables, options);

export const AppointmentsDocument = new TypedDocumentString(`
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
    `);

export const useAppointmentsQuery = <
      TData = AppointmentsQuery,
      TError = unknown
    >(
      variables?: AppointmentsQueryVariables,
      options?: Omit<UseQueryOptions<AppointmentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AppointmentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AppointmentsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Appointments'] : ['Appointments', variables],
    queryFn: request<AppointmentsQuery, AppointmentsQueryVariables>(AppointmentsDocument, variables),
    ...options
  }
    )};

useAppointmentsQuery.getKey = (variables?: AppointmentsQueryVariables) => variables === undefined ? ['Appointments'] : ['Appointments', variables];


useAppointmentsQuery.fetcher = (variables?: AppointmentsQueryVariables, options?: RequestInit['headers']) => request<AppointmentsQuery, AppointmentsQueryVariables>(AppointmentsDocument, variables, options);

export const CustomersDocument = new TypedDocumentString(`
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
    `);

export const useCustomersQuery = <
      TData = CustomersQuery,
      TError = unknown
    >(
      variables?: CustomersQueryVariables,
      options?: Omit<UseQueryOptions<CustomersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<CustomersQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<CustomersQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Customers'] : ['Customers', variables],
    queryFn: request<CustomersQuery, CustomersQueryVariables>(CustomersDocument, variables),
    ...options
  }
    )};

useCustomersQuery.getKey = (variables?: CustomersQueryVariables) => variables === undefined ? ['Customers'] : ['Customers', variables];


useCustomersQuery.fetcher = (variables?: CustomersQueryVariables, options?: RequestInit['headers']) => request<CustomersQuery, CustomersQueryVariables>(CustomersDocument, variables, options);

export const CreateCustomerDocument = new TypedDocumentString(`
    mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    name
    email
    phone
    status
  }
}
    `);

export const useCreateCustomerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateCustomerMutation, TError, CreateCustomerMutationVariables, TContext>) => {
    
    return useMutation<CreateCustomerMutation, TError, CreateCustomerMutationVariables, TContext>(
      {
    mutationKey: ['CreateCustomer'],
    mutationFn: (variables?: CreateCustomerMutationVariables) => request<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, variables)(),
    ...options
  }
    )};


useCreateCustomerMutation.fetcher = (variables: CreateCustomerMutationVariables, options?: RequestInit['headers']) => request<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, variables, options);

export const UpdateCustomerDocument = new TypedDocumentString(`
    mutation UpdateCustomer($id: ID!, $input: UpdateCustomerInput!) {
  updateCustomer(id: $id, input: $input) {
    id
    name
    email
    phone
    status
  }
}
    `);

export const useUpdateCustomerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateCustomerMutation, TError, UpdateCustomerMutationVariables, TContext>) => {
    
    return useMutation<UpdateCustomerMutation, TError, UpdateCustomerMutationVariables, TContext>(
      {
    mutationKey: ['UpdateCustomer'],
    mutationFn: (variables?: UpdateCustomerMutationVariables) => request<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, variables)(),
    ...options
  }
    )};


useUpdateCustomerMutation.fetcher = (variables: UpdateCustomerMutationVariables, options?: RequestInit['headers']) => request<UpdateCustomerMutation, UpdateCustomerMutationVariables>(UpdateCustomerDocument, variables, options);

export const DeleteCustomerDocument = new TypedDocumentString(`
    mutation DeleteCustomer($id: ID!) {
  deleteCustomer(id: $id)
}
    `);

export const useDeleteCustomerMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteCustomerMutation, TError, DeleteCustomerMutationVariables, TContext>) => {
    
    return useMutation<DeleteCustomerMutation, TError, DeleteCustomerMutationVariables, TContext>(
      {
    mutationKey: ['DeleteCustomer'],
    mutationFn: (variables?: DeleteCustomerMutationVariables) => request<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, variables)(),
    ...options
  }
    )};


useDeleteCustomerMutation.fetcher = (variables: DeleteCustomerMutationVariables, options?: RequestInit['headers']) => request<DeleteCustomerMutation, DeleteCustomerMutationVariables>(DeleteCustomerDocument, variables, options);

export const VehiclesDocument = new TypedDocumentString(`
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
    `);

export const useVehiclesQuery = <
      TData = VehiclesQuery,
      TError = unknown
    >(
      variables?: VehiclesQueryVariables,
      options?: Omit<UseQueryOptions<VehiclesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<VehiclesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<VehiclesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Vehicles'] : ['Vehicles', variables],
    queryFn: request<VehiclesQuery, VehiclesQueryVariables>(VehiclesDocument, variables),
    ...options
  }
    )};

useVehiclesQuery.getKey = (variables?: VehiclesQueryVariables) => variables === undefined ? ['Vehicles'] : ['Vehicles', variables];


useVehiclesQuery.fetcher = (variables?: VehiclesQueryVariables, options?: RequestInit['headers']) => request<VehiclesQuery, VehiclesQueryVariables>(VehiclesDocument, variables, options);

export const VehicleDocument = new TypedDocumentString(`
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
    `);

export const useVehicleQuery = <
      TData = VehicleQuery,
      TError = unknown
    >(
      variables: VehicleQueryVariables,
      options?: Omit<UseQueryOptions<VehicleQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<VehicleQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<VehicleQuery, TError, TData>(
      {
    queryKey: ['Vehicle', variables],
    queryFn: request<VehicleQuery, VehicleQueryVariables>(VehicleDocument, variables),
    ...options
  }
    )};

useVehicleQuery.getKey = (variables: VehicleQueryVariables) => ['Vehicle', variables];


useVehicleQuery.fetcher = (variables: VehicleQueryVariables, options?: RequestInit['headers']) => request<VehicleQuery, VehicleQueryVariables>(VehicleDocument, variables, options);

export const CreateVehicleDocument = new TypedDocumentString(`
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
    `);

export const useCreateVehicleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateVehicleMutation, TError, CreateVehicleMutationVariables, TContext>) => {
    
    return useMutation<CreateVehicleMutation, TError, CreateVehicleMutationVariables, TContext>(
      {
    mutationKey: ['CreateVehicle'],
    mutationFn: (variables?: CreateVehicleMutationVariables) => request<CreateVehicleMutation, CreateVehicleMutationVariables>(CreateVehicleDocument, variables)(),
    ...options
  }
    )};


useCreateVehicleMutation.fetcher = (variables: CreateVehicleMutationVariables, options?: RequestInit['headers']) => request<CreateVehicleMutation, CreateVehicleMutationVariables>(CreateVehicleDocument, variables, options);

export const UpdateVehicleDocument = new TypedDocumentString(`
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
    `);

export const useUpdateVehicleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateVehicleMutation, TError, UpdateVehicleMutationVariables, TContext>) => {
    
    return useMutation<UpdateVehicleMutation, TError, UpdateVehicleMutationVariables, TContext>(
      {
    mutationKey: ['UpdateVehicle'],
    mutationFn: (variables?: UpdateVehicleMutationVariables) => request<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, variables)(),
    ...options
  }
    )};


useUpdateVehicleMutation.fetcher = (variables: UpdateVehicleMutationVariables, options?: RequestInit['headers']) => request<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, variables, options);

export const DeleteVehicleDocument = new TypedDocumentString(`
    mutation DeleteVehicle($id: ID!) {
  deleteVehicle(id: $id)
}
    `);

export const useDeleteVehicleMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteVehicleMutation, TError, DeleteVehicleMutationVariables, TContext>) => {
    
    return useMutation<DeleteVehicleMutation, TError, DeleteVehicleMutationVariables, TContext>(
      {
    mutationKey: ['DeleteVehicle'],
    mutationFn: (variables?: DeleteVehicleMutationVariables) => request<DeleteVehicleMutation, DeleteVehicleMutationVariables>(DeleteVehicleDocument, variables)(),
    ...options
  }
    )};


useDeleteVehicleMutation.fetcher = (variables: DeleteVehicleMutationVariables, options?: RequestInit['headers']) => request<DeleteVehicleMutation, DeleteVehicleMutationVariables>(DeleteVehicleDocument, variables, options);

export const CreateAppointmentDocument = new TypedDocumentString(`
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
    `);

export const useCreateAppointmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateAppointmentMutation, TError, CreateAppointmentMutationVariables, TContext>) => {
    
    return useMutation<CreateAppointmentMutation, TError, CreateAppointmentMutationVariables, TContext>(
      {
    mutationKey: ['CreateAppointment'],
    mutationFn: (variables?: CreateAppointmentMutationVariables) => request<CreateAppointmentMutation, CreateAppointmentMutationVariables>(CreateAppointmentDocument, variables)(),
    ...options
  }
    )};


useCreateAppointmentMutation.fetcher = (variables: CreateAppointmentMutationVariables, options?: RequestInit['headers']) => request<CreateAppointmentMutation, CreateAppointmentMutationVariables>(CreateAppointmentDocument, variables, options);

export const StaffAssignmentsDocument = new TypedDocumentString(`
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
    `);

export const useStaffAssignmentsQuery = <
      TData = StaffAssignmentsQuery,
      TError = unknown
    >(
      variables: StaffAssignmentsQueryVariables,
      options?: Omit<UseQueryOptions<StaffAssignmentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StaffAssignmentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StaffAssignmentsQuery, TError, TData>(
      {
    queryKey: ['StaffAssignments', variables],
    queryFn: request<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>(StaffAssignmentsDocument, variables),
    ...options
  }
    )};

useStaffAssignmentsQuery.getKey = (variables: StaffAssignmentsQueryVariables) => ['StaffAssignments', variables];


useStaffAssignmentsQuery.fetcher = (variables: StaffAssignmentsQueryVariables, options?: RequestInit['headers']) => request<StaffAssignmentsQuery, StaffAssignmentsQueryVariables>(StaffAssignmentsDocument, variables, options);

export const CreateStaffAssignmentDocument = new TypedDocumentString(`
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
    `);

export const useCreateStaffAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateStaffAssignmentMutation, TError, CreateStaffAssignmentMutationVariables, TContext>) => {
    
    return useMutation<CreateStaffAssignmentMutation, TError, CreateStaffAssignmentMutationVariables, TContext>(
      {
    mutationKey: ['CreateStaffAssignment'],
    mutationFn: (variables?: CreateStaffAssignmentMutationVariables) => request<CreateStaffAssignmentMutation, CreateStaffAssignmentMutationVariables>(CreateStaffAssignmentDocument, variables)(),
    ...options
  }
    )};


useCreateStaffAssignmentMutation.fetcher = (variables: CreateStaffAssignmentMutationVariables, options?: RequestInit['headers']) => request<CreateStaffAssignmentMutation, CreateStaffAssignmentMutationVariables>(CreateStaffAssignmentDocument, variables, options);

export const UpdateStaffAssignmentDocument = new TypedDocumentString(`
    mutation UpdateStaffAssignment($id: ID!, $input: UpdateStaffAssignmentInput!) {
  updateStaffAssignment(id: $id, input: $input) {
    id
    status
    totalMinutes
  }
}
    `);

export const useUpdateStaffAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateStaffAssignmentMutation, TError, UpdateStaffAssignmentMutationVariables, TContext>) => {
    
    return useMutation<UpdateStaffAssignmentMutation, TError, UpdateStaffAssignmentMutationVariables, TContext>(
      {
    mutationKey: ['UpdateStaffAssignment'],
    mutationFn: (variables?: UpdateStaffAssignmentMutationVariables) => request<UpdateStaffAssignmentMutation, UpdateStaffAssignmentMutationVariables>(UpdateStaffAssignmentDocument, variables)(),
    ...options
  }
    )};


useUpdateStaffAssignmentMutation.fetcher = (variables: UpdateStaffAssignmentMutationVariables, options?: RequestInit['headers']) => request<UpdateStaffAssignmentMutation, UpdateStaffAssignmentMutationVariables>(UpdateStaffAssignmentDocument, variables, options);

export const DeleteStaffAssignmentDocument = new TypedDocumentString(`
    mutation DeleteStaffAssignment($id: ID!) {
  deleteStaffAssignment(id: $id)
}
    `);

export const useDeleteStaffAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteStaffAssignmentMutation, TError, DeleteStaffAssignmentMutationVariables, TContext>) => {
    
    return useMutation<DeleteStaffAssignmentMutation, TError, DeleteStaffAssignmentMutationVariables, TContext>(
      {
    mutationKey: ['DeleteStaffAssignment'],
    mutationFn: (variables?: DeleteStaffAssignmentMutationVariables) => request<DeleteStaffAssignmentMutation, DeleteStaffAssignmentMutationVariables>(DeleteStaffAssignmentDocument, variables)(),
    ...options
  }
    )};


useDeleteStaffAssignmentMutation.fetcher = (variables: DeleteStaffAssignmentMutationVariables, options?: RequestInit['headers']) => request<DeleteStaffAssignmentMutation, DeleteStaffAssignmentMutationVariables>(DeleteStaffAssignmentDocument, variables, options);

export const ReassignStaffAssignmentDocument = new TypedDocumentString(`
    mutation ReassignStaffAssignment($id: ID!, $targetAppointmentId: ID!) {
  reassignStaffAssignment(id: $id, targetAppointmentId: $targetAppointmentId) {
    id
    appointmentId
    status
  }
}
    `);

export const useReassignStaffAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ReassignStaffAssignmentMutation, TError, ReassignStaffAssignmentMutationVariables, TContext>) => {
    
    return useMutation<ReassignStaffAssignmentMutation, TError, ReassignStaffAssignmentMutationVariables, TContext>(
      {
    mutationKey: ['ReassignStaffAssignment'],
    mutationFn: (variables?: ReassignStaffAssignmentMutationVariables) => request<ReassignStaffAssignmentMutation, ReassignStaffAssignmentMutationVariables>(ReassignStaffAssignmentDocument, variables)(),
    ...options
  }
    )};


useReassignStaffAssignmentMutation.fetcher = (variables: ReassignStaffAssignmentMutationVariables, options?: RequestInit['headers']) => request<ReassignStaffAssignmentMutation, ReassignStaffAssignmentMutationVariables>(ReassignStaffAssignmentDocument, variables, options);

export const StartStaffAssignmentDocument = new TypedDocumentString(`
    mutation StartStaffAssignment($id: ID!) {
  startStaffAssignment(id: $id) {
    id
    status
    startedAt
  }
}
    `);

export const useStartStaffAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<StartStaffAssignmentMutation, TError, StartStaffAssignmentMutationVariables, TContext>) => {
    
    return useMutation<StartStaffAssignmentMutation, TError, StartStaffAssignmentMutationVariables, TContext>(
      {
    mutationKey: ['StartStaffAssignment'],
    mutationFn: (variables?: StartStaffAssignmentMutationVariables) => request<StartStaffAssignmentMutation, StartStaffAssignmentMutationVariables>(StartStaffAssignmentDocument, variables)(),
    ...options
  }
    )};


useStartStaffAssignmentMutation.fetcher = (variables: StartStaffAssignmentMutationVariables, options?: RequestInit['headers']) => request<StartStaffAssignmentMutation, StartStaffAssignmentMutationVariables>(StartStaffAssignmentDocument, variables, options);

export const CompleteStaffAssignmentDocument = new TypedDocumentString(`
    mutation CompleteStaffAssignment($id: ID!, $totalMinutes: Int!) {
  completeStaffAssignment(id: $id, totalMinutes: $totalMinutes) {
    id
    status
    completedAt
    totalMinutes
  }
}
    `);

export const useCompleteStaffAssignmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CompleteStaffAssignmentMutation, TError, CompleteStaffAssignmentMutationVariables, TContext>) => {
    
    return useMutation<CompleteStaffAssignmentMutation, TError, CompleteStaffAssignmentMutationVariables, TContext>(
      {
    mutationKey: ['CompleteStaffAssignment'],
    mutationFn: (variables?: CompleteStaffAssignmentMutationVariables) => request<CompleteStaffAssignmentMutation, CompleteStaffAssignmentMutationVariables>(CompleteStaffAssignmentDocument, variables)(),
    ...options
  }
    )};


useCompleteStaffAssignmentMutation.fetcher = (variables: CompleteStaffAssignmentMutationVariables, options?: RequestInit['headers']) => request<CompleteStaffAssignmentMutation, CompleteStaffAssignmentMutationVariables>(CompleteStaffAssignmentDocument, variables, options);

export const StaffActiveAssignmentsDocument = new TypedDocumentString(`
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
    `);

export const useStaffActiveAssignmentsQuery = <
      TData = StaffActiveAssignmentsQuery,
      TError = unknown
    >(
      variables: StaffActiveAssignmentsQueryVariables,
      options?: Omit<UseQueryOptions<StaffActiveAssignmentsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StaffActiveAssignmentsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StaffActiveAssignmentsQuery, TError, TData>(
      {
    queryKey: ['StaffActiveAssignments', variables],
    queryFn: request<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>(StaffActiveAssignmentsDocument, variables),
    ...options
  }
    )};

useStaffActiveAssignmentsQuery.getKey = (variables: StaffActiveAssignmentsQueryVariables) => ['StaffActiveAssignments', variables];


useStaffActiveAssignmentsQuery.fetcher = (variables: StaffActiveAssignmentsQueryVariables, options?: RequestInit['headers']) => request<StaffActiveAssignmentsQuery, StaffActiveAssignmentsQueryVariables>(StaffActiveAssignmentsDocument, variables, options);

export const UpdateAppointmentDocument = new TypedDocumentString(`
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
    `);

export const useUpdateAppointmentMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateAppointmentMutation, TError, UpdateAppointmentMutationVariables, TContext>) => {
    
    return useMutation<UpdateAppointmentMutation, TError, UpdateAppointmentMutationVariables, TContext>(
      {
    mutationKey: ['UpdateAppointment'],
    mutationFn: (variables?: UpdateAppointmentMutationVariables) => request<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>(UpdateAppointmentDocument, variables)(),
    ...options
  }
    )};


useUpdateAppointmentMutation.fetcher = (variables: UpdateAppointmentMutationVariables, options?: RequestInit['headers']) => request<UpdateAppointmentMutation, UpdateAppointmentMutationVariables>(UpdateAppointmentDocument, variables, options);

export const ShopServicesDocument = new TypedDocumentString(`
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
    `);

export const useShopServicesQuery = <
      TData = ShopServicesQuery,
      TError = unknown
    >(
      variables?: ShopServicesQueryVariables,
      options?: Omit<UseQueryOptions<ShopServicesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ShopServicesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ShopServicesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ShopServices'] : ['ShopServices', variables],
    queryFn: request<ShopServicesQuery, ShopServicesQueryVariables>(ShopServicesDocument, variables),
    ...options
  }
    )};

useShopServicesQuery.getKey = (variables?: ShopServicesQueryVariables) => variables === undefined ? ['ShopServices'] : ['ShopServices', variables];


useShopServicesQuery.fetcher = (variables?: ShopServicesQueryVariables, options?: RequestInit['headers']) => request<ShopServicesQuery, ShopServicesQueryVariables>(ShopServicesDocument, variables, options);

export const CreateShopServiceDocument = new TypedDocumentString(`
    mutation CreateShopService($input: CreateShopServiceInput!) {
  createShopService(input: $input) {
    id
    name
  }
}
    `);

export const useCreateShopServiceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateShopServiceMutation, TError, CreateShopServiceMutationVariables, TContext>) => {
    
    return useMutation<CreateShopServiceMutation, TError, CreateShopServiceMutationVariables, TContext>(
      {
    mutationKey: ['CreateShopService'],
    mutationFn: (variables?: CreateShopServiceMutationVariables) => request<CreateShopServiceMutation, CreateShopServiceMutationVariables>(CreateShopServiceDocument, variables)(),
    ...options
  }
    )};


useCreateShopServiceMutation.fetcher = (variables: CreateShopServiceMutationVariables, options?: RequestInit['headers']) => request<CreateShopServiceMutation, CreateShopServiceMutationVariables>(CreateShopServiceDocument, variables, options);

export const DeleteShopServiceDocument = new TypedDocumentString(`
    mutation DeleteShopService($id: ID!) {
  deleteShopService(id: $id)
}
    `);

export const useDeleteShopServiceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteShopServiceMutation, TError, DeleteShopServiceMutationVariables, TContext>) => {
    
    return useMutation<DeleteShopServiceMutation, TError, DeleteShopServiceMutationVariables, TContext>(
      {
    mutationKey: ['DeleteShopService'],
    mutationFn: (variables?: DeleteShopServiceMutationVariables) => request<DeleteShopServiceMutation, DeleteShopServiceMutationVariables>(DeleteShopServiceDocument, variables)(),
    ...options
  }
    )};


useDeleteShopServiceMutation.fetcher = (variables: DeleteShopServiceMutationVariables, options?: RequestInit['headers']) => request<DeleteShopServiceMutation, DeleteShopServiceMutationVariables>(DeleteShopServiceDocument, variables, options);

export const ShopPartsDocument = new TypedDocumentString(`
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
    `);

export const useShopPartsQuery = <
      TData = ShopPartsQuery,
      TError = unknown
    >(
      variables?: ShopPartsQueryVariables,
      options?: Omit<UseQueryOptions<ShopPartsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ShopPartsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ShopPartsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ShopParts'] : ['ShopParts', variables],
    queryFn: request<ShopPartsQuery, ShopPartsQueryVariables>(ShopPartsDocument, variables),
    ...options
  }
    )};

useShopPartsQuery.getKey = (variables?: ShopPartsQueryVariables) => variables === undefined ? ['ShopParts'] : ['ShopParts', variables];


useShopPartsQuery.fetcher = (variables?: ShopPartsQueryVariables, options?: RequestInit['headers']) => request<ShopPartsQuery, ShopPartsQueryVariables>(ShopPartsDocument, variables, options);

export const CreateShopPartDocument = new TypedDocumentString(`
    mutation CreateShopPart($input: CreateShopPartInput!) {
  createShopPart(input: $input) {
    id
    name
  }
}
    `);

export const useCreateShopPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateShopPartMutation, TError, CreateShopPartMutationVariables, TContext>) => {
    
    return useMutation<CreateShopPartMutation, TError, CreateShopPartMutationVariables, TContext>(
      {
    mutationKey: ['CreateShopPart'],
    mutationFn: (variables?: CreateShopPartMutationVariables) => request<CreateShopPartMutation, CreateShopPartMutationVariables>(CreateShopPartDocument, variables)(),
    ...options
  }
    )};


useCreateShopPartMutation.fetcher = (variables: CreateShopPartMutationVariables, options?: RequestInit['headers']) => request<CreateShopPartMutation, CreateShopPartMutationVariables>(CreateShopPartDocument, variables, options);

export const UpdateShopPartDocument = new TypedDocumentString(`
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
    `);

export const useUpdateShopPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateShopPartMutation, TError, UpdateShopPartMutationVariables, TContext>) => {
    
    return useMutation<UpdateShopPartMutation, TError, UpdateShopPartMutationVariables, TContext>(
      {
    mutationKey: ['UpdateShopPart'],
    mutationFn: (variables?: UpdateShopPartMutationVariables) => request<UpdateShopPartMutation, UpdateShopPartMutationVariables>(UpdateShopPartDocument, variables)(),
    ...options
  }
    )};


useUpdateShopPartMutation.fetcher = (variables: UpdateShopPartMutationVariables, options?: RequestInit['headers']) => request<UpdateShopPartMutation, UpdateShopPartMutationVariables>(UpdateShopPartDocument, variables, options);

export const DeleteShopPartDocument = new TypedDocumentString(`
    mutation DeleteShopPart($id: ID!) {
  deleteShopPart(id: $id)
}
    `);

export const useDeleteShopPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteShopPartMutation, TError, DeleteShopPartMutationVariables, TContext>) => {
    
    return useMutation<DeleteShopPartMutation, TError, DeleteShopPartMutationVariables, TContext>(
      {
    mutationKey: ['DeleteShopPart'],
    mutationFn: (variables?: DeleteShopPartMutationVariables) => request<DeleteShopPartMutation, DeleteShopPartMutationVariables>(DeleteShopPartDocument, variables)(),
    ...options
  }
    )};


useDeleteShopPartMutation.fetcher = (variables: DeleteShopPartMutationVariables, options?: RequestInit['headers']) => request<DeleteShopPartMutation, DeleteShopPartMutationVariables>(DeleteShopPartDocument, variables, options);

export const AddPartBatchDocument = new TypedDocumentString(`
    mutation AddPartBatch($input: CreatePartBatchInput!) {
  addPartBatch(input: $input) {
    id
    partId
    quantity
    unitCost
  }
}
    `);

export const useAddPartBatchMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddPartBatchMutation, TError, AddPartBatchMutationVariables, TContext>) => {
    
    return useMutation<AddPartBatchMutation, TError, AddPartBatchMutationVariables, TContext>(
      {
    mutationKey: ['AddPartBatch'],
    mutationFn: (variables?: AddPartBatchMutationVariables) => request<AddPartBatchMutation, AddPartBatchMutationVariables>(AddPartBatchDocument, variables)(),
    ...options
  }
    )};


useAddPartBatchMutation.fetcher = (variables: AddPartBatchMutationVariables, options?: RequestInit['headers']) => request<AddPartBatchMutation, AddPartBatchMutationVariables>(AddPartBatchDocument, variables, options);

export const DeletePartBatchDocument = new TypedDocumentString(`
    mutation DeletePartBatch($id: ID!) {
  deletePartBatch(id: $id)
}
    `);

export const useDeletePartBatchMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeletePartBatchMutation, TError, DeletePartBatchMutationVariables, TContext>) => {
    
    return useMutation<DeletePartBatchMutation, TError, DeletePartBatchMutationVariables, TContext>(
      {
    mutationKey: ['DeletePartBatch'],
    mutationFn: (variables?: DeletePartBatchMutationVariables) => request<DeletePartBatchMutation, DeletePartBatchMutationVariables>(DeletePartBatchDocument, variables)(),
    ...options
  }
    )};


useDeletePartBatchMutation.fetcher = (variables: DeletePartBatchMutationVariables, options?: RequestInit['headers']) => request<DeletePartBatchMutation, DeletePartBatchMutationVariables>(DeletePartBatchDocument, variables, options);

export const ShopToolsDocument = new TypedDocumentString(`
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
    `);

export const useShopToolsQuery = <
      TData = ShopToolsQuery,
      TError = unknown
    >(
      variables?: ShopToolsQueryVariables,
      options?: Omit<UseQueryOptions<ShopToolsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<ShopToolsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<ShopToolsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['ShopTools'] : ['ShopTools', variables],
    queryFn: request<ShopToolsQuery, ShopToolsQueryVariables>(ShopToolsDocument, variables),
    ...options
  }
    )};

useShopToolsQuery.getKey = (variables?: ShopToolsQueryVariables) => variables === undefined ? ['ShopTools'] : ['ShopTools', variables];


useShopToolsQuery.fetcher = (variables?: ShopToolsQueryVariables, options?: RequestInit['headers']) => request<ShopToolsQuery, ShopToolsQueryVariables>(ShopToolsDocument, variables, options);

export const CreateShopToolDocument = new TypedDocumentString(`
    mutation CreateShopTool($input: CreateShopToolInput!) {
  createShopTool(input: $input) {
    id
    name
  }
}
    `);

export const useCreateShopToolMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateShopToolMutation, TError, CreateShopToolMutationVariables, TContext>) => {
    
    return useMutation<CreateShopToolMutation, TError, CreateShopToolMutationVariables, TContext>(
      {
    mutationKey: ['CreateShopTool'],
    mutationFn: (variables?: CreateShopToolMutationVariables) => request<CreateShopToolMutation, CreateShopToolMutationVariables>(CreateShopToolDocument, variables)(),
    ...options
  }
    )};


useCreateShopToolMutation.fetcher = (variables: CreateShopToolMutationVariables, options?: RequestInit['headers']) => request<CreateShopToolMutation, CreateShopToolMutationVariables>(CreateShopToolDocument, variables, options);

export const UpdateShopToolDocument = new TypedDocumentString(`
    mutation UpdateShopTool($id: ID!, $input: UpdateShopToolInput!) {
  updateShopTool(id: $id, input: $input) {
    id
    name
    description
    quantity
    status
  }
}
    `);

export const useUpdateShopToolMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateShopToolMutation, TError, UpdateShopToolMutationVariables, TContext>) => {
    
    return useMutation<UpdateShopToolMutation, TError, UpdateShopToolMutationVariables, TContext>(
      {
    mutationKey: ['UpdateShopTool'],
    mutationFn: (variables?: UpdateShopToolMutationVariables) => request<UpdateShopToolMutation, UpdateShopToolMutationVariables>(UpdateShopToolDocument, variables)(),
    ...options
  }
    )};


useUpdateShopToolMutation.fetcher = (variables: UpdateShopToolMutationVariables, options?: RequestInit['headers']) => request<UpdateShopToolMutation, UpdateShopToolMutationVariables>(UpdateShopToolDocument, variables, options);

export const DeleteShopToolDocument = new TypedDocumentString(`
    mutation DeleteShopTool($id: ID!) {
  deleteShopTool(id: $id)
}
    `);

export const useDeleteShopToolMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteShopToolMutation, TError, DeleteShopToolMutationVariables, TContext>) => {
    
    return useMutation<DeleteShopToolMutation, TError, DeleteShopToolMutationVariables, TContext>(
      {
    mutationKey: ['DeleteShopTool'],
    mutationFn: (variables?: DeleteShopToolMutationVariables) => request<DeleteShopToolMutation, DeleteShopToolMutationVariables>(DeleteShopToolDocument, variables)(),
    ...options
  }
    )};


useDeleteShopToolMutation.fetcher = (variables: DeleteShopToolMutationVariables, options?: RequestInit['headers']) => request<DeleteShopToolMutation, DeleteShopToolMutationVariables>(DeleteShopToolDocument, variables, options);

export const AppointmentPartsDocument = new TypedDocumentString(`
    query AppointmentParts($appointmentId: ID!) {
  appointmentParts(appointmentId: $appointmentId) {
    id
    appointmentId
    partId
    partName
    quantity
    unitPrice
    createdAt
  }
}
    `);

export const useAppointmentPartsQuery = <
      TData = AppointmentPartsQuery,
      TError = unknown
    >(
      variables: AppointmentPartsQueryVariables,
      options?: Omit<UseQueryOptions<AppointmentPartsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<AppointmentPartsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<AppointmentPartsQuery, TError, TData>(
      {
    queryKey: ['AppointmentParts', variables],
    queryFn: request<AppointmentPartsQuery, AppointmentPartsQueryVariables>(AppointmentPartsDocument, variables),
    ...options
  }
    )};

useAppointmentPartsQuery.getKey = (variables: AppointmentPartsQueryVariables) => ['AppointmentParts', variables];


useAppointmentPartsQuery.fetcher = (variables: AppointmentPartsQueryVariables, options?: RequestInit['headers']) => request<AppointmentPartsQuery, AppointmentPartsQueryVariables>(AppointmentPartsDocument, variables, options);

export const AddAppointmentPartDocument = new TypedDocumentString(`
    mutation AddAppointmentPart($input: AddAppointmentPartInput!) {
  addAppointmentPart(input: $input) {
    id
    partName
    quantity
    unitPrice
  }
}
    `);

export const useAddAppointmentPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<AddAppointmentPartMutation, TError, AddAppointmentPartMutationVariables, TContext>) => {
    
    return useMutation<AddAppointmentPartMutation, TError, AddAppointmentPartMutationVariables, TContext>(
      {
    mutationKey: ['AddAppointmentPart'],
    mutationFn: (variables?: AddAppointmentPartMutationVariables) => request<AddAppointmentPartMutation, AddAppointmentPartMutationVariables>(AddAppointmentPartDocument, variables)(),
    ...options
  }
    )};


useAddAppointmentPartMutation.fetcher = (variables: AddAppointmentPartMutationVariables, options?: RequestInit['headers']) => request<AddAppointmentPartMutation, AddAppointmentPartMutationVariables>(AddAppointmentPartDocument, variables, options);

export const DeleteAppointmentPartDocument = new TypedDocumentString(`
    mutation DeleteAppointmentPart($id: ID!) {
  deleteAppointmentPart(id: $id)
}
    `);

export const useDeleteAppointmentPartMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteAppointmentPartMutation, TError, DeleteAppointmentPartMutationVariables, TContext>) => {
    
    return useMutation<DeleteAppointmentPartMutation, TError, DeleteAppointmentPartMutationVariables, TContext>(
      {
    mutationKey: ['DeleteAppointmentPart'],
    mutationFn: (variables?: DeleteAppointmentPartMutationVariables) => request<DeleteAppointmentPartMutation, DeleteAppointmentPartMutationVariables>(DeleteAppointmentPartDocument, variables)(),
    ...options
  }
    )};


useDeleteAppointmentPartMutation.fetcher = (variables: DeleteAppointmentPartMutationVariables, options?: RequestInit['headers']) => request<DeleteAppointmentPartMutation, DeleteAppointmentPartMutationVariables>(DeleteAppointmentPartDocument, variables, options);

export const StaffListDocument = new TypedDocumentString(`
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
    `);

export const useStaffListQuery = <
      TData = StaffListQuery,
      TError = unknown
    >(
      variables?: StaffListQueryVariables,
      options?: Omit<UseQueryOptions<StaffListQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StaffListQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StaffListQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['StaffList'] : ['StaffList', variables],
    queryFn: request<StaffListQuery, StaffListQueryVariables>(StaffListDocument, variables),
    ...options
  }
    )};

useStaffListQuery.getKey = (variables?: StaffListQueryVariables) => variables === undefined ? ['StaffList'] : ['StaffList', variables];


useStaffListQuery.fetcher = (variables?: StaffListQueryVariables, options?: RequestInit['headers']) => request<StaffListQuery, StaffListQueryVariables>(StaffListDocument, variables, options);

export const StaffDetailDocument = new TypedDocumentString(`
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
    `);

export const useStaffDetailQuery = <
      TData = StaffDetailQuery,
      TError = unknown
    >(
      variables: StaffDetailQueryVariables,
      options?: Omit<UseQueryOptions<StaffDetailQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<StaffDetailQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<StaffDetailQuery, TError, TData>(
      {
    queryKey: ['StaffDetail', variables],
    queryFn: request<StaffDetailQuery, StaffDetailQueryVariables>(StaffDetailDocument, variables),
    ...options
  }
    )};

useStaffDetailQuery.getKey = (variables: StaffDetailQueryVariables) => ['StaffDetail', variables];


useStaffDetailQuery.fetcher = (variables: StaffDetailQueryVariables, options?: RequestInit['headers']) => request<StaffDetailQuery, StaffDetailQueryVariables>(StaffDetailDocument, variables, options);

export const CreateStaffDocument = new TypedDocumentString(`
    mutation CreateStaff($input: CreateStaffInput!) {
  createStaff(input: $input) {
    id
    name
    status
    createdAt
  }
}
    `);

export const useCreateStaffMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateStaffMutation, TError, CreateStaffMutationVariables, TContext>) => {
    
    return useMutation<CreateStaffMutation, TError, CreateStaffMutationVariables, TContext>(
      {
    mutationKey: ['CreateStaff'],
    mutationFn: (variables?: CreateStaffMutationVariables) => request<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, variables)(),
    ...options
  }
    )};


useCreateStaffMutation.fetcher = (variables: CreateStaffMutationVariables, options?: RequestInit['headers']) => request<CreateStaffMutation, CreateStaffMutationVariables>(CreateStaffDocument, variables, options);

export const UpdateStaffDocument = new TypedDocumentString(`
    mutation UpdateStaff($id: ID!, $input: UpdateStaffInput!) {
  updateStaff(id: $id, input: $input) {
    id
    name
    status
    updatedAt
  }
}
    `);

export const useUpdateStaffMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateStaffMutation, TError, UpdateStaffMutationVariables, TContext>) => {
    
    return useMutation<UpdateStaffMutation, TError, UpdateStaffMutationVariables, TContext>(
      {
    mutationKey: ['UpdateStaff'],
    mutationFn: (variables?: UpdateStaffMutationVariables) => request<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, variables)(),
    ...options
  }
    )};


useUpdateStaffMutation.fetcher = (variables: UpdateStaffMutationVariables, options?: RequestInit['headers']) => request<UpdateStaffMutation, UpdateStaffMutationVariables>(UpdateStaffDocument, variables, options);

export const DeleteStaffDocument = new TypedDocumentString(`
    mutation DeleteStaff($id: ID!) {
  deleteStaff(id: $id)
}
    `);

export const useDeleteStaffMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteStaffMutation, TError, DeleteStaffMutationVariables, TContext>) => {
    
    return useMutation<DeleteStaffMutation, TError, DeleteStaffMutationVariables, TContext>(
      {
    mutationKey: ['DeleteStaff'],
    mutationFn: (variables?: DeleteStaffMutationVariables) => request<DeleteStaffMutation, DeleteStaffMutationVariables>(DeleteStaffDocument, variables)(),
    ...options
  }
    )};


useDeleteStaffMutation.fetcher = (variables: DeleteStaffMutationVariables, options?: RequestInit['headers']) => request<DeleteStaffMutation, DeleteStaffMutationVariables>(DeleteStaffDocument, variables, options);
