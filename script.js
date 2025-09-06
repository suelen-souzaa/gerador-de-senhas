// Função para gerar a senha
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Seleção dos elementos
const passwordInput = document.getElementById('password');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const lengthInput = document.getElementById('length');

// Função para gerar a senha quando clicar no botão
generateButton.addEventListener('click', () => {
    const passwordLength = lengthInput.value;
    const newPassword = generatePassword(passwordLength);
    passwordInput.value = newPassword;
});

// Função para copiar a senha para a área de transferência
copyButton.addEventListener('click', () => {
    passwordInput.select();
    document.execCommand('copy');
    alert('Senha copiada para a área de transferência!');
});