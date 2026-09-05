// Check login status
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}

let students = JSON.parse(localStorage.getItem("students")) || [];
let lastAddedIndex = null;

// Load students when page opens
window.onload = function () {
    displayStudents();

    document.getElementById("studentName").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addStudent();
        }
    });
};

// Add Student
function addStudent() {
    let input = document.getElementById("studentName");
    let name = input.value.trim();

    if (name === "") {
        showToast("Please enter a student name.");
        return;
    }

    let student = {
        name: name,
        present: 0,
        total: 0
    };

    students.push(student);
    lastAddedIndex = students.length - 1;

    saveData();
    displayStudents();
    showToast(name + " added to the register.");

    input.value = "";
    input.focus();
}

// Mark Attendance
function markAttendance(index, status) {
    students[index].total++;

    if (status === "Present") {
        students[index].present++;
    }

    saveData();
    displayStudents();
}

// Percentage band helper
function getBand(percentage) {
    if (percentage >= 75) return "band-good";
    if (percentage >= 50) return "band-mid";
    return "band-low";
}

// Display Students
function displayStudents() {
    let table = document.getElementById("studentList");
    table.innerHTML = "";

    if (students.length === 0) {
        table.innerHTML = `
        <tr>
            <td colspan="3">
                <div class="empty-state">No students yet — add your first student above to start marking attendance.</div>
            </td>
        </tr>`;
        updateStats();
        return;
    }

    students.forEach((student, index) => {
        let percentage = 0;

        if (student.total > 0) {
            percentage = ((student.present / student.total) * 100).toFixed(2);
        }

        let band = getBand(percentage);
        let row = document.createElement("tr");
        if (index === lastAddedIndex) {
            row.classList.add("row-enter");
        }

        row.innerHTML = `
            <td class="student-name">${student.name}</td>
            <td>
                <div class="mark-btns">
                    <button class="pill-btn pill-present" onclick="markAttendance(${index}, 'Present')">Present</button>
                    <button class="pill-btn pill-absent" onclick="markAttendance(${index}, 'Absent')">Absent</button>
                </div>
                <div class="count-line">Present: ${student.present} · Total: ${student.total}</div>
            </td>
            <td class="pct-cell">
                <div class="pct-value ${band}">${percentage}%</div>
                <div class="pct-track">
                    <div class="pct-fill ${band}" style="width:${percentage}%"></div>
                </div>
            </td>
        `;

        table.appendChild(row);
    });

    lastAddedIndex = null;
    updateStats();
}

// Update the stat tiles above the table
function updateStats() {
    document.getElementById("statTotal").textContent = students.length;

    let marked = students.filter(s => s.total > 0);
    let sessions = students.reduce((sum, s) => sum + s.total, 0);
    document.getElementById("statSessions").textContent = sessions;

    if (marked.length === 0) {
        document.getElementById("statAverage").textContent = "—";
    } else {
        let avg = marked.reduce((sum, s) => sum + (s.present / s.total) * 100, 0) / marked.length;
        document.getElementById("statAverage").textContent = avg.toFixed(1) + "%";
    }
}

// Save data to Local Storage
function saveData() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Toast notification
let toastTimer = null;
function showToast(message) {
    let toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
