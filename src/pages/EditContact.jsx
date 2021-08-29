import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  return (
    <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">
        Atualizar Contato
        { id }
      </h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form>
            <div className="form-floating">
              <input
                type="text"
                placeholder="Nome"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Nome:</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Email:</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                placeholder="Número do Telefone"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Telefone:</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                placeholder="Adicionar Comentário"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Adicione um comentário!</label>
            </div>
            <div className="form-group  text-center">
              <input
                type="submit"
                value="Atualizar Contato"
                className="btn btn-dark"
              />
              <Link to="/" className="btn btn-danger my-2 ms-3">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
