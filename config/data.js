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
    name: 'Pregnancy Care',
    description: 'Default role given to pregnancy care user.',
    type: 'PREGNANCY_CARE',
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
    path: '/human-resource/personnel/departments',
    menu: 'personnel',
    auth: true,
    description: 'Department page',
  },
  {
    name: 'Employee',
    path: '/human-resource/personnel/employees',
    menu: 'personnel',
    auth: true,
    description: 'Employee page',
  },
  {
    name: 'Position',
    path: '/human-resource/personnel/positions',
    menu: 'personnel',
    auth: true,
    description: 'Position page',
  },
  {
    name: 'Leave',
    path: '/human-resource/personnel/leaves',
    menu: 'personnel',
    auth: true,
    description: 'Leave page',
  },
  {
    name: 'Resign',
    path: '/human-resource/personnel/resigns',
    menu: 'personnel',
    auth: true,
    description: 'Resign page',
  },
  {
    name: 'Resource',
    path: '/human-resource/personnel/resources',
    menu: 'personnel',
    auth: true,
    description: 'Resource page',
  },
  {
    name: 'Resource',
    path: '/human-resource/personnel/resources/[id]',
    menu: 'hidden',
    auth: true,
    description: 'Resource details page',
  },
  {
    name: 'Write Up',
    path: '/human-resource/personnel/writeups',
    menu: 'personnel',
    auth: true,
    description: 'Write Up page',
  },
  {
    name: 'Employee By Department',
    path: '/human-resource/report/employee-by-departments',
    menu: 'reports',
    auth: true,
    description: 'Employee By Department page',
  },

  // pregnancy care
  {
    name: 'Patients',
    path: '/pregnancy-care/setting/patients',
    menu: 'setting',
    auth: true,
    description: 'Patient page',
  },
  {
    name: 'Images',
    path: '/pregnancy-care/setting/images',
    menu: 'setting',
    auth: true,
    description: 'Image page',
  },
  {
    name: 'Lab Tests',
    path: '/pregnancy-care/setting/lab-tests',
    menu: 'setting',
    auth: true,
    description: 'Lab test page',
  },
  {
    name: 'Vaccinations',
    path: '/pregnancy-care/setting/vaccinations',
    menu: 'setting',
    auth: true,
    description: 'Vaccination page',
  },

  {
    name: 'Investigations',
    path: '/pregnancy-care/investigation/investigations',
    menu: 'investigations',
    auth: true,
    description: 'Investigation page',
  },
  {
    name: 'History',
    path: '/pregnancy-care/investigation/histories',
    menu: 'investigations',
    auth: true,
    description: 'History page',
  },
  {
    name: 'Image Entry',
    path: '/pregnancy-care/investigation/entry/images',
    menu: 'entries',
    auth: true,
    description: 'Image entry page',
  },
  {
    name: 'Vaccination Entry',
    path: '/pregnancy-care/investigation/entry/vaccinations',
    menu: 'entries',
    auth: true,
    description: 'Vaccination entry page',
  },
  {
    name: 'Lab Test Entry',
    path: '/pregnancy-care/investigation/entry/lab-tests',
    menu: 'entries',
    auth: true,
    description: 'Lab Test entry page',
  },
  {
    name: 'Follow Up',
    path: '/pregnancy-care/follow-up',
    menu: 'normal',
    auth: true,
    description: 'Follow up page',
  },
  {
    name: 'Patient Record Report',
    path: '/pregnancy-care/report/patient-records',
    menu: 'reports',
    auth: true,
    description: 'Patient Record Report page',
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
    route: '/api/human-resource/personnel/employees',
    auth: true,
    name: 'Employee',
    method: 'GET',
  },
  {
    description: 'Create Employee',
    route: '/api/human-resource/personnel/employees',
    auth: true,
    name: 'Employee',
    method: 'POST',
  },
  {
    description: 'Update Employee',
    route: '/api/human-resource/personnel/employees/:id',
    auth: true,
    name: 'Employee',
    method: 'PUT',
  },
  {
    description: 'Delete Employee',
    route: '/api/human-resource/personnel/employees/:id',
    auth: true,
    name: 'Employee',
    method: 'DELETE',
  },

  // Department API Endpoints
  {
    description: 'Get Departments',
    route: '/api/human-resource/personnel/departments',
    auth: true,
    name: 'Department',
    method: 'GET',
  },
  {
    description: 'Create Department',
    route: '/api/human-resource/personnel/departments',
    auth: true,
    name: 'Department',
    method: 'POST',
  },
  {
    description: 'Update Department',
    route: '/api/human-resource/personnel/departments/:id',
    auth: true,
    name: 'Department',
    method: 'PUT',
  },
  {
    description: 'Delete Department',
    route: '/api/human-resource/personnel/departments/:id',
    auth: true,
    name: 'Department',
    method: 'DELETE',
  },

  // Position API Endpoints
  {
    description: 'Get Positions',
    route: '/api/human-resource/personnel/positions',
    auth: true,
    name: 'Position',
    method: 'GET',
  },
  {
    description: 'Create Position',
    route: '/api/human-resource/personnel/positions',
    auth: true,
    name: 'Position',
    method: 'POST',
  },
  {
    description: 'Update Position',
    route: '/api/human-resource/personnel/positions/:id',
    auth: true,
    name: 'Position',
    method: 'PUT',
  },
  {
    description: 'Delete Position',
    route: '/api/human-resource/personnel/positions/:id',
    auth: true,
    name: 'Position',
    method: 'DELETE',
  },

  // Resign API Endpoints
  {
    description: 'Get Resigns',
    route: '/api/human-resource/personnel/resigns',
    auth: true,
    name: 'Resign',
    method: 'GET',
  },
  {
    description: 'Create Resign',
    route: '/api/human-resource/personnel/resigns',
    auth: true,
    name: 'Resign',
    method: 'POST',
  },
  {
    description: 'Update Resign',
    route: '/api/human-resource/personnel/resigns/:id',
    auth: true,
    name: 'Resign',
    method: 'PUT',
  },
  {
    description: 'Delete Resign',
    route: '/api/human-resource/personnel/resigns/:id',
    auth: true,
    name: 'Resign',
    method: 'DELETE',
  },

  // Leave API Endpoints
  {
    description: 'Get Leaves',
    route: '/api/human-resource/personnel/leaves',
    auth: true,
    name: 'Leave',
    method: 'GET',
  },
  {
    description: 'Create Leave',
    route: '/api/human-resource/personnel/leaves',
    auth: true,
    name: 'Leave',
    method: 'POST',
  },
  {
    description: 'Update Leave',
    route: '/api/human-resource/personnel/leaves/:id',
    auth: true,
    name: 'Leave',
    method: 'PUT',
  },
  {
    description: 'Delete Leave',
    route: '/api/human-resource/personnel/leaves/:id',
    auth: true,
    name: 'Leave',
    method: 'DELETE',
  },
  // Resource API Endpoints
  {
    description: 'Get Resources',
    route: '/api/human-resource/personnel/resources',
    auth: true,
    name: 'Resource',
    method: 'GET',
  },
  {
    description: 'Get Resource Details',
    route: '/api/human-resource/personnel/resources/:id',
    auth: true,
    name: 'Resource',
    method: 'GET',
  },
  {
    description: 'Create Resource',
    route: '/api/human-resource/personnel/resources',
    auth: true,
    name: 'Resource',
    method: 'POST',
  },
  {
    description: 'Update Resource',
    route: '/api/human-resource/personnel/resources/:id',
    auth: true,
    name: 'Resource',
    method: 'PUT',
  },
  {
    description: 'Delete Resource',
    route: '/api/human-resource/personnel/resources/:id',
    auth: true,
    name: 'Resource',
    method: 'DELETE',
  },
  {
    description: 'Delete Resource file',
    route: '/api/human-resource/personnel/resources/files/:id',
    auth: true,
    name: 'Resource',
    method: 'PUT',
  },

  // Write Up API Endpoints
  {
    description: 'Get Write Ups',
    route: '/api/human-resource/personnel/writeups',
    auth: true,
    name: 'Write Up',
    method: 'GET',
  },
  {
    description: 'Create Write Up',
    route: '/api/human-resource/personnel/writeups',
    auth: true,
    name: 'Write Up',
    method: 'POST',
  },
  {
    description: 'Update Write Up',
    route: '/api/human-resource/personnel/writeups/:id',
    auth: true,
    name: 'Write Up',
    method: 'PUT',
  },
  {
    description: 'Delete Write Up',
    route: '/api/human-resource/personnel/writeups/:id',
    auth: true,
    name: 'Write Up',
    method: 'DELETE',
  },
  {
    description: 'Dashboard Report',
    route: '/api/human-resource/report/dashboard',
    auth: true,
    name: 'Report',
    method: 'GET',
  },
  {
    description: 'Employee By Department Report',
    route: '/api/human-resource/report/employee-by-departments',
    auth: true,
    name: 'Report',
    method: 'POST',
  },

  // Pregnancy care endpoints
  {
    description: 'Get All Patients',
    route: '/api/pregnancy-care/setting/patients',
    auth: true,
    name: 'Patient',
    method: 'GET',
  },
  {
    description: 'Create Patient',
    route: '/api/pregnancy-care/setting/patients',
    auth: true,
    name: 'Patient',
    method: 'POST',
  },
  {
    description: 'Update Patient',
    route: '/api/pregnancy-care/setting/patients/:id',
    auth: true,
    name: 'Patient',
    method: 'PUT',
  },
  {
    description: 'Delete Patient',
    route: '/api/pregnancy-care/setting/patients/:id',
    auth: true,
    name: 'Patient',
    method: 'DELETE',
  },

  {
    description: 'Get All Images',
    route: '/api/pregnancy-care/setting/images',
    auth: true,
    name: 'Image',
    method: 'GET',
  },
  {
    description: 'Create Image',
    route: '/api/pregnancy-care/setting/images',
    auth: true,
    name: 'Image',
    method: 'POST',
  },
  {
    description: 'Update Image',
    route: '/api/pregnancy-care/setting/images/:id',
    auth: true,
    name: 'Image',
    method: 'PUT',
  },
  {
    description: 'Delete Image',
    route: '/api/pregnancy-care/setting/images/:id',
    auth: true,
    name: 'Image',
    method: 'DELETE',
  },

  {
    description: 'Get All Lab Tests',
    route: '/api/pregnancy-care/setting/lab-tests',
    auth: true,
    name: 'Lab Test',
    method: 'GET',
  },
  {
    description: 'Create Lab Test',
    route: '/api/pregnancy-care/setting/lab-tests',
    auth: true,
    name: 'Lab Test',
    method: 'POST',
  },
  {
    description: 'Update Lab Test',
    route: '/api/pregnancy-care/setting/lab-tests/:id',
    auth: true,
    name: 'Lab Test',
    method: 'PUT',
  },
  {
    description: 'Delete Lab Test',
    route: '/api/pregnancy-care/setting/lab-tests/:id',
    auth: true,
    name: 'Lab Test',
    method: 'DELETE',
  },

  {
    description: 'Get All Vaccinations',
    route: '/api/pregnancy-care/setting/vaccinations',
    auth: true,
    name: 'Vaccination',
    method: 'GET',
  },
  {
    description: 'Create Vaccination',
    route: '/api/pregnancy-care/setting/vaccinations',
    auth: true,
    name: 'Vaccination',
    method: 'POST',
  },
  {
    description: 'Update Vaccination',
    route: '/api/pregnancy-care/setting/vaccinations/:id',
    auth: true,
    name: 'Vaccination',
    method: 'PUT',
  },
  {
    description: 'Delete Vaccination',
    route: '/api/pregnancy-care/setting/vaccinations/:id',
    auth: true,
    name: 'Vaccination',
    method: 'DELETE',
  },

  {
    description: 'Get All Histories',
    route: '/api/pregnancy-care/investigation/histories',
    auth: true,
    name: 'History',
    method: 'GET',
  },
  {
    description: 'Create History',
    route: '/api/pregnancy-care/investigation/histories',
    auth: true,
    name: 'History',
    method: 'POST',
  },
  {
    description: 'Update History',
    route: '/api/pregnancy-care/investigation/histories/:id',
    auth: true,
    name: 'History',
    method: 'PUT',
  },
  {
    description: 'Delete History',
    route: '/api/pregnancy-care/investigation/histories/:id',
    auth: true,
    name: 'History',
    method: 'DELETE',
  },

  {
    description: 'Get All Investigations',
    route: '/api/pregnancy-care/investigation/investigations',
    auth: true,
    name: 'Investigations',
    method: 'GET',
  },
  {
    description: 'Create Investigations',
    route: '/api/pregnancy-care/investigation/investigations',
    auth: true,
    name: 'Investigations',
    method: 'POST',
  },
  {
    description: 'Delete Investigations',
    route: '/api/pregnancy-care/investigation/investigations/:id',
    auth: true,
    name: 'Investigations',
    method: 'DELETE',
  },

  {
    description: 'Search Image Investigation',
    route: '/api/pregnancy-care/investigation/entry/images',
    auth: true,
    name: 'Image Entry Investigations',
    method: 'POST',
  },
  {
    description: 'Update Image Investigation',
    route: '/api/pregnancy-care/investigation/entry/images/:id',
    auth: true,
    name: 'Image Entry Investigation',
    method: 'PUT',
  },
  {
    description: 'Search Lab Test Investigation',
    route: '/api/pregnancy-care/investigation/entry/lab-tests',
    auth: true,
    name: 'Lab Test Entry Investigations',
    method: 'POST',
  },
  {
    description: 'Update Lab Test Investigation',
    route: '/api/pregnancy-care/investigation/entry/lab-tests/:id',
    auth: true,
    name: 'Lab Test Entry Investigation',
    method: 'PUT',
  },
  {
    description: 'Search Vaccination Investigation',
    route: '/api/pregnancy-care/investigation/entry/vaccinations',
    auth: true,
    name: 'Vaccination Entry Investigations',
    method: 'POST',
  },
  {
    description: 'Update Vaccination Investigation',
    route: '/api/pregnancy-care/investigation/entry/vaccinations/:id',
    auth: true,
    name: 'Vaccination Entry Investigation',
    method: 'PUT',
  },
  {
    description: 'Post Follow Up Patient',
    route: '/api/pregnancy-care/follow-up',
    auth: true,
    name: 'Follow Up',
    method: 'POST',
  },
  {
    description: 'Get Follow Up List',
    route: '/api/pregnancy-care/follow-up',
    auth: true,
    name: 'Follow Up',
    method: 'GET',
  },
  {
    description: 'Patient Records Report',
    route: '/api/pregnancy-care/report/patient-records',
    auth: true,
    name: 'Patient Records Report',
    method: 'POST',
  },
]

export { roles, users, profile, permissions, clientPermissions }
