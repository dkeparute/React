// I VARIANTAS
// function ButtonColorChanger({ kasNors }) {

//     return (
//         <button onClick={kasNors}>Spausk</button>
//     );
// }
// export default ButtonColorChanger;

// II VARIANTAS

function ButtonColorChanger({ kasNors }) {
    // tures priimti argumenta
    return (
        <>
            <button onClick={() => kasNors('blue')}>Spausk 1</button>
            <button onClick={() => kasNors('green')}>Spausk 2</button>
            <button onClick={() => kasNors('yellow')}>Spausk 3</button>
        </>
    );
}
export default ButtonColorChanger;