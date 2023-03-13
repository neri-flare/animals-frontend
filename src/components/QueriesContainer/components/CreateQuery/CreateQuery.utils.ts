export function onPropertiesChange<Entity>(
  event: React.ChangeEvent<HTMLInputElement>,
  setProperties: Function
) {
  const field = event.target.name;
  const value = event.target.value;

  setProperties((prevProps: Entity) => ({
    ...prevProps,
    [field]: value,
  }));
}
