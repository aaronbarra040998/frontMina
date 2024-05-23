import './Loginform.css';

export default function Loginform() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  return (
    <div className="login-title">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">INGRESAR</button>
      </form>
    </div>
  );
}
