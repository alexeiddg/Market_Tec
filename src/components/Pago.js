import React, { Component } from 'react';

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

class Pago extends Component {
    calcularTotal(carro) {
        return carro.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);
    }

    borrarCarrito(carro) {
        return () => {
            alert('Pago realizado con éxito');
            carro.splice(0, carro.length);
            this.setState({ carro });
        };
    }

    render() {
        const { carro } = this.props;
        const total = this.calcularTotal(carro);

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
                    <p>Total a pagar: ${total.toFixed(2)}</p>
                    <button style={styles.boton} onClick={this.borrarCarrito(carro)}>Pagar</button>
                </div>
            </div>
        );
    }
}

export default Pago;
