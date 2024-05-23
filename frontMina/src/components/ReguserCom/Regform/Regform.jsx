import './Regform.css';

export default function Regform() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    
    <div className="login-title">
      <form className="login-form" onSubmit={handleSubmit}>
        <input icon="🔒" type="email"    placeholder="Email" />
        <input icon="👤" type="text"     placeholder="Nombre Completo" />
        <input icon="🎓" type="text"     placeholder="Codigo de alumno" />
        <input icon="🔑" type="password" placeholder="password" />
        <button type="submit">REGISTRAR</button>
      </form>
    </div>
  );
}
