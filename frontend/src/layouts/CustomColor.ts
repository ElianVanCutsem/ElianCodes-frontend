const colors = [
    { class: 'primary-green', code: '#86EFAC'},
    { class: 'primary-blue', code: '#93C5FD'},
    { class: 'primary-red', code: '#FCA5A5'},
    { class: 'primary-orange', code: '#FDBA74'},
    { class: 'primary-fuchsia', code: '#F0ABFC'}
]
document.documentElement.style.setProperty('--custom-color', colors[Math.floor(Math.random() * colors.length)].code)