import React from 'react'
import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';


const Formulario = ({ setCategoria }) => {

    const OPCIONES = [
        {value: 'general', label:'General'},
        {value: 'business', label:'Negocios'},
        {value: 'entertainment', label:'Entretenimiento'},
        {value: 'health', label:'Salud'},
        {value: 'science', label:'Ciencia'},
        {value: 'sports', label:'Deportes'},
        {value: 'technology', label:'Tecnología'}
    ]

    // usar customhook
    const[ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    // submit al form pasar categoria al app
    const handleSubmit = e => {
        e.preventDefault();
        setCategoria( categoria );
    }

    return (
        <div className={`${styles.buscador}row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={ handleSubmit }
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>

                    <SelectNoticias />
                    <div className='input-field col s12'>
                        <input 
                            type='submit'
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
  }

export default Formulario