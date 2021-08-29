import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {

    return (
        <div className="container-fluid">
            <h1 className="text-center text-dark py-3 display-2">Adicionar Contato:</h1>
            <div className="row">
                <div className="col-md-6 shadow mx-auto p-5">
                    <form>
                        <div className="form-floating">
                            <input
                            type="text"
                            placeholder="Nome"
                            className="form-control"
                            id="floatingInput"
                            required
                            />
                            <label for="floatingInput">Nome:</label>
                        </div>
                        <div className="form-floating">
                            <input
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            id="floatingInput"
                            />
                            <label for="floatingInput">Email:</label>
                        </div>
                        <div className="form-floating">
                            <input
                            type="text"
                            placeholder="Número do Telefone"
                            className="form-control"
                            id="floatingInput"
                            />
                            <label for="floatingInput">Telefone:</label>
                        </div>
                        <div className="form-floating">
                            <input
                            type="text"
                            placeholder="Adicionar Comentário"
                            className="form-control"
                            id="floatingInput"
                            />
                            <label for="floatingInput">Adicione um comentário!</label>
                        </div>
                        <div className="form-group text-center">
                            <input
                            type="submit"
                            value="Adicionar Contato"
                            className="btn btn-block btn-dark"
                            />
                            <Link to="/" className="btn btn-danger my-2 ms-3">
                                Cancelar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
