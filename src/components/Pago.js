import React from 'react';

const styles = {
    layout: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 0px 15px 0px',
    },
    content: {
        textAlign: 'center',
    },
    boton: {
        backgroundColor: '#007DA2',
        border: 'none',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.3)',
        color: 'white',
        width: '50%',
        borderRadius: '5px',
        padding: '5px 15px',
        fontSize: '1em',
        cursor: 'pointer',
    },
};

function Pago({ carro }) {
  // Calcular el total
  const total = carro.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);

    return (
        <div style={styles.layout}>
            <div style={styles.content}>
                <h1>Pago</h1>
                <p>Productos a comprar:</p>
                <ul>
                {carro.map((producto) => (
                    <li key={producto.name}>
                    {producto.name} - Cantidad: {producto.cantidad}
                    </li>
                ))}
                </ul>
                <p>Total a pagar: ${total}</p>
                <button style={styles.boton}>Pagar</button>
            </div>
        </div>
    );
}

export default Pago;
