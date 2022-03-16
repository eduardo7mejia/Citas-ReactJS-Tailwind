import { useState, useEffect } from 'react'
import Error from './common/Error';
import { InputFormulario } from './common/InputFormulario'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)
    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        } else {
            console.log('No hay nada')
        }
    }, [paciente])
    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //Validar Formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log('Todos los campos son obligatorios')
            setError(true)
            return;
        }
        setError(false)
        //Objeto de Paciente
        const objetoPaciente = {
            nombre, propietario, email, fecha, sintomas, id: generarId()
        }
        if (paciente.id) {
            //Editando Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            //Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }
        //Reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
    return (
        <div className='md:w-1/2  lg:w-2/5 mx-5' >
            <h2 className='text-color-principal sm:text-2xl md:text-3xl text-center font-bold'>Seguimiento Pacientes</h2>
            <p className='text-color-secundario text-lg mt-5 text-center'>Añade Pacientes y&nbsp; <span className='text-color-principal font-bold'>Administralos</span></p>
            <form onSubmit={handleSubmit} className='bg-color-white shadow-md rounded-lg py-10 px-5 mt-4 mb-10'>
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-color-principal uppercase font-bold'>Nombre mascota</label>
                    <input className='border-2 border-color-cuarto hover:border-color-secundario  w-full p-2 mt-2 placeholder-color-tercero rounded-md' id='mascota' type='text' placeholder='Ej. Jesper' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-color-principal uppercase font-bold'>Nombre del propietario</label>
                    <input className='border-2 border-color-cuarto hover:border-color-secundario  w-full p-2 mt-2 placeholder-color-tercero rounded-md' id='propietario' type='text' placeholder='Ej. Eduardo Mejia' value={propietario} onChange={(e) => setPropietario(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label htmlFor="correo" className='block text-color-principal uppercase font-bold'>Correo electronico</label>
                    <input className='border-2 border-color-cuarto hover:border-color-secundario  w-full p-2 mt-2 placeholder-color-tercero rounded-md' id='correo' type='email' placeholder='Ej. correo@correo.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label htmlFor="paciente" className='block text-color-principal uppercase font-bold'>Fecha de ingreso</label>
                    <input className='border-2 border-color-cuarto hover:border-color-secundario  w-full p-2 mt-2 placeholder-color-tercero rounded-md' id='mascota' type='date' value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-color-principal uppercase font-bold'>Síntomas</label>
                    <textarea id='sintomas' placeholder='Describe los síntomas' className='border-2 border-color-cuarto hover:border-color-secundario  w-full p-2 mt-2 placeholder-color-tercero rounded-md' value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
                </div>
                <input type="submit" className='bg-color-principal/90 w-full p-3 rounded text-color-white uppercase font-bold hover:bg-color-principal cursor-pointer transition-colors' value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
            </form>
        </div>
    )
}

export default Formulario
