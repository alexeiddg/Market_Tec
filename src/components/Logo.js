import { Component } from 'react';

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        color: '#007DA2',
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                <h1>Market Tec</h1>
            </div>
        )
    }
}

export default Logo;