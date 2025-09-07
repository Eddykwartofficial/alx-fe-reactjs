function WelcomeMessage() {
    return (
        <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '10px',
            margin: '1rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
                Hello everyone, I am learning React at ALX!
            </h1>
            <p style={{
                fontSize: '1.2rem',
                marginBottom: '0.5rem',
                opacity: '0.9'
            }}>
                This is a simple JSX component.
            </p>
            <p style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.8rem',
                borderRadius: '5px',
                display: 'inline-block'
            }}>
                I am learning about JSX!
            </p>
        </div>
    );
}

export default WelcomeMessage;