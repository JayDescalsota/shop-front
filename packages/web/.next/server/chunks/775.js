"use strict";exports.id=775,exports.ids=[775],exports.modules={8403:(a,b,c)=>{c.d(b,{$L:()=>K,DF:()=>Q,G9:()=>o,Iz:()=>aa,Jb:()=>q,Ko:()=>y,QU:()=>E,R:()=>S,T5:()=>W,TJ:()=>i,WX:()=>U,YX:()=>I,dU:()=>Y,ih:()=>u,m:()=>M,oH:()=>C,od:()=>G,ou:()=>k,pH:()=>A,q3:()=>$,qG:()=>m,tV:()=>s,wV:()=>O,z0:()=>w});var d=c(97518),e=c(37236),f=c(47869);let g={},h=(0,d.J1)`
    query VehicleMakes {
  vehicleMakes {
    id
    name
    slug
  }
}
    `;function i(a){let b={...g,...a};return e.IT(h,b)}let j=(0,d.J1)`
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
    `;function k(a){let b={...g,...a};return e.IT(j,b)}let l=(0,d.J1)`
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
    `;function m(a){let b={...g,...a};return e.IT(l,b)}let n=(0,d.J1)`
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
    `;function o(a){let b={...g,...a};return e.IT(n,b)}let p=(0,d.J1)`
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
    `;function q(a){let b={...g,...a};return e.IT(p,b)}let r=(0,d.J1)`
    mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    name
    email
    phone
    status
  }
}
    `;function s(a){let b={...g,...a};return f.n(r,b)}let t=(0,d.J1)`
    mutation UpdateCustomer($id: ID!, $input: UpdateCustomerInput!) {
  updateCustomer(id: $id, input: $input) {
    id
    name
    email
    phone
    status
  }
}
    `;function u(a){let b={...g,...a};return f.n(t,b)}(0,d.J1)`
    mutation DeleteCustomer($id: ID!) {
  deleteCustomer(id: $id)
}
    `;let v=(0,d.J1)`
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
    `;function w(a){let b={...g,...a};return e.IT(v,b)}let x=(0,d.J1)`
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
    `;function y(a){let b={...g,...a};return e.IT(x,b)}let z=(0,d.J1)`
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
    `;function A(a){let b={...g,...a};return f.n(z,b)}let B=(0,d.J1)`
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
    `;function C(a){let b={...g,...a};return f.n(B,b)}(0,d.J1)`
    mutation DeleteVehicle($id: ID!) {
  deleteVehicle(id: $id)
}
    `;let D=(0,d.J1)`
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
    `;function E(a){let b={...g,...a};return f.n(D,b)}let F=(0,d.J1)`
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
    `;function G(a){let b={...g,...a};return e.IT(F,b)}let H=(0,d.J1)`
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
    `;function I(a){let b={...g,...a};return f.n(H,b)}(0,d.J1)`
    mutation UpdateStaffAssignment($id: ID!, $input: UpdateStaffAssignmentInput!) {
  updateStaffAssignment(id: $id, input: $input) {
    id
    status
    totalMinutes
  }
}
    `;let J=(0,d.J1)`
    mutation DeleteStaffAssignment($id: ID!) {
  deleteStaffAssignment(id: $id)
}
    `;function K(a){let b={...g,...a};return f.n(J,b)}let L=(0,d.J1)`
    mutation ReassignStaffAssignment($id: ID!, $targetAppointmentId: ID!) {
  reassignStaffAssignment(id: $id, targetAppointmentId: $targetAppointmentId) {
    id
    appointmentId
    status
  }
}
    `;function M(a){let b={...g,...a};return f.n(L,b)}let N=(0,d.J1)`
    mutation StartStaffAssignment($id: ID!) {
  startStaffAssignment(id: $id) {
    id
    status
    startedAt
  }
}
    `;function O(a){let b={...g,...a};return f.n(N,b)}let P=(0,d.J1)`
    mutation CompleteStaffAssignment($id: ID!, $totalMinutes: Int!) {
  completeStaffAssignment(id: $id, totalMinutes: $totalMinutes) {
    id
    status
    completedAt
    totalMinutes
  }
}
    `;function Q(a){let b={...g,...a};return f.n(P,b)}let R=(0,d.J1)`
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
    `;function S(a){let b={...g,...a};return f.n(R,b)}let T=(0,d.J1)`
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
    `;function U(a){let b={...g,...a};return e.IT(T,b)}let V=(0,d.J1)`
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
    `;function W(a){let b={...g,...a};return e.IT(V,b)}let X=(0,d.J1)`
    mutation CreateStaff($input: CreateStaffInput!) {
  createStaff(input: $input) {
    id
    name
    status
    createdAt
  }
}
    `;function Y(a){let b={...g,...a};return f.n(X,b)}let Z=(0,d.J1)`
    mutation UpdateStaff($id: ID!, $input: UpdateStaffInput!) {
  updateStaff(id: $id, input: $input) {
    id
    name
    status
    updatedAt
  }
}
    `;function $(a){let b={...g,...a};return f.n(Z,b)}let _=(0,d.J1)`
    mutation DeleteStaff($id: ID!) {
  deleteStaff(id: $id)
}
    `;function aa(a){let b={...g,...a};return f.n(_,b)}},51877:(a,b,c)=>{c.d(b,{default:()=>f});var d=c(78157);let e={s:{maxWidth:384,width:"100%",margin:"0 16px"},m:{maxWidth:512,width:"100%",margin:"0 16px"},l:{maxWidth:672,width:"100%",margin:"0 16px"},xl:{width:"80%"}};function f({open:a,onClose:b,title:c,size:f="m",children:g}){return a?(0,d.jsxs)("div",{style:{position:"fixed",inset:0,zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,d.jsx)("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.5)"},onClick:b}),(0,d.jsxs)("div",{style:e[({xs:"s",sm:"s",md:"m",lg:"l",xl:"xl"})[f]||f],className:"relative bg-card border border-border rounded-xl max-h-[90vh] overflow-y-auto shadow-2xl",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border",children:[(0,d.jsx)("h3",{className:"text-lg font-semibold",children:c}),(0,d.jsx)("button",{onClick:b,className:"text-muted hover:text-primary cursor-pointer text-xl leading-none",children:"\xd7"})]}),(0,d.jsx)("div",{className:"p-6",children:g})]})]}):null}},62973:(a,b,c)=>{c.d(b,{$n:()=>f,Zp:()=>g,bQ:()=>h,Fx:()=>i,D0:()=>k,nV:()=>m,IY:()=>n,aF:()=>o.default,zY:()=>p,Wh:()=>r});var d=c(78157);let e={primary:"bg-accent text-cyan-900 hover:bg-accent-dark",outline:"bg-transparent border border-border text-primary hover:border-primary",ghost:"bg-transparent text-muted hover:bg-surface hover:text-primary"};function f({variant:a="primary",className:b="",children:c,...f}){return(0,d.jsx)("button",{className:`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition ${e[a]} ${b}`,style:{fontFamily:"var(--font-inter)"},...f,children:c})}function g({title:a,action:b,children:c}){return(0,d.jsxs)("div",{className:"bg-card border border-border rounded-xl overflow-hidden mb-6",children:[(0,d.jsxs)("div",{className:"px-6 py-4 border-b border-border flex items-center justify-between",children:[(0,d.jsx)("h3",{className:"text-base font-semibold",children:a}),b]}),(0,d.jsx)("div",{className:"p-6",children:c})]})}function h({columns:a,data:b,keyExtractor:c}){return 0===b.length?(0,d.jsx)("div",{className:"text-center py-16 text-muted text-sm",style:{fontFamily:"var(--font-open-sans)"},children:(0,d.jsx)("p",{children:"No data available"})}):(0,d.jsxs)("table",{className:"w-full border-collapse",children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:a.map(a=>(0,d.jsx)("th",{className:"text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border",style:{fontFamily:"var(--font-open-sans)"},children:a.header},a.key))})}),(0,d.jsx)("tbody",{children:b.map(b=>(0,d.jsx)("tr",{children:a.map(a=>(0,d.jsx)("td",{className:"px-4 py-3.5 text-sm border-b border-border text-primary last-of-type:border-b-0",children:a.render?a.render(b):b[a.key]},a.key))},c(b)))})]})}function i({message:a}){return a?(0,d.jsx)("div",{className:"bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg",children:a}):null}var j=c(31768);function k({label:a,required:b,children:c}){return(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"text-xs font-semibold text-muted block mb-1",children:[a,b?" *":""]}),c]})}let l="w-full px-3 py-2 rounded-lg border border-border bg-surface text-sm text-primary placeholder:text-muted outline-none focus:border-accent transition";function m({legend:a,children:b}){return(0,d.jsxs)("fieldset",{className:"border border-border rounded-lg p-4",children:[(0,d.jsx)("legend",{className:"text-xs font-semibold text-muted px-2",children:a}),b]})}function n({onCancel:a,submitting:b=!1,submitLabel:c="Save"}){return(0,d.jsxs)("div",{className:"flex justify-end gap-3 pt-2",children:[(0,d.jsx)(f,{variant:"outline",type:"button",onClick:a,children:"Cancel"}),(0,d.jsx)(f,{type:"submit",disabled:b,children:b?"Saving...":c})]})}k.Input=(0,j.forwardRef)(({className:a="",...b},c)=>(0,d.jsx)("input",{ref:c,className:`${l} ${a}`,...b})),k.Input.displayName="Field.Input",k.Textarea=(0,j.forwardRef)(({className:a="",...b},c)=>(0,d.jsx)("textarea",{ref:c,className:`${l} resize-none ${a}`,...b})),k.Textarea.displayName="Field.Textarea";var o=c(51877);function p({title:a,description:b}){return(0,d.jsxs)("div",{className:"mb-8",children:[(0,d.jsx)("h2",{className:"text-2xl font-bold",children:a}),b&&(0,d.jsx)("p",{className:"text-sm text-muted mt-1",style:{fontFamily:"var(--font-open-sans)"},children:b})]})}let q={completed:"status-completed",paid:"status-paid",pending:"status-pending","in progress":"status-in-progress",cancelled:"status-cancelled",overdue:"status-overdue"};function r({status:a}){let b=q[a.toLowerCase()]||"bg-gray-100 text-gray-700";return(0,d.jsx)("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${b}`,children:a})}}};