import Paciente from "./Paciente"
import manage from './assets/manage.png'
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 sm:w-full ">
            {pacientes && pacientes.length ? (
                <>
                    <div className="">
                        <h2 className="font-bold text-color-principal text-center sm:text-2xl text-3xl">ListadoPacientes</h2>
                        <p className="text-color-secundario text-xl mt-5 mb-5 text-center">Administra tus&nbsp;<span className="text-color-principal font-bold">Pacientes y Citas</span></p>
                    </div>
                    <div className="md:h-screen overflow-y-auto">
                        {pacientes.map((paciente) => (
                            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className="">
                        <h2 className="font-bold text-color-principal text-center sm:text-2xl text-3xl">No hay pacientes</h2>
                        <p className="text-color-secundario text-xl mt-5 mb-5 text-center">Agrega a tus nuevos pacientes&nbsp;<span className="text-color-principal font-bold">y administralos aquí</span></p>
                        <div className="bg-center">
                            <img src={manage} className="bg-auto bg-no-repeat bg-center manage"  />
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

export default ListadoPacientes