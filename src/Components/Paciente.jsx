

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {


  const { mascota, propietario, email, telefono, observaciones, date, time, id } =
    paciente;

    const handleEliminar = () => {
      const respuesta = window.confirm('Desea Eliminar al paciente?')
      if(respuesta) {
        eliminarPaciente(id)
      }
    }

  return (
    <div>
      <p className="text-xl mt-5 mb-10 text-center"></p>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700">
          Nombre: {""}
          <span className="font-normal normal-case">{mascota}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Telefono: {""}
          <span className="font-normal normal-case">{telefono}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Fecha de Ingreso / Alta: {""}
          <span className="font-normal normal-case">{date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Horario {""}
          <span className="font-normal normal-case">{time}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
          Observaciones: {""}
          <span className="font-normal normal-case">{observaciones}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button onClick={() => setPaciente(paciente)} type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
          <button onClick={handleEliminar} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
        </div>
      </div>
    </div>
  );
};
