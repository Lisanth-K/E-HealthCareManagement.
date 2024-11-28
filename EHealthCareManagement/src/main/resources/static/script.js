window.onload = function() {
    fetchPatients();

    document.getElementById("patient-form").addEventListener("submit", function(e) {
        e.preventDefault();
        let patient = {
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            disease: document.getElementById("disease").value,
            contactNumber: document.getElementById("contact").value
        };

        fetch("/patients/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        }).then(response => response.json())
            .then(data => {
                fetchPatients();
            });
    });
}

function fetchPatients() {
    fetch("/patients/")
        .then(response => response.json())
        .then(patients => {
            let listHtml = "<ul>";
            patients.forEach(patient => {
                listHtml += `<li>${patient.name} - ${patient.disease} <button onclick="deletePatient('${patient.id}')">Delete</button></li>`;
            });
            listHtml += "</ul>";
            document.getElementById("patients-list").innerHTML = listHtml;
        });
}

function deletePatient(id) {
    fetch(`/patients/${id}`, { method: "DELETE" })
        .then(response => {
            fetchPatients();
        });
}
