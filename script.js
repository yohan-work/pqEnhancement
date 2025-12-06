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
