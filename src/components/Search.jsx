import React, { useState } from 'react';

const Search = ({ restaurants }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtrados = restaurants.filter(r =>
    r.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Buscar Restaurante</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Nombre del restaurante"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="row">
        {filtrados.map((rest, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <img
                  src={rest.imagen}
                  className="card-img-top img-fluid"
                  style={{ height: '200px', objectFit: 'cover' }}
                  alt={rest.nombre}
                />
              <div className="card-body">
                <h5 className="card-title">{rest.nombre}</h5>
                <p className="card-text">{rest.descripcion}</p>
                <p><strong>Dirección:</strong> {rest.direccion}</p>
              </div>
            </div>
          </div>
        ))}
        {filtrados.length === 0 && <p>No se encontraron restaurantes.</p>}
      </div>
    </div>
  );
};

export default Search;
