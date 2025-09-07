function MainContent() {
    return (
        <main style={{
            padding: '40px 20px',
            textAlign: 'center',
            backgroundColor: '#ecf0f1',
            margin: '20px',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            border: '2px solid #bdc3c7'
        }}>
            <p style={{
                fontSize: '1.6rem',
                color: '#2c3e50',
                fontWeight: '300',
                lineHeight: '1.8',
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                I love to visit New York, Paris, and Tokyo.
            </p>
        </main>
    );
}

export default MainContent;