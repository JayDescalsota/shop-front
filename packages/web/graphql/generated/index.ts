export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: unknown; output: unknown; }
};

export type AddDocumentInput = {
  docType: Scalars['String']['input'];
  expiryDate?: InputMaybe<Scalars['String']['input']>;
  fileUrl: Scalars['String']['input'];
  title: Scalars['String']['input'];
  vehicleId: Scalars['ID']['input'];
};

export type AddExpenseInput = {
  amount: Scalars['Float']['input'];
  category: Scalars['String']['input'];
  date: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  recurring?: InputMaybe<Scalars['Boolean']['input']>;
  vehicleId: Scalars['ID']['input'];
};

export type AddMaintenanceInput = {
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  mileageAtService?: InputMaybe<Scalars['Int']['input']>;
  nextDueDate?: InputMaybe<Scalars['String']['input']>;
  nextDueMileage?: InputMaybe<Scalars['Int']['input']>;
  providerName?: InputMaybe<Scalars['String']['input']>;
  serviceDate: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  vehicleId: Scalars['ID']['input'];
};

export type Appointment = {
  __typename?: 'Appointment';
  assignedMechanic?: Maybe<Scalars['String']['output']>;
  bay?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  customerEmail?: Maybe<Scalars['String']['output']>;
  customerName: Scalars['String']['output'];
  customerPhone?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  scheduledDate: Scalars['String']['output'];
  serviceType: Scalars['String']['output'];
  shopId?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
  vehicleMake: Scalars['String']['output'];
  vehicleModel: Scalars['String']['output'];
  vehiclePlate?: Maybe<Scalars['String']['output']>;
  vehicleYear?: Maybe<Scalars['Int']['output']>;
};

export type AppointmentConnection = {
  __typename?: 'AppointmentConnection';
  items: Array<Appointment>;
  total: Scalars['Int']['output'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  expiresAt: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export type BranchInfo = {
  __typename?: 'BranchInfo';
  permissions: Array<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  tenantName: Scalars['String']['output'];
  tenantType: TenantType;
};

export type CreateAppointmentInput = {
  assignedMechanic?: InputMaybe<Scalars['String']['input']>;
  bay?: InputMaybe<Scalars['String']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerName: Scalars['String']['input'];
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  scheduledDate: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  shopId?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['String']['input'];
  tenantId: Scalars['ID']['input'];
  vehicleMake: Scalars['String']['input'];
  vehicleModel: Scalars['String']['input'];
  vehiclePlate?: InputMaybe<Scalars['String']['input']>;
  vehicleYear?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['ID']['input'];
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInventoryItemInput = {
  barcode?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quantityOnHand?: InputMaybe<Scalars['Int']['input']>;
  reorderPoint?: InputMaybe<Scalars['Int']['input']>;
  reorderQuantity?: InputMaybe<Scalars['Int']['input']>;
  sku: Scalars['String']['input'];
  unitPrice: Scalars['Float']['input'];
};

export type CreatePartBatchInput = {
  partId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  unitCost: Scalars['Float']['input'];
};

export type CreatePurchaseOrderInput = {
  expectedDate?: InputMaybe<Scalars['String']['input']>;
  items: Array<PurchaseOrderItemInput>;
  notes?: InputMaybe<Scalars['String']['input']>;
  supplierId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateShopPartInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  makeId?: InputMaybe<Scalars['String']['input']>;
  modelId?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['ID']['input'];
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateShopServiceInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  estimatedHours?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  serviceTypeId: Scalars['ID']['input'];
  system?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['ID']['input'];
};

export type CreateShopToolInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['ID']['input'];
};

export type CreateStaffAssignmentInput = {
  appointmentId: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
  staffId: Scalars['ID']['input'];
  staffName: Scalars['String']['input'];
  tenantId: Scalars['ID']['input'];
};

export type CreateStaffInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  assignedVehicleId?: InputMaybe<Scalars['ID']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emergencyContact?: InputMaybe<Scalars['String']['input']>;
  emergencyPhone?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['String']['input']>;
  licenseClass?: InputMaybe<Scalars['String']['input']>;
  licenseExpiry?: InputMaybe<Scalars['String']['input']>;
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['ID']['input'];
};

export type CreateSupplierInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  contactPerson?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  leadTimeDays?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  paymentTerms?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTenantInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: TenantType;
};

export type CreateVehicleInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  currentMileage?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  engineType?: InputMaybe<Scalars['String']['input']>;
  fuelType?: InputMaybe<Scalars['String']['input']>;
  licensePlate?: InputMaybe<Scalars['String']['input']>;
  make: Scalars['String']['input'];
  model: Scalars['String']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  ownerId: Scalars['ID']['input'];
  purchaseDate?: InputMaybe<Scalars['String']['input']>;
  purchasePrice?: InputMaybe<Scalars['Float']['input']>;
  repairStatus?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tenantId: Scalars['ID']['input'];
  transmission?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastVisit?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  totalSpent: Scalars['Float']['output'];
  totalVehicles: Scalars['Int']['output'];
  totalVisits: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  zip?: Maybe<Scalars['String']['output']>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  items: Array<Customer>;
  total: Scalars['Int']['output'];
};

export type ExpenseSummary = {
  __typename?: 'ExpenseSummary';
  grandTotal: Scalars['Float']['output'];
  monthlyAverage: Scalars['Float']['output'];
  totalFuel: Scalars['Float']['output'];
  totalInsurance: Scalars['Float']['output'];
  totalMaintenance: Scalars['Float']['output'];
  totalOther: Scalars['Float']['output'];
  totalRepairs: Scalars['Float']['output'];
};

export type InventoryCategory = {
  __typename?: 'InventoryCategory';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  tenantId: Scalars['ID']['output'];
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  barcode?: Maybe<Scalars['String']['output']>;
  brand?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['ID']['output']>;
  costPrice?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  quantityAvailable: Scalars['Int']['output'];
  quantityOnHand: Scalars['Int']['output'];
  quantityReserved: Scalars['Int']['output'];
  reorderPoint: Scalars['Int']['output'];
  reorderQuantity: Scalars['Int']['output'];
  sku: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type InventoryItemConnection = {
  __typename?: 'InventoryItemConnection';
  items: Array<InventoryItem>;
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InviteUserInput = {
  email: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LookupPart = {
  __typename?: 'LookupPart';
  category?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addDocument: VehicleDocument;
  addExpense: VehicleExpense;
  addMaintenance: VehicleMaintenance;
  addPartBatch: PartBatch;
  adjustStock: InventoryItem;
  completeStaffAssignment: StaffAssignment;
  createAppointment: Appointment;
  createCustomer: Customer;
  createInventoryItem: InventoryItem;
  createPurchaseOrder: PurchaseOrder;
  createShopPart: ShopPart;
  createShopService: ShopService;
  createShopTool: ShopTool;
  createStaff: Staff;
  createStaffAssignment: StaffAssignment;
  createSupplier: Supplier;
  createTenant: Tenant;
  createVehicle: Vehicle;
  deleteAppointment: Scalars['Boolean']['output'];
  deleteCustomer: Scalars['Boolean']['output'];
  deletePartBatch: Scalars['Boolean']['output'];
  deleteShopPart: Scalars['Boolean']['output'];
  deleteShopService: Scalars['Boolean']['output'];
  deleteShopTool: Scalars['Boolean']['output'];
  deleteStaff: Scalars['Boolean']['output'];
  deleteStaffAssignment: Scalars['Boolean']['output'];
  deleteVehicle: Scalars['Boolean']['output'];
  forgotPassword: Scalars['Boolean']['output'];
  inviteUser: Scalars['Boolean']['output'];
  logMileage: Vehicle;
  login: AuthResponse;
  reassignStaffAssignment: StaffAssignment;
  receivePurchaseOrder: PurchaseOrder;
  refreshToken: AuthResponse;
  register: AuthResponse;
  resetPassword: Scalars['Boolean']['output'];
  startStaffAssignment: StaffAssignment;
  switchBranch: UserContext;
  updateAppointment: Appointment;
  updateAppointmentStatus: Appointment;
  updateCustomer: Customer;
  updateInventoryItem: InventoryItem;
  updatePartBatch: PartBatch;
  updateProfile: UserProfile;
  updateShopPart: ShopPart;
  updateShopTool: ShopTool;
  updateStaff: Staff;
  updateStaffAssignment: StaffAssignment;
  updateTenant: Tenant;
  updateTenantSettings: TenantSettings;
  updateVehicle: Vehicle;
};


export type MutationAddDocumentArgs = {
  input: AddDocumentInput;
};


export type MutationAddExpenseArgs = {
  input: AddExpenseInput;
};


export type MutationAddMaintenanceArgs = {
  input: AddMaintenanceInput;
};


export type MutationAddPartBatchArgs = {
  input: CreatePartBatchInput;
};


export type MutationAdjustStockArgs = {
  itemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};


export type MutationCompleteStaffAssignmentArgs = {
  id: Scalars['ID']['input'];
  totalMinutes: Scalars['Int']['input'];
};


export type MutationCreateAppointmentArgs = {
  input: CreateAppointmentInput;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
};


export type MutationCreateInventoryItemArgs = {
  input: CreateInventoryItemInput;
};


export type MutationCreatePurchaseOrderArgs = {
  input: CreatePurchaseOrderInput;
};


export type MutationCreateShopPartArgs = {
  input: CreateShopPartInput;
};


export type MutationCreateShopServiceArgs = {
  input: CreateShopServiceInput;
};


export type MutationCreateShopToolArgs = {
  input: CreateShopToolInput;
};


export type MutationCreateStaffArgs = {
  input: CreateStaffInput;
};


export type MutationCreateStaffAssignmentArgs = {
  input: CreateStaffAssignmentInput;
};


export type MutationCreateSupplierArgs = {
  input: CreateSupplierInput;
};


export type MutationCreateTenantArgs = {
  input: CreateTenantInput;
};


export type MutationCreateVehicleArgs = {
  input: CreateVehicleInput;
};


export type MutationDeleteAppointmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePartBatchArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShopPartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShopServiceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShopToolArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStaffArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteStaffAssignmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVehicleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationInviteUserArgs = {
  input: InviteUserInput;
};


export type MutationLogMileageArgs = {
  mileage: Scalars['Int']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  vehicleId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationReassignStaffAssignmentArgs = {
  id: Scalars['ID']['input'];
  targetAppointmentId: Scalars['ID']['input'];
};


export type MutationReceivePurchaseOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationStartStaffAssignmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSwitchBranchArgs = {
  tenantId: Scalars['ID']['input'];
};


export type MutationUpdateAppointmentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAppointmentInput;
};


export type MutationUpdateAppointmentStatusArgs = {
  id: Scalars['ID']['input'];
  status: Scalars['String']['input'];
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCustomerInput;
};


export type MutationUpdateInventoryItemArgs = {
  id: Scalars['ID']['input'];
  input: UpdateInventoryItemInput;
};


export type MutationUpdatePartBatchArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePartBatchInput;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateShopPartArgs = {
  id: Scalars['ID']['input'];
  input: UpdateShopPartInput;
};


export type MutationUpdateShopToolArgs = {
  id: Scalars['ID']['input'];
  input: UpdateShopToolInput;
};


export type MutationUpdateStaffArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStaffInput;
};


export type MutationUpdateStaffAssignmentArgs = {
  id: Scalars['ID']['input'];
  input: UpdateStaffAssignmentInput;
};


export type MutationUpdateTenantArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTenantInput;
};


export type MutationUpdateTenantSettingsArgs = {
  input: TenantSettingsInput;
};


export type MutationUpdateVehicleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateVehicleInput;
};

export type PartBatch = {
  __typename?: 'PartBatch';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  partId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  unitCost: Scalars['Float']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Permission = {
  __typename?: 'Permission';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  module: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PurchaseOrder = {
  __typename?: 'PurchaseOrder';
  expectedDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items?: Maybe<Array<PurchaseOrderItem>>;
  notes?: Maybe<Scalars['String']['output']>;
  orderNumber: Scalars['String']['output'];
  receivedDate?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  supplierId?: Maybe<Scalars['ID']['output']>;
  taxAmount?: Maybe<Scalars['Float']['output']>;
  tenantId: Scalars['ID']['output'];
  totalAmount?: Maybe<Scalars['Float']['output']>;
};

export type PurchaseOrderConnection = {
  __typename?: 'PurchaseOrderConnection';
  items: Array<PurchaseOrder>;
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PurchaseOrderItem = {
  __typename?: 'PurchaseOrderItem';
  id: Scalars['ID']['output'];
  itemId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  quantityReceived: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type PurchaseOrderItemInput = {
  itemId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
  unitPrice: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  appointment?: Maybe<Appointment>;
  appointments: AppointmentConnection;
  customer?: Maybe<Customer>;
  customers: CustomerConnection;
  expenseSummary: ExpenseSummary;
  inventoryCategories: Array<InventoryCategory>;
  inventoryItem?: Maybe<InventoryItem>;
  inventoryItems: InventoryItemConnection;
  lowStockItems: Array<InventoryItem>;
  maintenanceHistory: Array<VehicleMaintenance>;
  me?: Maybe<User>;
  myBranches: Array<BranchInfo>;
  myContext: UserContext;
  myProfile?: Maybe<UserProfile>;
  myTenant?: Maybe<Tenant>;
  partNames: Array<LookupPart>;
  permissions: Array<Permission>;
  purchaseOrder?: Maybe<PurchaseOrder>;
  purchaseOrders: PurchaseOrderConnection;
  roles: Array<Role>;
  serviceType?: Maybe<ServiceType>;
  serviceTypes: Array<ServiceType>;
  shopParts: ShopPartConnection;
  shopServices: ShopServiceConnection;
  shopTools: ShopToolConnection;
  staff?: Maybe<Staff>;
  staffActiveAssignments: Array<StaffAssignment>;
  staffAssignments: Array<StaffAssignment>;
  staffList: StaffConnection;
  storageLocations: Array<StorageLocation>;
  supplier?: Maybe<Supplier>;
  suppliers: Array<Supplier>;
  tenant?: Maybe<Tenant>;
  tenantSettings?: Maybe<TenantSettings>;
  user?: Maybe<User>;
  users: UserConnection;
  vehicle?: Maybe<Vehicle>;
  vehicleDocuments: Array<VehicleDocument>;
  vehicleExpenses: Array<VehicleExpense>;
  vehicleMaintenance: Array<VehicleMaintenance>;
  vehicleMake?: Maybe<VehicleMake>;
  vehicleMakes: Array<VehicleMake>;
  vehicleModel?: Maybe<VehicleModel>;
  vehicleModels: Array<VehicleModel>;
  vehicles: VehicleConnection;
};


export type QueryAppointmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAppointmentsArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomersArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryExpenseSummaryArgs = {
  vehicleId: Scalars['ID']['input'];
};


export type QueryInventoryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInventoryItemsArgs = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMaintenanceHistoryArgs = {
  vehicleId: Scalars['ID']['input'];
};


export type QueryPurchaseOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPurchaseOrdersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServiceTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryServiceTypesArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShopPartsArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShopServicesArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryShopToolsArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStaffArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStaffActiveAssignmentsArgs = {
  staffId: Scalars['ID']['input'];
};


export type QueryStaffAssignmentsArgs = {
  appointmentId: Scalars['ID']['input'];
};


export type QueryStaffListArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySupplierArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySuppliersArgs = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTenantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  tenantId: Scalars['ID']['input'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleDocumentsArgs = {
  vehicleId: Scalars['ID']['input'];
};


export type QueryVehicleExpensesArgs = {
  vehicleId: Scalars['ID']['input'];
};


export type QueryVehicleMaintenanceArgs = {
  vehicleId: Scalars['ID']['input'];
};


export type QueryVehicleMakeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleMakesArgs = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVehicleModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleModelsArgs = {
  makeId: Scalars['ID']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  vehicleType?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVehiclesArgs = {
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
};

export type ServiceType = {
  __typename?: 'ServiceType';
  category: Scalars['String']['output'];
  code: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  estimatedHours?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isGlobal: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  system: Scalars['String']['output'];
};

export type ShopPart = {
  __typename?: 'ShopPart';
  batches: Array<PartBatch>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  locationId?: Maybe<Scalars['String']['output']>;
  makeId?: Maybe<Scalars['String']['output']>;
  modelId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  tenantId: Scalars['ID']['output'];
  unitPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['String']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type ShopPartConnection = {
  __typename?: 'ShopPartConnection';
  items: Array<ShopPart>;
  total: Scalars['Int']['output'];
};

export type ShopService = {
  __typename?: 'ShopService';
  category?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  estimatedHours?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  serviceTypeId: Scalars['ID']['output'];
  system?: Maybe<Scalars['String']['output']>;
  tenantId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ShopServiceConnection = {
  __typename?: 'ShopServiceConnection';
  items: Array<ShopService>;
  total: Scalars['Int']['output'];
};

export type ShopTool = {
  __typename?: 'ShopTool';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ShopToolConnection = {
  __typename?: 'ShopToolConnection';
  items: Array<ShopTool>;
  total: Scalars['Int']['output'];
};

export type Staff = {
  __typename?: 'Staff';
  address?: Maybe<Scalars['String']['output']>;
  assignedVehicleId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['String']['output'];
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emergencyContact?: Maybe<Scalars['String']['output']>;
  emergencyPhone?: Maybe<Scalars['String']['output']>;
  hireDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  licenseClass?: Maybe<Scalars['String']['output']>;
  licenseExpiry?: Maybe<Scalars['String']['output']>;
  licenseNumber?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type StaffAssignment = {
  __typename?: 'StaffAssignment';
  appointmentId: Scalars['ID']['output'];
  assignedAt: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  staffId: Scalars['ID']['output'];
  staffName: Scalars['String']['output'];
  startedAt?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  totalMinutes?: Maybe<Scalars['Int']['output']>;
};

export type StaffConnection = {
  __typename?: 'StaffConnection';
  items: Array<Staff>;
  total: Scalars['Int']['output'];
};

export type StorageLocation = {
  __typename?: 'StorageLocation';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Supplier = {
  __typename?: 'Supplier';
  address?: Maybe<Scalars['String']['output']>;
  contactPerson?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  leadTimeDays?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  paymentTerms?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  tenantId: Scalars['ID']['output'];
};

export type Tenant = {
  __typename?: 'Tenant';
  createdAt: Scalars['String']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  settings?: Maybe<Scalars['JSON']['output']>;
  status: TenantStatus;
  type: TenantType;
  updatedAt: Scalars['String']['output'];
};

export type TenantSettings = {
  __typename?: 'TenantSettings';
  branding?: Maybe<Scalars['JSON']['output']>;
  businessHours?: Maybe<Scalars['JSON']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  notificationConfig?: Maybe<Scalars['JSON']['output']>;
  paymentConfig?: Maybe<Scalars['JSON']['output']>;
  tenantId: Scalars['ID']['output'];
};

export type TenantSettingsInput = {
  branding?: InputMaybe<Scalars['JSON']['input']>;
  businessHours?: InputMaybe<Scalars['JSON']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  notificationConfig?: InputMaybe<Scalars['JSON']['input']>;
  paymentConfig?: InputMaybe<Scalars['JSON']['input']>;
};

export enum TenantStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Suspended = 'SUSPENDED',
  Trial = 'TRIAL'
}

export enum TenantType {
  AutoOwner = 'AUTO_OWNER',
  PartsStore = 'PARTS_STORE',
  Platform = 'PLATFORM',
  RepairShop = 'REPAIR_SHOP'
}

export type UpdateAppointmentInput = {
  assignedMechanic?: InputMaybe<Scalars['String']['input']>;
  bay?: InputMaybe<Scalars['String']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerPhone?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vehicleMake?: InputMaybe<Scalars['String']['input']>;
  vehicleModel?: InputMaybe<Scalars['String']['input']>;
  vehiclePlate?: InputMaybe<Scalars['String']['input']>;
  vehicleYear?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCustomerInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryItemInput = {
  costPrice?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reorderPoint?: InputMaybe<Scalars['Int']['input']>;
  reorderQuantity?: InputMaybe<Scalars['Int']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdatePartBatchInput = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
  unitCost?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateProfileInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  notificationPrefs?: InputMaybe<Scalars['JSON']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShopPartInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['String']['input']>;
  makeId?: InputMaybe<Scalars['String']['input']>;
  modelId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['Float']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateShopToolInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStaffAssignmentInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  totalMinutes?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateStaffInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  assignedVehicleId?: InputMaybe<Scalars['ID']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emergencyContact?: InputMaybe<Scalars['String']['input']>;
  emergencyPhone?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['String']['input']>;
  licenseClass?: InputMaybe<Scalars['String']['input']>;
  licenseExpiry?: InputMaybe<Scalars['String']['input']>;
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTenantInput = {
  domain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateVehicleInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  currentMileage?: InputMaybe<Scalars['Int']['input']>;
  licensePlate?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  repairStatus?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLoginAt?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  items: Array<User>;
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UserContext = {
  __typename?: 'UserContext';
  activeBranch?: Maybe<BranchInfo>;
  branches: Array<BranchInfo>;
  email: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  locale: Scalars['String']['output'];
  notificationPrefs: Scalars['JSON']['output'];
  timezone: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  color?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  currentMileage: Scalars['Int']['output'];
  customerId?: Maybe<Scalars['ID']['output']>;
  engineType?: Maybe<Scalars['String']['output']>;
  fuelType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  licensePlate?: Maybe<Scalars['String']['output']>;
  make: Scalars['String']['output'];
  model: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  ownerId: Scalars['ID']['output'];
  purchaseDate?: Maybe<Scalars['String']['output']>;
  purchasePrice?: Maybe<Scalars['Float']['output']>;
  repairStatus: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tenantId: Scalars['ID']['output'];
  transmission?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type VehicleConnection = {
  __typename?: 'VehicleConnection';
  items: Array<Vehicle>;
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VehicleDocument = {
  __typename?: 'VehicleDocument';
  docType: Scalars['String']['output'];
  expiryDate?: Maybe<Scalars['String']['output']>;
  fileUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  vehicleId: Scalars['ID']['output'];
};

export type VehicleExpense = {
  __typename?: 'VehicleExpense';
  amount: Scalars['Float']['output'];
  category: Scalars['String']['output'];
  date: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  receiptUrl?: Maybe<Scalars['String']['output']>;
  recurring: Scalars['Boolean']['output'];
  vehicleId: Scalars['ID']['output'];
};

export type VehicleMaintenance = {
  __typename?: 'VehicleMaintenance';
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mileageAtService?: Maybe<Scalars['Int']['output']>;
  nextDueDate?: Maybe<Scalars['String']['output']>;
  nextDueMileage?: Maybe<Scalars['Int']['output']>;
  providerName?: Maybe<Scalars['String']['output']>;
  serviceDate: Scalars['String']['output'];
  serviceType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  vehicleId: Scalars['ID']['output'];
};

export type VehicleMake = {
  __typename?: 'VehicleMake';
  country?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  foundedYear?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  sortOrder: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
};

export type VehicleModel = {
  __typename?: 'VehicleModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  makeId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  vehicleType?: Maybe<Scalars['String']['output']>;
  yearEnd?: Maybe<Scalars['Int']['output']>;
  yearStart?: Maybe<Scalars['Int']['output']>;
};
