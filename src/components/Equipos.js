
function Equipos() {
    const equipos = [
        'Argentina',
        'Brasil',
        'Francia',
        'Alemania',
        'España',
        'Inglaterra',
        'Uruguay',
        'Países Bajos',
        'Etc'
    ];

    return (
        <div>
            <h2>Equipos Participantes Destacados</h2>
            <ul>
                {equipos.map((equipo, index) => (
                    <li key={index}>{equipo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Equipos;
