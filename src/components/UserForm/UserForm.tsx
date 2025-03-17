import { useState } from 'react';
import './styles.css';

interface UserData {
  name: string;
  email: string;
}

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedData, setSubmittedData] = useState<UserData>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setSubmittedData({ name, email });
    }
  }

  return (
    <div className='app-user-form'>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nombre:</span>
          <input maxLength={128} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          <span>Email:</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {submittedData &&
        <div>
          <h3>Datos Ingresados:</h3>
          <p>Nombre: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      }
    </div>
  );
};

export default UserForm;
