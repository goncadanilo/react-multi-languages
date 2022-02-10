export type Language = "pt-BR" | "en" | "es";

export function setLanguage(language: Language) {
  localStorage.setItem("language", language);
}

export function getLanguage(): Language {
  const language = localStorage.getItem("language");
  if (language) {
    return language as Language;
  }
  return "pt-BR";
}
