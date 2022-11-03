let password = 'zxcvbnm_';

if (password.length >= 5 && password.includes('_') || password.includes('-')) {
    alert('Пароль отличный, красавчик \u{1f388}')
    
} else {
    alert('Пароль не надежный, введи другой!')
}