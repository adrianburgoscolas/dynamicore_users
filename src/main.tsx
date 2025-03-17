import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import UserForm from './components/UserForm/UserForm.tsx';
import UserList, { User } from './components/UserList/UserList.tsx';

const users: User[] = [
  { name: "Carlos Mendoza", age: 25 },
  { name: "Ana López", age: 32 },
  { name: "Luis García", age: 19 },
  { name: "María Fernández", age: 28 },
  { name: "Jorge Ramírez", age: 35 },
  { name: "Sofía Pérez", age: 22 },
  { name: "Miguel Torres", age: 40 },
  { name: "Valeria Castillo", age: 30 },
  { name: "Ricardo Morales", age: 27 },
  { name: "Elena Ríos", age: 24 }
];


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<UserForm />} />
          <Route path='/add_user' element={<UserForm />} />
          <Route path='/users_list' element={<UserList userList={users} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
