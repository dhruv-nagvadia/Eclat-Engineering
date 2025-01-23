export const renderAppointments = (appointments) => {
  const appointmentList = document.getElementById('appointment-list');
  appointmentList.innerHTML = '';

  appointments.forEach((appointment) => {
    const appointmentElement = document.createElement('div');
    appointmentElement.classList.add('appointment-item');
    appointmentElement.innerHTML = `
      <p>${appointment.formatAppointment()}</p>
      <button onclick="editAppointment(${appointment.id})">Edit</button>
      <button onclick="deleteAppointment(${appointment.id})">Delete</button>
    `;
    appointmentList.appendChild(appointmentElement);
  });
};

export const showAppointmentForm = (existingAppointment = null) => {
  const form = document.getElementById('appointment-form');
  form.style.display = 'block';

  document.getElementById('patient-name').value = existingAppointment ? x.patientName : '';
  document.getElementById('doctor-name').value = existingAppointment ? existingAppointment.doctorName : '';
  document.getElementById('appointment-date').value = existingAppointment ? existingAppointment.date : '';
  document.getElementById('appointment-time').value = existingAppointment ? existingAppointment.time : '';
};

export const handleFormSubmission = (onSubmit) => {
  const form = document.getElementById('appointment-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const patientName = document.getElementById('patient-name').value.trim();
    const doctorName = document.getElementById('doctor-name').value.trim();
    const date = document.getElementById('appointment-date').value;
    const time = document.getElementById('appointment-time').value;

    let isValid = true;

    if (!patientName) {
      document.getElementById('patient-name-error').textContent = "Patient's name is required.";
      isValid = false;
    } else {
      document.getElementById('patient-name-error').textContent = '';
    }

    if (!doctorName) {
      document.getElementById('doctor-name-error').textContent = "Doctor's name is required.";
      isValid = false;
    } else {
      document.getElementById('doctor-name-error').textContent = '';
    }

    if (!date) {
      document.getElementById('appointment-date-error').textContent = 'Please select a valid date.';
      isValid = false;
    } else {
      document.getElementById('appointment-date-error').textContent = '';
    }

    if (!time) {
      document.getElementById('appointment-time-error').textContent = 'Please select a valid time.';
      isValid = false;
    } else {
      document.getElementById('appointment-time-error').textContent = '';
    }

    if (isValid) {
      onSubmit({ patientName, doctorName, date, time });
      form.reset();
      form.style.display = 'none';
    }
  });
};
