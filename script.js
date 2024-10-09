const lightSensor = new LightSensor(); // assume LightSensor is a class that detects light intensity

document.getElementById('detect-light').addEventListener('click', () => {
    const lightValue = lightSensor.getLightIntensity();
    document.getElementById('light-value').innerHTML = lightValue + ' lux';
});
