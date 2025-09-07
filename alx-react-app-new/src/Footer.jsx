function Footer() {
    return (
        <footer style={{
            backgroundColor: '#34495e',
            color: 'white',
            textAlign: 'center',
            padding: '25px 0',
            marginTop: '40px',
            borderTop: '4px solid #2c3e50'
        }}>
            <p style={{
                margin: '0',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                letterSpacing: '0.5px'
            }}>
                © 2023 City Lovers
            </p>
            <p style={{
                margin: '5px 0 0 0',
                fontSize: '0.9rem',
                opacity: '0.8',
                fontStyle: 'italic'
            }}>
                Exploring the world, one city at a time
            </p>
        </footer>
    );
}
export default Footer;