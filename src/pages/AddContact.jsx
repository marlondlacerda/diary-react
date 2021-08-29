import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import actionAdd from '../redux/action/actionAdd';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      comentary: '',
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { list, handleSubmit } = this.props;
    const {
      name, email, number, comentary,
    } = this.state;
    const checkEmail = list.find((contact) => contact.email === email && email);
    const checkNumber = list.find((contact) => contact.number === number && number);

    if (!email || !number || !name) {
      return toast.warning('Por favor preencha todos os campos!');
    }

    if (checkEmail) {
      return toast.error('Esse email já existe na sua lista de Contatos!');
    }

    if (checkNumber) {
      return toast.error('Esse Telefone já existe na sua lista de Contatos!');
    }

    const validateEmail = () => {
      const isValid = email.match(/^([\w.%+-]+)@([\w-]+.)+([\w]{2,})$/i);
      if (!isValid || email.lenght === 0) {
        return true;
      }
      return false;
    };

    const validateNumber = () => {
      const isValid = number
        .match(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm);
      if (!isValid || number.lenght === 0) {
        return true;
      }
      return false;
    };

    if (validateEmail()) {
      return toast.warning('Email Inválido');
    }

    if (validateNumber()) {
      return toast.warning('Telefone Inválido');
    }

    const data = {
      id: list.length === 0 ? 0 : list[list.length - 1].id + 1,
      name,
      email,
      number,
      comentary,
    };

    return handleSubmit(data);
  }

  inputHandler({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      name, email, number, comentary,
    } = this.state;

    return (
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-2">
          Adicionar Contato:
        </h1>
        <div className="row">
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={this.onSubmitForm}>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Nome"
                  className="form-control"
                  id="132123"
                  name="name"
                  value={name}
                  onChange={this.inputHandler}
                />
                <label htmlFor="132123">
                  Nome:
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  id="floatingInput"
                  name="email"
                  value={email}
                  onChange={this.inputHandler}
                />
                <label htmlFor="floatingInput">Email:</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Número do Telefone"
                  className="form-control"
                  id="floatingInput"
                  name="number"
                  value={number}
                  onChange={this.inputHandler}
                />
                <label htmlFor="floatingInput">Telefone:</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  placeholder="Adicionar Comentário"
                  className="form-control"
                  id="floatingInput"
                  name="comentary"
                  value={comentary}
                  onChange={this.inputHandler}
                  maxLength="30"
                />
                <label htmlFor="floatingInput">
                  Adicione um comentário!
                </label>
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (data) => dispatch(actionAdd(data)),
});

const mapStateToProps = (state) => ({ list: state });

AddContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    comentary: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
