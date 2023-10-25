import { Component } from 'react';
import Pago from './Pago';

const styles = {
    detallesCarro: {
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 100,
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    producto: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: '1px solid #aaa',
    },
    pago: {
        display: 'flex',
        backgroundColor: '#007DA2',
        border: 'none',
        boxShadow: '0px 5px 5px rgb(0,0,0,0.3)',
        color: 'white',
        width: '50%',
        borderRadius: '5px',
        padding: '5px 15px',
        fontSize: '1em',
        cursor: 'pointer',
        position: 'absolute',
        right: 60,
        bottom: -35,

    },
}

class DetallesCarro extends Component {
    render() {
        const { carro } = this.props
        console.log(carro)
        return (
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x =>
                        <li style={styles.producto} key={x.name}>
                            <img alt={x.name} src={x.img} width='40' height='32' />
                            {x.name}
                            <span>{x.cantidad}</span>
                        </li>)}
                </ul>
                <button style={styles.pago} onClick={<Pago/>}>Proceder al pago</button>
            </div>
        )
    }
}

export default DetallesCarro;