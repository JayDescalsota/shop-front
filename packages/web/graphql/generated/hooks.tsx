/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateAppointmentInput = {
  assignedMechanic?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerName: string;
  customerPhone?: string | null | undefined;
  description?: string | null | undefined;
  endTime: string;
  notes?: string | null | undefined;
  scheduledDate: string;
  serviceType: string;
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
  tenantId: string | number;
  transmission?: string | null | undefined;
  vin?: string | null | undefined;
  year?: number | null | undefined;
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

export type UpdateVehicleInput = {
  color?: string | null | undefined;
  currentMileage?: number | null | undefined;
  licensePlate?: string | null | undefined;
  make?: string | null | undefined;
  model?: string | null | undefined;
  notes?: string | null | undefined;
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


export type ServiceTypesQuery = { serviceTypes: Array<{ id: string, name: string, code: string, category: string, description: string | null, estimatedHours: number | null }> };

export type AppointmentsQueryVariables = Exact<{
  tenantId: string | number;
}>;


export type AppointmentsQuery = { appointments: { total: number, items: Array<{ id: string, customerName: string, vehicleMake: string, vehicleModel: string, serviceType: string, scheduledDate: string, startTime: string, status: string, assignedMechanic: string | null }> } };

export type CustomersQueryVariables = Exact<{
  tenantId: string | number;
}>;


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

export type VehiclesQueryVariables = Exact<{
  tenantId: string | number;
}>;


export type VehiclesQuery = { vehicles: { total: number, items: Array<{ id: string, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null, customerId: string | null, notes: string | null }> } };

export type CreateVehicleMutationVariables = Exact<{
  input: CreateVehicleInput;
}>;


export type CreateVehicleMutation = { createVehicle: { id: string, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null } };

export type UpdateVehicleMutationVariables = Exact<{
  id: string | number;
  input: UpdateVehicleInput;
}>;


export type UpdateVehicleMutation = { updateVehicle: { id: string, make: string, model: string, year: number | null, vin: string | null, licensePlate: string | null, color: string | null } };

export type DeleteVehicleMutationVariables = Exact<{
  id: string | number;
}>;


export type DeleteVehicleMutation = { deleteVehicle: boolean };

export type CreateAppointmentMutationVariables = Exact<{
  input: CreateAppointmentInput;
}>;


export type CreateAppointmentMutation = { createAppointment: { id: string, customerName: string, vehicleMake: string, vehicleModel: string, serviceType: string, scheduledDate: string, startTime: string, status: string } };


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
    description
    estimatedHours
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
export const AppointmentsDocument = gql`
    query Appointments($tenantId: ID!) {
  appointments(tenantId: $tenantId) {
    items {
      id
      customerName
      vehicleMake
      vehicleModel
      serviceType
      scheduledDate
      startTime
      status
      assignedMechanic
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
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useAppointmentsQuery(baseOptions: Apollo.QueryHookOptions<AppointmentsQuery, AppointmentsQueryVariables> & ({ variables: AppointmentsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
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
    query Customers($tenantId: ID!) {
  customers(tenantId: $tenantId) {
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
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useCustomersQuery(baseOptions: Apollo.QueryHookOptions<CustomersQuery, CustomersQueryVariables> & ({ variables: CustomersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
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
    query Vehicles($tenantId: ID!) {
  vehicles(tenantId: $tenantId) {
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
 *      tenantId: // value for 'tenantId'
 *   },
 * });
 */
export function useVehiclesQuery(baseOptions: Apollo.QueryHookOptions<VehiclesQuery, VehiclesQueryVariables> & ({ variables: VehiclesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
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
    status
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