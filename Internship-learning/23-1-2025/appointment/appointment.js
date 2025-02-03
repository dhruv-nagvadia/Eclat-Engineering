export class Appointment {
  constructor(id, patientName, doctorName, date, time) {
    this.id = id;
    this.patientName = patientName;
    this.doctorName = doctorName;
    this.date = date;
    this.time = time;
  }

  formatAppointment() {
    return `${this.patientName} with Dr. ${this.doctorName} on ${this.date} at ${this.time}`;
  }
}

export let appointments = [];

export const bookAppointment = (patientName, doctorName, date, time) => {
  const id = appointments.length + 1;
  const newAppointment = new Appointment(id, patientName, doctorName, date, time);
  appointments.push(newAppointment);
  return newAppointment;
};

export const updateAppointment = (id, patientName, doctorName, date, time) => {
  const appointment = appointments.find((appt) => appt.id === id);
  if (appointment) {
    appointment.patientName = patientName;
    appointment.doctorName = doctorName;
    appointment.date = date;
    appointment.time = time;
  }
};

export const deleteAppointment = (id) => {
  const index = appointments.findIndex((appt) => appt.id === id);
  if (index >= 0) {
    appointments.splice(index, 1);
  } else {
    console.log("Invalid ID. Appointment not found.");
  }
};
