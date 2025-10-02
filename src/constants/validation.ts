export const EMAIL_CONFIG = {
  required: "Email обязателен",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Введите корректный email адрес, например testtest@gmail.com",
  },
  minLength: {
    value: 5,
    message: "Email должен содержать минимум 5 символов",
  },
} as const;

export const PASSWORD_CONFIG = {
  required: "Пароль обязателен",
  minLength: {
    value: 6,
    message: "Пароль должен содержать минимум 6 символов",
  },
} as const;

export const COMPANY_CONFIG = {
  required: "Название компании обязательно",
} as const;

export const SPECIAL_CONFIG = {
  required: "Название специальности обязательно",
} as const;

export const DESCR_CONFIG = {
  required: "Описание вакансии обязательно",
} as const;
