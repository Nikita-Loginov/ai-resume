export const setVarRoot = (
  element: HTMLElement | null,
  style: string,
  varName: string
) => {
  if (!element || !style || !varName) return;

  const styles = window.getComputedStyle(element);
  const styleElement = styles.getPropertyValue(`${style}`);

  document.documentElement.style.setProperty(`${varName}`, `${styleElement}`);
};
