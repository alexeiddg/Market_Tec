import React, { Component } from 'react';

class Pago extends Component {
    constructor(props) {
        super(props);
        this.state = {
            costoTotal: 0, // Initialize the total cost to 0
        };
    }

    componentDidMount() {
        // Calculate the total cost from the props (assuming carro contains price information)
        const { carro } = this.props;
        const total = carro.reduce((acc, item) => acc + item.price * item.cantidad, 0);
        this.setState({ costoTotal: total });
    }

    handlePagarClick = () => {
        // Add the logic for payment here (e.g., redirect to a payment gateway)
        // You can replace the window.location.href with your payment gateway URL.
        // For simplicity, it's using a placeholder URL.
        window.location.href = 'https://example.com/payment-gateway'; // Replace with your actual payment gateway URL
    };

    render() {
        const { carro } = this.props;
        const { costoTotal } = this.state;

        return (
            <div style={styles.pagoContainer}>
                <h2>Detalles de Pago</h2>
                <ul style={styles.ul}>
                    {carro.map((x) => (
                        <li style={styles.producto} key={x.name}>
                            <img alt={x.name} src={x.img} width='40' height='32' />
                            {x.name}
                            <span>{x.cantidad}</span>
                        </li>
                    ))}
                </ul>
                <p>Total: ${costoTotal.toFixed(2)}</p>
                <button style={styles.pagoButton} onClick={this.handlePagarClick}>
                    Pagar
                </button>
            </div>
        );
    }
}

const styles = {
    pagoContainer: {
        // Define your styles for the payment container here
    },
    ul: {
        // Define your styles for the list here
    },
    producto: {
        // Define your styles for individual products here
    },
    pagoButton: {
        // Define your styles for the payment button here
    },
};

export default Pago;
