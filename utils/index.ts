export function applyTheme(theme: Record<string, string>) {
    
  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--cyder-${kebabCase(key)}`, value);
  });
}

function kebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
