// ฟังก์ชันสำหรับเปลี่ยนชื่อโปรเจกต์เป็น "Game" เมื่อคลิกที่โปรเจกต์
function changeTitle(projectElement) {
    const title = projectElement.querySelector('h3');
    title.textContent = 'Game';  // เปลี่ยนข้อความของโปรเจกต์เป็น "Game"
}

// ฟังก์ชันที่ใช้เปลี่ยนสีตัวอักษรเป็นสีเหลือง
function changeTextColorToYellow() {
    const projects = document.querySelectorAll('.project h3');
    projects.forEach(project => {
        project.style.color = 'yellow';  // เปลี่ยนสีตัวอักษรเป็นสีเหลือง
    });
}

// เพิ่มการจัดการคลิกให้กับปุ่มเปลี่ยนสี
document.getElementById('colorButton').addEventListener('click', changeTextColorToYellow);
