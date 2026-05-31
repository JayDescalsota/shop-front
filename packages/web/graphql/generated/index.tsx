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

export type AppointmentsQueryVariables = Exact<{
  tenantId: string | number;
}>;


export type AppointmentsQuery = { appointments: { total: number, items: Array<{ id: string, customerName: string, vehicleMake: string, vehicleModel: string, serviceType: string, scheduledDate: string, startTime: string, status: string, assignedMechanic: string | null }> } };

export type CreateAppointmentMutationVariables = Exact<{
  input: CreateAppointmentInput;
}>;


export type CreateAppointmentMutation = { createAppointment: { id: string, customerName: string, vehicleMake: string, vehicleModel: string, serviceType: string, scheduledDate: string, startTime: string, status: string } };


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