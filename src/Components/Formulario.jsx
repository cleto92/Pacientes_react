import React, {  useState, useEffect } from "react";

export const Formulario = ({ setPacientes, pacientes, paciente, setPaciente  }) => {
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [date, setDate] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [time, setTime] = useState("")
  const [error, setError] = useState(false);

  useEffect(() => {
       if(Object.keys(paciente).length > 0) {
        setMascota(paciente.mascota)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setTelefono(paciente.telefono)
        setDate(paciente.Date)
        setObservaciones(paciente.observaciones)
        setTime(paciente.time)
       }
  }, [paciente]) 



  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (event) => {
    event.preventDefault(Formulario);
    if (
      [mascota, propietario, email, telefono, date, observaciones, time].includes("")
    ) {
      console.log("Debes rellenar los campos");
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      mascota,
      propietario,
      email,
      telefono,
      date,
      observaciones,
      time
    };

    if(paciente.id) {
          objetoPaciente.id = paciente.id
          const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
          setPacientes(pacientesActualizados)
          setPaciente({})
    } else {
      objetoPaciente.id = generarId()
        setPacientes([...pacientes, objetoPaciente])
    }
 
   
    setMascota('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setDate('')
    setObservaciones('')
    setTime('')

  };



  

  return (
    <div className=" container w-1/2 text-left">
      <h2 className="font-black text-3xl text-center">
        Seguimiento de Pacientes
      </h2>
      <p className="text-2xl mt-5 text-center mb-10">
        {""}
        <span className="text-indigo-600 font-bold text-lg"></span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-500 shadow-md rounded-2xl py-12 px-5 mb-10 mx-5"
      >
        <div className="mb-5">
          <label
            htmlFor="Mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la Mascota
            <input
              id="Mascota"
              required
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={mascota}
              onChange={(e) => setMascota(e.target.value)}
            />
          </label>
          <label
            htmlFor="Propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Propietario
            <input
              id="Propietario"
              required
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </label>
          <label
            htmlFor="Email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
            <input
              id="Email"
              required
              type="email"
              placeholder="Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label
            htmlFor="Telefono"
            className="block text-gray-700 uppercase font-bold"
          >
            Telefono
            <input
              id="Telefono"
              required
              type="number"
              placeholder="Telefono"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </label>
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Ingreso / Alta
            <input
              id="date"
              required
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Hora de Ingreso / Alta
            <input
              id="time"
              required
              type="time"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={time}
              onChange={(e) => setTime (e.target.value)}

            />
          </label>
          <label
            htmlFor="Observaciones"
            className="block text-gray-700 uppercase font-bold"
          >
            Observaciones
            <textarea
              id="Observaciones"
              required
              className="boder-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describir observaciones"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            />
          </label>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

        <p className="text-center mt-5">{error && "Rellenar los Campos"}</p>
      </form>
    </div>
  );
};