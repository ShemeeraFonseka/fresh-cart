import Alert from "react-bootstrap/Alert";

function BasicExample() {
    return (
        <>
            {["danger"].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Login Failed!
                </Alert>
            ))}
        </>
    );
}

export default BasicExample;
