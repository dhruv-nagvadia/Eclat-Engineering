import { appointments, bookAppointment, updateAppointment, deleteAppointment } from './appointment.js';
import { renderAppointments, showAppointmentForm, handleFormSubmission } from './ui.js';

const bookNewAppointment = () => {
  showAppointmentForm(); 
};

window.deleteAppointment = (id) => {
  deleteAppointment(id);
  renderAppointments(appointments);
};

window.editAppointment = (id) => {
  const appointment = appointments.find((appt) => appt.id === id);
  if (appointment) {
    showAppointmentForm(appointment);
  }
};

handleFormSubmission(({ patientName, doctorName, date, time }) => {
  const existingAppointment = appointments.find((appt) => appt.patientName === patientName);
  if (existingAppointment) {
    updateAppointment(existingAppointment.id, patientName, doctorName, date, time);
  } else {
    bookAppointment(patientName, doctorName, date, time);
  }
  renderAppointments(appointments); 
});

const bookButton = document.getElementById('book-appointment');
bookButton.addEventListener('click', bookNewAppointment);

renderAppointments(appointments);
