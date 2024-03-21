document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('userName');
    const nameList = document.getElementById('nameList');
    
    // Load existing names from localStorage on page load
    loadNamesFromStorage();
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const userName = nameInput.value.trim();
      if (userName !== '') {
        addNameToList(userName);
        saveNameToStorage(userName);
        nameInput.value = '';
      }
    });
  
    function addNameToList(name) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${nameList.children.length + 1}</td>
        <td>${name}</td>
      `;
      nameList.appendChild(row);
    }
  
    function saveNameToStorage(name) {
      let names = JSON.parse(localStorage.getItem('userNames')) || [];
      names.push(name);
      localStorage.setItem('userNames', JSON.stringify(names));
    }
  
    function loadNamesFromStorage() {
      let names = JSON.parse(localStorage.getItem('userNames')) || [];
      names.forEach(function(name) {
        addNameToList(name);
      });
    }
  });
  