

function Container({ children }) {
return (
    <div className="card p-4 w-100" style={{ maxWidth: "900px" }}>
    <div className="card-body">
        {children}
    </div>
    </div>
);
}

export default Container;