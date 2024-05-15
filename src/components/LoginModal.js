import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import login from '../services/LoginRegister';

function LoginModal({ show, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateForm = () => {
        // Simple validación como ejemplo
        if (!email || !password) {
            alert('Ambos campos son obligatorios.');
            return false;
        }
        // Aquí puedes añadir más lógica de validación
        return true;
    };

    const handleLogin = async () => {
        if (validateForm()) {
            try {
                const response = await login(email, password);
                console.log(response.message);
                handleClose();
            } catch (error) {
                alert(error.message); // Muestra mensaje de error
            }
        } else {
            alert("Por favor, complete todos los campos.");
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Ingreso Usuarios</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="acceso.email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="acceso.password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="text-left">
                        <Button variant="link" onClick={() => alert('Función para recuperar contraseña')}>
                            Olvidé mi contraseña
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" style={{ width: '100%' }} onClick={handleLogin}>
                    Ingresar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
