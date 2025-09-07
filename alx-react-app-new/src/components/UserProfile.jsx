const UserProfile = (props) => {
    return (
        <div style={{ 
            border: '1px solid gray', 
            padding: '20px', 
            margin: '20px',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '400px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ 
                color: 'blue',
                fontSize: '1.8rem',
                marginBottom: '15px',
                borderBottom: '2px solid blue',
                paddingBottom: '5px'
            }}>
                {props.name}
            </h2>
            <p style={{
                fontSize: '1.1rem',
                margin: '10px 0',
                color: '#333'
            }}>
                Age: <span style={{ 
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    fontSize: '1.2rem'
                }}>
                    {props.age}
                </span>
            </p>
            <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#555',
                fontStyle: 'italic',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ddd'
            }}>
                Bio: {props.bio}
            </p>
        </div>
    );
};