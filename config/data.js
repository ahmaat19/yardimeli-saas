const roles = [
  {
    name: 'Super Admin',
    description:
      'Super Admins can access and manage all features and settings.',
    type: 'SUPER_ADMIN',
  },
  {
    name: 'Author',
    description: 'Authors can manage the content they have created.',
    type: 'AUTHOR',
  },
  {
    name: 'Editor',
    description:
      'Editors can manage and publish contents including those of other users.',
    type: 'EDITOR',
  },
  {
    name: 'Public',
    description: 'Default role given to unauthenticated user.',
    type: 'PUBLIC',
  },
  {
    name: 'Authenticated',
    description: 'Default role given to authenticated user.',
    type: 'AUTHENTICATED',
  },
  {
    name: 'Human Resource',
    description: 'Default role given to human resource user.',
    type: 'HUMAN_RESOURCE',
  },
  {
    name: 'Pregnancy',
    description: 'Default role given to pregnancy care user.',
    type: 'PREGNANCY',
  },
]

const users = {
  name: 'Ahmed Ibrahim',
  email: 'ahmed@websom.dev',
  password: '123456',
  confirmed: true,
  blocked: false,
}

const profile = {
  phone: '+252615301507',
  address: 'Mogadishu',
  image: 'https://github.com/ahmaat19.png',
  bio: 'Full Stack Developer',
}

const clientPermissions = [
  {
    name: 'Home',
    path: '/',
    menu: 'hidden',
    auth: true,
    description: 'Home page',
  },
  {
    name: 'Users',
    path: '/admin/auth/users',
    menu: 'admin',
    auth: true,
    description: 'Users page',
  },
  {
    name: 'Roles',
    path: '/admin/auth/roles',
    menu: 'admin',
    auth: true,
    description: 'Roles page',
  },
  {
    name: 'Profile',
    path: '/account/profile',
    menu: 'profile',
    auth: true,
    description: 'Profile page',
  },
  {
    name: 'Permissions',
    path: '/admin/auth/permissions',
    menu: 'admin',
    auth: true,
    description: 'Permissions page',
  },
  {
    name: 'Client Permissions',
    path: '/admin/auth/client-permissions',
    menu: 'admin',
    auth: true,
    description: 'Client Permissions page',
  },
  {
    name: 'User Roles',
    path: '/admin/auth/user-roles',
    menu: 'admin',
    auth: true,
    description: 'User Roles page',
  },
  {
    name: 'User Profiles',
    path: '/admin/auth/user-profiles',
    menu: 'admin',
    auth: true,
    description: 'User Profiles page',
  },
  {
    name: 'Department',
    path: '/personnel/departments',
    menu: 'personnel',
    auth: true,
    description: 'Department page',
  },
  {
    name: 'Employee',
    path: '/personnel/employees',
    menu: 'personnel',
    auth: true,
    description: 'Employee page',
  },
  {
    name: 'Position',
    path: '/personnel/departments',
    menu: 'personnel',
    auth: true,
    description: 'Position page',
  },
  {
    name: 'Leave',
    path: '/personnel/leaves',
    menu: 'personnel',
    auth: true,
    description: 'Leave page',
  },
  {
    name: 'Resign',
    path: '/personnel/resigns',
    menu: 'personnel',
    auth: true,
    description: 'Resign page',
  },
  {
    name: 'Resource',
    path: '/personnel/resources',
    menu: 'personnel',
    auth: true,
    description: 'Resource page',
  },
  {
    name: 'Write Up',
    path: '/personnel/writeups',
    menu: 'personnel',
    auth: true,
    description: 'Write Up page',
  },
  {
    name: 'HR Dashboard',
    path: '/dashboard/hr',
    menu: 'hidden',
    auth: true,
    description: 'Human resource dashboard page',
  },

  // pregnancy care
  {
    name: 'Patients',
    path: '/setting/patients',
    menu: 'setting',
    auth: true,
    description: 'Patient page',
  },
  {
    name: 'Images',
    path: '/setting/images',
    menu: 'setting',
    auth: true,
    description: 'Image page',
  },
  {
    name: 'Lab Tests',
    path: '/setting/lab-tests',
    menu: 'setting',
    auth: true,
    description: 'Lab test page',
  },
  {
    name: 'Vaccinations',
    path: '/setting/vaccinations',
    menu: 'setting',
    auth: true,
    description: 'Vaccination page',
  },

  {
    name: 'Investigations',
    path: '/investigation/investigations',
    menu: 'investigations',
    auth: true,
    description: 'Investigation page',
  },
  {
    name: 'History',
    path: '/investigation/histories',
    menu: 'investigations',
    auth: true,
    description: 'History page',
  },
  {
    name: 'Image Entry',
    path: '/investigation/entry/images',
    menu: 'entries',
    auth: true,
    description: 'Image entry page',
  },
  {
    name: 'Vaccination Entry',
    path: '/investigation/entry/vaccinations',
    menu: 'entries',
    auth: true,
    description: 'Vaccination entry page',
  },
  {
    name: 'Lab Test Entry',
    path: '/investigation/entry/lab-tests',
    menu: 'entries',
    auth: true,
    description: 'Lab Test entry page',
  },
  {
    name: 'Follow Up',
    path: '/follow-up',
    menu: 'normal',
    auth: true,
    description: 'Follow up page',
  },
  {
    name: 'Patient Record Report',
    path: '/report/patient-records',
    menu: 'reports',
    auth: true,
    description: 'Patient Record Report page',
  },
  {
    name: 'Pregnancy Care Dashboard',
    path: '/dashboard/care',
    menu: 'hidden',
    auth: true,
    description: 'Pregnancy care dashboard page',
  },
]

const permissions = [
  {
    description: 'Get All Users',
    route: '/api/auth/users',
    auth: true,
    name: 'Users',
    method: 'GET',
  },
  {
    description: 'Get User By Id',
    route: '/api/auth/users/:id',
    auth: true,
    name: 'Users',
    method: 'GET',
  },
  {
    description: 'Create User',
    route: '/api/auth/users',
    auth: true,
    name: 'Users',
    method: 'POST',
  },
  {
    description: 'Update User',
    route: '/api/auth/users/:id',
    auth: true,
    name: 'Users',
    method: 'PUT',
  },
  {
    description: 'Delete User',
    route: '/api/auth/users/:id',
    auth: true,
    name: 'Users',
    method: 'DELETE',
  },
  {
    description: 'Login',
    route: '/api/auth/login',
    auth: false,
    name: 'Login',
    method: 'POST',
  },
  {
    description: 'Forgot Password',
    route: '/api/auth/forgot-password',
    auth: false,
    name: 'Forgot Password',
    method: 'POST',
  },
  {
    description: 'Reset Password',
    route: '/api/auth/reset-password',
    auth: false,
    name: 'Reset Password',
    method: 'POST',
  },
  {
    description: 'Get All User Profiles',
    route: '/api/auth/user-profiles',
    auth: true,
    name: 'User Profiles',
    method: 'GET',
  },
  {
    description: 'Get Profile',
    route: '/api/auth/profile',
    auth: true,
    name: 'User Profile',
    method: 'GET',
  },
  {
    description: 'Update Profile',
    route: '/api/auth/profile',
    auth: true,
    name: 'User Profile',
    method: 'POST',
  },
  {
    description: 'Get All Roles',
    route: '/api/auth/roles',
    auth: true,
    name: 'Roles',
    method: 'GET',
  },
  {
    description: 'Create Role',
    route: '/api/auth/roles',
    auth: true,
    name: 'Roles',
    method: 'POST',
  },
  {
    description: 'Update Role',
    route: '/api/auth/roles/:id',
    auth: true,
    name: 'Roles',
    method: 'PUT',
  },
  {
    description: 'Delete Role',
    route: '/api/auth/roles/:id',
    auth: true,
    name: 'Roles',
    method: 'DELETE',
  },
  {
    description: 'Get All Permissions',
    route: '/api/auth/permissions',
    auth: true,
    name: 'Permissions',
    method: 'GET',
  },
  {
    description: 'Create Permission',
    route: '/api/auth/permissions',
    auth: true,
    name: 'Permissions',
    method: 'POST',
  },
  {
    description: 'Update Permission',
    route: '/api/auth/permissions/:id',
    auth: true,
    name: 'Permissions',
    method: 'PUT',
  },
  {
    description: 'Delete Permission',
    route: '/api/auth/permissions/:id',
    auth: true,
    name: 'Permissions',
    method: 'DELETE',
  },
  {
    description: 'Get All User Roles',
    route: '/api/auth/user-roles',
    auth: true,
    name: 'User Roles',
    method: 'GET',
  },
  {
    description: 'Get User Roles By Id With POST',
    route: '/api/auth/user-roles/:id',
    auth: false,
    name: 'User Roles',
    method: 'POST',
  },
  {
    description: 'Create User Role',
    route: '/api/auth/user-roles',
    auth: true,
    name: 'User Roles',
    method: 'POST',
  },
  {
    description: 'Update User Role',
    route: '/api/auth/user-roles/:id',
    auth: true,
    name: 'User Roles',
    method: 'PUT',
  },
  {
    description: 'Delete User Role',
    route: '/api/auth/user-roles/:id',
    auth: true,
    name: 'User Roles',
    method: 'DELETE',
  },
  {
    description: 'Get All ClientPermissions',
    route: '/api/auth/client-permissions',
    auth: true,
    name: 'ClientPermissions',
    method: 'GET',
  },
  {
    description: 'Create Permission',
    route: '/api/auth/client-permissions',
    auth: true,
    name: 'ClientPermissions',
    method: 'POST',
  },
  {
    description: 'Update Permission',
    route: '/api/auth/client-permissions/:id',
    auth: true,
    name: 'ClientPermissions',
    method: 'PUT',
  },
  {
    description: 'Delete Permission',
    route: '/api/auth/client-permissions/:id',
    auth: true,
    name: 'ClientPermissions',
    method: 'DELETE',
  },

  // Employee API Endpoints
  {
    description: 'Get Employees',
    route: '/api/personnel/employees',
    auth: true,
    name: 'Employee',
    method: 'GET',
  },
  {
    description: 'Create Employee',
    route: '/api/personnel/employees',
    auth: true,
    name: 'Employee',
    method: 'POST',
  },
  {
    description: 'Update Employee',
    route: '/api/personnel/employees/:id',
    auth: true,
    name: 'Employee',
    method: 'PUT',
  },
  {
    description: 'Delete Employee',
    route: '/api/personnel/employees:id',
    auth: true,
    name: 'Employee',
    method: 'DELETE',
  },

  // Department API Endpoints
  {
    description: 'Get Departments',
    route: '/api/personnel/departments',
    auth: true,
    name: 'Department',
    method: 'GET',
  },
  {
    description: 'Create Department',
    route: '/api/personnel/departments',
    auth: true,
    name: 'Department',
    method: 'POST',
  },
  {
    description: 'Update Department',
    route: '/api/personnel/departments/:id',
    auth: true,
    name: 'Department',
    method: 'PUT',
  },
  {
    description: 'Delete Department',
    route: '/api/personnel/departments:id',
    auth: true,
    name: 'Department',
    method: 'DELETE',
  },

  // Position API Endpoints
  {
    description: 'Get Positions',
    route: '/api/personnel/positions',
    auth: true,
    name: 'Position',
    method: 'GET',
  },
  {
    description: 'Create Position',
    route: '/api/personnel/positions',
    auth: true,
    name: 'Position',
    method: 'POST',
  },
  {
    description: 'Update Position',
    route: '/api/personnel/positions/:id',
    auth: true,
    name: 'Position',
    method: 'PUT',
  },
  {
    description: 'Delete Position',
    route: '/api/personnel/positions:id',
    auth: true,
    name: 'Position',
    method: 'DELETE',
  },

  // Resign API Endpoints
  {
    description: 'Get Resigns',
    route: '/api/personnel/resigns',
    auth: true,
    name: 'Resign',
    method: 'GET',
  },
  {
    description: 'Create Resign',
    route: '/api/personnel/resigns',
    auth: true,
    name: 'Resign',
    method: 'POST',
  },
  {
    description: 'Update Resign',
    route: '/api/personnel/resigns/:id',
    auth: true,
    name: 'Resign',
    method: 'PUT',
  },
  {
    description: 'Delete Resign',
    route: '/api/personnel/resigns:id',
    auth: true,
    name: 'Resign',
    method: 'DELETE',
  },

  // Leave API Endpoints
  {
    description: 'Get Leaves',
    route: '/api/personnel/leaves',
    auth: true,
    name: 'Leave',
    method: 'GET',
  },
  {
    description: 'Create Leave',
    route: '/api/personnel/leaves',
    auth: true,
    name: 'Leave',
    method: 'POST',
  },
  {
    description: 'Update Leave',
    route: '/api/personnel/leaves/:id',
    auth: true,
    name: 'Leave',
    method: 'PUT',
  },
  {
    description: 'Delete Leave',
    route: '/api/personnel/leaves:id',
    auth: true,
    name: 'Leave',
    method: 'DELETE',
  },
  // Resource API Endpoints
  {
    description: 'Get Resources',
    route: '/api/personnel/resources',
    auth: true,
    name: 'Resource',
    method: 'GET',
  },
  {
    description: 'Create Resource',
    route: '/api/personnel/resources',
    auth: true,
    name: 'Resource',
    method: 'POST',
  },
  {
    description: 'Update Resource',
    route: '/api/personnel/resources/:id',
    auth: true,
    name: 'Resource',
    method: 'PUT',
  },
  {
    description: 'Delete Resource',
    route: '/api/personnel/resources:id',
    auth: true,
    name: 'Resource',
    method: 'DELETE',
  },

  // Write Up API Endpoints
  {
    description: 'Get Write Ups',
    route: '/api/personnel/writeups',
    auth: true,
    name: 'Write Up',
    method: 'GET',
  },
  {
    description: 'Create Write Up',
    route: '/api/personnel/writeups',
    auth: true,
    name: 'Write Up',
    method: 'POST',
  },
  {
    description: 'Update Write Up',
    route: '/api/personnel/writeups/:id',
    auth: true,
    name: 'Write Up',
    method: 'PUT',
  },
  {
    description: 'Delete Write Up',
    route: '/api/personnel/writeups:id',
    auth: true,
    name: 'Write Up',
    method: 'DELETE',
  },

  // Pregnancy care endpoints
  {
    description: 'Get All Patients',
    route: '/api/setting/patients',
    auth: true,
    name: 'Patient',
    method: 'GET',
  },
  {
    description: 'Create Patient',
    route: '/api/setting/patients',
    auth: true,
    name: 'Patient',
    method: 'POST',
  },
  {
    description: 'Update Patient',
    route: '/api/setting/patients/:id',
    auth: true,
    name: 'Patient',
    method: 'PUT',
  },
  {
    description: 'Delete Patient',
    route: '/api/setting/patients/:id',
    auth: true,
    name: 'Patient',
    method: 'DELETE',
  },

  {
    description: 'Get All Images',
    route: '/api/setting/images',
    auth: true,
    name: 'Image',
    method: 'GET',
  },
  {
    description: 'Create Image',
    route: '/api/setting/images',
    auth: true,
    name: 'Image',
    method: 'POST',
  },
  {
    description: 'Update Image',
    route: '/api/setting/images/:id',
    auth: true,
    name: 'Image',
    method: 'PUT',
  },
  {
    description: 'Delete Image',
    route: '/api/setting/images/:id',
    auth: true,
    name: 'Image',
    method: 'DELETE',
  },

  {
    description: 'Get All Lab Tests',
    route: '/api/setting/lab-tests',
    auth: true,
    name: 'Lab Test',
    method: 'GET',
  },
  {
    description: 'Create Lab Test',
    route: '/api/setting/lab-tests',
    auth: true,
    name: 'Lab Test',
    method: 'POST',
  },
  {
    description: 'Update Lab Test',
    route: '/api/setting/lab-tests/:id',
    auth: true,
    name: 'Lab Test',
    method: 'PUT',
  },
  {
    description: 'Delete Lab Test',
    route: '/api/setting/lab-tests/:id',
    auth: true,
    name: 'Lab Test',
    method: 'DELETE',
  },

  {
    description: 'Get All Vaccinations',
    route: '/api/setting/vaccinations',
    auth: true,
    name: 'Vaccination',
    method: 'GET',
  },
  {
    description: 'Create Vaccination',
    route: '/api/setting/vaccinations',
    auth: true,
    name: 'Vaccination',
    method: 'POST',
  },
  {
    description: 'Update Vaccination',
    route: '/api/setting/vaccinations/:id',
    auth: true,
    name: 'Vaccination',
    method: 'PUT',
  },
  {
    description: 'Delete Vaccination',
    route: '/api/setting/vaccinations/:id',
    auth: true,
    name: 'Vaccination',
    method: 'DELETE',
  },

  {
    description: 'Get All Histories',
    route: '/api/investigation/histories',
    auth: true,
    name: 'History',
    method: 'GET',
  },
  {
    description: 'Create History',
    route: '/api/investigation/histories',
    auth: true,
    name: 'History',
    method: 'POST',
  },
  {
    description: 'Update History',
    route: '/api/investigation/histories/:id',
    auth: true,
    name: 'History',
    method: 'PUT',
  },
  {
    description: 'Delete History',
    route: '/api/investigation/histories/:id',
    auth: true,
    name: 'History',
    method: 'DELETE',
  },

  {
    description: 'Get All Investigations',
    route: '/api/investigation/investigations',
    auth: true,
    name: 'Investigations',
    method: 'GET',
  },
  {
    description: 'Create Investigations',
    route: '/api/investigation/investigations',
    auth: true,
    name: 'Investigations',
    method: 'POST',
  },
  {
    description: 'Delete Investigations',
    route: '/api/investigation/investigations/:id',
    auth: true,
    name: 'Investigations',
    method: 'DELETE',
  },

  {
    description: 'Search Image Investigation',
    route: '/api/investigation/entry/images',
    auth: true,
    name: 'Image Entry Investigations',
    method: 'POST',
  },
  {
    description: 'Update Image Investigation',
    route: '/api/investigation/entry/images/:id',
    auth: true,
    name: 'Image Entry Investigation',
    method: 'PUT',
  },
  {
    description: 'Search Lab Test Investigation',
    route: '/api/investigation/entry/lab-tests',
    auth: true,
    name: 'Lab Test Entry Investigations',
    method: 'POST',
  },
  {
    description: 'Update Lab Test Investigation',
    route: '/api/investigation/entry/lab-tests/:id',
    auth: true,
    name: 'Lab Test Entry Investigation',
    method: 'PUT',
  },
  {
    description: 'Search Vaccination Investigation',
    route: '/api/investigation/entry/vaccinations',
    auth: true,
    name: 'Vaccination Entry Investigations',
    method: 'POST',
  },
  {
    description: 'Update Vaccination Investigation',
    route: '/api/investigation/entry/vaccinations/:id',
    auth: true,
    name: 'Vaccination Entry Investigation',
    method: 'PUT',
  },
  {
    description: 'Post Follow Up Patient',
    route: '/api/follow-up',
    auth: true,
    name: 'Follow Up',
    method: 'POST',
  },
  {
    description: 'Get Follow Up List',
    route: '/api/follow-up',
    auth: true,
    name: 'Follow Up',
    method: 'GET',
  },
  {
    description: 'Patient Records Report',
    route: '/api/report/patient-records',
    auth: true,
    name: 'Patient Records Report',
    method: 'POST',
  },
]

export { roles, users, profile, permissions, clientPermissions }