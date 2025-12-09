function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).innerText;

    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        const btn = document.querySelector(`button[onclick="copyToClipboard('${elementId}')"]`);
        const originalText = btn.innerText;

        btn.innerText = '복사완료!';
        btn.style.backgroundColor = '#33C759'; // Green check color

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = ''; // Revert to CSS default
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('복사에 실패했습니다.');
    });
}

function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }

    // Remove active class from all buttons
    const tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add active class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
