import React from 'react'

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    const { nombre, propietario, email, fecha, sintomas, id} = paciente
    const handleEliminar = () =>{
        const respuesta = confirm('¿Deseas eliminar este paciente?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 bg-color-white shadow-md px-5 py-10 rounded-xl mb-3">
            <p className="m-3 font-bold text-color-principal uppercase">Nombre:&nbsp;<span className="font-normal normal-case">{nombre}</span></p>
            <p className="m-3 font-bold text-color-principal uppercase">Nombre del Propietario:&nbsp;<span className="font-normal normal-case">{propietario}</span></p>
            <p className="m-3 font-bold text-color-principal uppercase">Correo:&nbsp;<span className="font-normal normal-case">{email}</span></p>
            <p className="m-3 font-bold text-color-principal uppercase">Fecha de ingreso:&nbsp;<span className="font-normal normal-case">{fecha}</span></p>
            <p className="m-3 font-bold text-color-principal uppercase">Síntomas:&nbsp;<span className="font-normal normal-case">{sintomas}</span></p>
            <div className='flex justify-between mt-5'>
                <button type='button' className='py-2 px-10 bg-color-principal/90 hover:bg-color-principal/100 text-color-white font-bold uppercase rounded-lg' onClick={() => setPaciente(paciente)}>Editar</button>
                <button type='button' className='py-2 px-10 outline  outline-red hover:bg-red/100 text-red hover:text-color-white font-bold uppercase rounded-lg' onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente